import os, zipfile, re, json
import xml.etree.ElementTree as ET

def get_docx_paragraphs(path):
    try:
        with zipfile.ZipFile(path) as z:
            xml_content = z.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            paragraphs = []
            for p in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
                texts = [node.text for node in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text]
                if texts:
                    paragraphs.append(''.join(texts).strip())
            return [p for p in paragraphs if p]
    except Exception as e:
        print(f"Error reading {path}: {e}")
        return []

def clean_text(t):
    return re.sub(r'\s+', ' ', t).strip()

def parse_single_chapter(lines, cap_num_hint=None):
    data = {
        "numero": cap_num_hint,
        "titulo": "",
        "secao": "",
        "autores": [],
        "contexto": "",
        "objetivo": "",
        "conteudo_principal": [],
        "aplicacao_clinica": "",
        "mensagem_central": "",
        "por_que_importa": "",
        "decs": [],
        "mesh": [],
        "palavras_chave_livres": [],
        "cards_destaque": [],
        "referencias": [],
        "seo": {
            "titulo": "",
            "meta_descricao": "",
            "resumo_chamada": "",
            "slug": ""
        }
    }
    
    # State tracking
    current_section = "HEADER"
    current_subtopic = None
    subtopic_paras = []
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Check chapter title from header
        m_head = re.match(r'^(?:CAPÍTULO|Capítulo|Capitulo|CAPITULO)\s+(\d+)\s*[—\-–:]\s*(.*)', line, re.IGNORECASE)
        if m_head:
            data["numero"] = int(m_head.group(1))
            if m_head.group(2).strip():
                data["titulo"] = clean_text(m_head.group(2))
            i += 1
            continue
            
        m_num = re.match(r'^(?:Número do capítulo|Numero do capitulo|Capítulo|Capitulo):\s*(?:Capítulo|Capitulo)?\s*(\d+)', line, re.IGNORECASE)
        if m_num:
            data["numero"] = int(m_num.group(1))
            i += 1
            continue
            
        m_title = re.match(r'^(?:Título completo|Titulo completo|Título|Titulo):\s*(.*)', line, re.IGNORECASE)
        if m_title:
            data["titulo"] = clean_text(m_title.group(1))
            i += 1
            continue
            
        m_sec = re.match(r'^(?:Seção do Tratado|Secao do Tratado|Seção|Secao):\s*(.*)', line, re.IGNORECASE)
        if m_sec:
            data["secao"] = clean_text(m_sec.group(1))
            i += 1
            continue
            
        # Section changes
        if re.match(r'^(?:Autores|Autor)\b', line, re.IGNORECASE):
            current_section = "AUTORES"
            i += 1
            continue
        elif re.match(r'^(?:Contexto|1\.\s*Contexto)\b', line, re.IGNORECASE):
            current_section = "CONTEXTO"
            i += 1
            continue
        elif re.match(r'^(?:Objetivo do capítulo|Objetivo|2\.\s*Objetivo|3\.\s*Objetivo)\b', line, re.IGNORECASE):
            current_section = "OBJETIVO"
            i += 1
            continue
        elif re.match(r'^(?:Conteúdo principal|Conteudo principal|3\.\s*Conteúdo|4\.\s*Conteúdo)\b', line, re.IGNORECASE):
            current_section = "CONTEUDO"
            i += 1
            continue
        elif re.match(r'^(?:Aplicação clínica|Aplicacao clinica|4\.\s*Aplicação|5\.\s*Aplicação)\b', line, re.IGNORECASE):
            current_section = "APLICACAO"
            i += 1
            continue
        elif re.match(r'^(?:Mensagem central|5\.\s*Mensagem|6\.\s*Mensagem)\b', line, re.IGNORECASE):
            current_section = "MENSAGEM"
            i += 1
            continue
        elif re.match(r'^(?:Por que este capítulo importa|Por que este capitulo importa|6\.\s*Por que|7\.\s*Por que)\b', line, re.IGNORECASE):
            current_section = "POR_QUE_IMPORTA"
            i += 1
            continue
        elif re.match(r'^(?:Palavras-chave e descritores|Descritores controlados|8\.\s*Palavras-chave)\b', line, re.IGNORECASE):
            current_section = "DESCRITORES"
            i += 1
            continue
        elif re.match(r'^(?:Três cards de destaque|Tres cards de destaque|Cards de destaque|9\.\s*Cards|10\.\s*Cards)\b', line, re.IGNORECASE):
            current_section = "CARDS"
            i += 1
            continue
        elif re.match(r'^(?:Referências bibliográficas|Referencias bibliograficas|Referências|Referencias|10\.\s*Referências|11\.\s*Referências)\b', line, re.IGNORECASE):
            current_section = "REFERENCIAS"
            i += 1
            continue
        elif re.match(r'^(?:Metadados para publicação|Metadados|11\.\s*Metadados|12\.\s*Metadados)\b', line, re.IGNORECASE):
            current_section = "METADADOS"
            i += 1
            continue
            
        # Parse content based on current section
        if current_section == "AUTORES":
            if line.startswith("Nota de acesso") or line.startswith("Contexto"):
                current_section = "CONTEXTO"
                continue
            if not any(k in line.lower() for k in ["seção", "identificação", "capítulo"]):
                # Split multiple authors if comma/semicolon or separate lines
                auths = [a.strip() for a in re.split(r'[,;]|\be\b', line) if len(a.strip()) > 3]
                if len(auths) == 1:
                    data["autores"].append(clean_text(line))
                else:
                    data["autores"].extend([clean_text(a) for a in auths if a])
                    
        elif current_section == "CONTEXTO":
            if not line.startswith("Nota de acesso"):
                data["contexto"] = (data["contexto"] + " " + clean_text(line)).strip()
                
        elif current_section == "OBJETIVO":
            data["objetivo"] = (data["objetivo"] + " " + clean_text(line)).strip()
            
        elif current_section == "CONTEUDO":
            # Check if line looks like a subtopic title (short, no period at end, or specific keywords)
            if len(line) < 80 and not line.endswith('.') and not line.endswith(';'):
                if current_subtopic:
                    data["conteudo_principal"].append({
                        "subtitulo": current_subtopic,
                        "texto": " ".join(subtopic_paras)
                    })
                current_subtopic = clean_text(line)
                subtopic_paras = []
            else:
                if not current_subtopic:
                    current_subtopic = "Visão Geral"
                subtopic_paras.append(clean_text(line))
                
        elif current_section == "APLICACAO":
            data["aplicacao_clinica"] = (data["aplicacao_clinica"] + " " + clean_text(line)).strip()
            
        elif current_section == "MENSAGEM":
            data["mensagem_central"] = (data["mensagem_central"] + " " + clean_text(line)).strip()
            
        elif current_section == "POR_QUE_IMPORTA":
            data["por_que_importa"] = (data["por_que_importa"] + " " + clean_text(line)).strip()
            
        elif current_section == "DESCRITORES":
            if "palavras-chave livres" in line.lower():
                pass
            elif line.startswith("DeCS") or line.startswith("MeSH"):
                pass
            elif "A correspondência" in line or "correspondencia" in line:
                pass
            else:
                if ";" in line:
                    terms = [clean_text(t) for t in line.split(";") if t.strip()]
                    data["palavras_chave_livres"].extend(terms)
                else:
                    data["decs"].append(clean_text(line))
                    
        elif current_section == "CARDS":
            if re.match(r'^(?:Card\s*\d+|Conceito essencial|Decisão clínica|Pérola)', line, re.IGNORECASE):
                data["cards_destaque"].append({"tipo": clean_text(line), "titulo": "", "texto": ""})
            elif data["cards_destaque"]:
                cur_card = data["cards_destaque"][-1]
                if not cur_card["titulo"]:
                    cur_card["titulo"] = clean_text(line)
                else:
                    cur_card["texto"] = (cur_card["texto"] + " " + clean_text(line)).strip()
                    
        elif current_section == "REFERENCIAS":
            if re.match(r'^\d+[\.\)]\s*', line) or len(line) > 20:
                data["referencias"].append(clean_text(line))
                
        elif current_section == "METADADOS":
            if "Título SEO:" in line or "Titulo SEO:" in line:
                data["seo"]["titulo"] = clean_text(line.split(":", 1)[1])
            elif "Meta descrição:" in line or "Meta descricao:" in line:
                data["seo"]["meta_descricao"] = clean_text(line.split(":", 1)[1])
            elif "Resumo de chamada:" in line:
                data["seo"]["resumo_chamada"] = clean_text(line.split(":", 1)[1])
            elif "Sugestão de slug:" in line or "Sugestao de slug:" in line:
                data["seo"]["slug"] = clean_text(line.split(":", 1)[1])
                
        i += 1
        
    # Flush remaining subtopic in content
    if current_subtopic and subtopic_paras:
        data["conteudo_principal"].append({
            "subtitulo": current_subtopic,
            "texto": " ".join(subtopic_paras)
        })
        
    return data

if __name__ == '__main__':
    from parse_all_chapters import parse_docx_files
    chapters = parse_docx_files()
    
    parsed_all = {}
    for num, ch in sorted(chapters.items()):
        parsed = parse_single_chapter(ch["paras"], cap_num_hint=num)
        parsed_all[num] = parsed
        
    print(f"\n--- Parsed summary for Chapter 1 ---")
    print(json.dumps(parsed_all[1], indent=2, ensure_ascii=False)[:800])
    
    print(f"\n--- Parsed summary for Chapter 8 ---")
    print(json.dumps(parsed_all[8], indent=2, ensure_ascii=False)[:800])
