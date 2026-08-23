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

def extract_all_chapter_slices():
    all_files = []
    for root, dirs, files in os.walk('capitulos_conteudo'):
        for f in sorted(files):
            if f.endswith('.docx') and not f.startswith('.'):
                all_files.append(os.path.join(root, f))
                
    chapters_raw = {}
    for file_path in all_files:
        paras = get_docx_paragraphs(file_path)
        if not paras:
            continue
            
        cap_indices = []
        for idx, line in enumerate(paras):
            m = re.match(r'^(?:CAPÍTULO|Capítulo|Capitulo|CAPITULO)\s+(\d+)', line, re.IGNORECASE)
            if m:
                cap_num = int(m.group(1))
                cap_indices.append((idx, cap_num, line))
            else:
                m2 = re.match(r'^(?:Número do capítulo|Numero do capitulo|Capítulo|Capitulo):\s*(?:Capítulo|Capitulo)?\s*(\d+)', line, re.IGNORECASE)
                if m2:
                    cap_num = int(m2.group(1))
                    if not cap_indices or cap_indices[-1][1] != cap_num:
                        cap_indices.append((idx, cap_num, line))
        
        if not cap_indices:
            fn_match = re.search(r'(?:Capítulo|Capitulo|Capítulo)\s*(\d+)', os.path.basename(file_path), re.IGNORECASE)
            if fn_match:
                cap_indices = [(0, int(fn_match.group(1)), paras[0])]
                
        seen = set()
        clean_indices = []
        for idx, num, line in cap_indices:
            if num not in seen:
                seen.add(num)
                clean_indices.append((idx, num, line))
                
        for i, (start_idx, cap_num, header_line) in enumerate(clean_indices):
            end_idx = clean_indices[i+1][0] if i+1 < len(clean_indices) else len(paras)
            chapter_paras = paras[start_idx:end_idx]
            chapters_raw[cap_num] = chapter_paras
            
    return chapters_raw

def parse_chapter_lines(lines, cap_num):
    data = {
        "numero": cap_num,
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
    
    current_section = "HEADER"
    current_subtopic = None
    subtopic_paras = []
    
    for line in lines:
        line_clean = clean_text(line)
        if not line_clean:
            continue
            
        # Title discovery from headers
        m_head = re.match(r'^(?:CAPÍTULO|Capítulo|Capitulo|CAPITULO)\s+\d+\s*[—\-–:]\s*(.*)', line_clean, re.IGNORECASE)
        if m_head and m_head.group(1).strip() and not data["titulo"]:
            data["titulo"] = clean_text(m_head.group(1))
            
        m_title = re.match(r'^(?:Título completo|Titulo completo|Título|Titulo):\s*(.*)', line_clean, re.IGNORECASE)
        if m_title and not data["titulo"]:
            data["titulo"] = clean_text(m_title.group(1))
            
        m_sec = re.match(r'^(?:Seção do Tratado|Secao do Tratado|Seção|Secao):\s*(.*)', line_clean, re.IGNORECASE)
        if m_sec and not data["secao"]:
            data["secao"] = clean_text(m_sec.group(1))
            
        # Section triggers (Both numbered and unnumbered)
        if re.match(r'^(?:\d+\.\s*)?(?:Autores|Autor|Corpo autoral)\b', line_clean, re.IGNORECASE):
            current_section = "AUTORES"
            continue
        elif re.match(r'^(?:\d+\.\s*)?Contexto\b', line_clean, re.IGNORECASE):
            current_section = "CONTEXTO"
            continue
        elif re.match(r'^(?:\d+\.\s*)?Objetivo(?:\s+do\s+capítulo)?\b', line_clean, re.IGNORECASE):
            current_section = "OBJETIVO"
            continue
        elif re.match(r'^(?:\d+\.\s*)?Conteúdo\s+principal\b', line_clean, re.IGNORECASE):
            current_section = "CONTEUDO"
            continue
        elif re.match(r'^(?:\d+\.\s*)?Aplicação\s+clínica\b', line_clean, re.IGNORECASE):
            current_section = "APLICACAO"
            continue
        elif re.match(r'^(?:\d+\.\s*)?Mensagem\s+central\b', line_clean, re.IGNORECASE):
            current_section = "MENSAGEM"
            continue
        elif re.match(r'^(?:\d+\.\s*)?Por\s+que\s+este\s+capítulo\s+importa\b', line_clean, re.IGNORECASE):
            current_section = "POR_QUE_IMPORTA"
            continue
        elif re.match(r'^(?:\d+\.\s*)?(?:Palavras-chave\s+e\s+descritores|Descritores\s+controlados|Descritores\s+DeCS\s+e\s+MeSH|Descritores)\b', line_clean, re.IGNORECASE):
            current_section = "DESCRITORES"
            continue
        elif re.match(r'^(?:\d+\.\s*)?(?:Três\s+cards\s+de\s+destaque|Tres\s+cards\s+de\s+destaque|Cards\s+de\s+destaque|Cards)\b', line_clean, re.IGNORECASE):
            current_section = "CARDS"
            continue
        elif re.match(r'^(?:\d+\.\s*)?(?:Referências\s+bibliográficas|Referencias\s+bibliograficas|Referências|Referencias)\b', line_clean, re.IGNORECASE):
            current_section = "REFERENCIAS"
            continue
        elif re.match(r'^(?:\d+\.\s*)?(?:Metadados\s+para\s+publicação|Metadados)\b', line_clean, re.IGNORECASE):
            current_section = "METADADOS"
            continue
            
        # Parse based on section
        if current_section == "AUTORES":
            if line_clean.startswith("Nota de acesso") or line_clean.startswith("Nota editorial") or line_clean.startswith("Contexto") or re.match(r'^\d+\.\s*Contexto', line_clean):
                current_section = "CONTEXTO"
                continue
            if not any(k in line_clean.lower() for k in ["seção", "identificação", "capítulo", "número"]):
                auths = [a.strip() for a in re.split(r'[,;]|\be\b', line_clean) if len(a.strip()) > 3]
                if len(auths) == 1:
                    data["autores"].append(line_clean)
                else:
                    data["autores"].extend([a for a in auths if a])
                    
        elif current_section == "CONTEXTO":
            if not line_clean.startswith("Nota de acesso") and not line_clean.startswith("Nota editorial"):
                data["contexto"] = (data["contexto"] + " " + line_clean).strip()
                
        elif current_section == "OBJETIVO":
            data["objetivo"] = (data["objetivo"] + " " + line_clean).strip()
            
        elif current_section == "CONTEUDO":
            # Subtopic header detection: short line, no period/colon, or bold topic
            if len(line_clean) < 85 and not line_clean.endswith('.') and not line_clean.endswith(';'):
                if current_subtopic:
                    data["conteudo_principal"].append({
                        "subtitulo": current_subtopic,
                        "texto": " ".join(subtopic_paras)
                    })
                current_subtopic = line_clean
                subtopic_paras = []
            else:
                if not current_subtopic:
                    current_subtopic = "Visão Geral e Fundamentos"
                subtopic_paras.append(line_clean)
                
        elif current_section == "APLICACAO":
            data["aplicacao_clinica"] = (data["aplicacao_clinica"] + " " + line_clean).strip()
            
        elif current_section == "MENSAGEM":
            data["mensagem_central"] = (data["mensagem_central"] + " " + line_clean).strip()
            
        elif current_section == "POR_QUE_IMPORTA":
            data["por_que_importa"] = (data["por_que_importa"] + " " + line_clean).strip()
            
        elif current_section == "DESCRITORES":
            if "palavras-chave livres" in line_clean.lower():
                pass
            elif line_clean.startswith("DeCS") or line_clean.startswith("MeSH"):
                pass
            elif "A correspondência" in line_clean or "correspondencia" in line_clean:
                pass
            else:
                if ";" in line_clean:
                    terms = [clean_text(t) for t in line_clean.split(";") if t.strip()]
                    data["palavras_chave_livres"].extend(terms)
                else:
                    data["decs"].append(line_clean)
                    
        elif current_section == "CARDS":
            if re.match(r'^(?:Card\s*\d+|Conceito essencial|Decisão clínica|Pérola|Alerta)', line_clean, re.IGNORECASE):
                data["cards_destaque"].append({"tipo": line_clean, "titulo": "", "texto": ""})
            elif data["cards_destaque"]:
                cur_card = data["cards_destaque"][-1]
                if not cur_card["titulo"]:
                    cur_card["titulo"] = line_clean
                else:
                    cur_card["texto"] = (cur_card["texto"] + " " + line_clean).strip()
                    
        elif current_section == "REFERENCIAS":
            if len(line_clean) > 15:
                data["referencias"].append(line_clean)
                
        elif current_section == "METADADOS":
            if "Título SEO:" in line_clean or "Titulo SEO:" in line_clean:
                data["seo"]["titulo"] = clean_text(line_clean.split(":", 1)[1])
            elif "Meta descrição:" in line_clean or "Meta descricao:" in line_clean:
                data["seo"]["meta_descricao"] = clean_text(line_clean.split(":", 1)[1])
            elif "Resumo de chamada:" in line_clean:
                data["seo"]["resumo_chamada"] = clean_text(line_clean.split(":", 1)[1])
            elif "Sugestão de slug:" in line_clean or "Sugestao de slug:" in line_clean:
                data["seo"]["slug"] = clean_text(line_clean.split(":", 1)[1])

    if current_subtopic and subtopic_paras:
        data["conteudo_principal"].append({
            "subtitulo": current_subtopic,
            "texto": " ".join(subtopic_paras)
        })
        
    return data

# Load INITIAL_CHAPTERS to fill any missing authors/titles from master catalog
def load_master_chapters():
    with open('lib/data/sections-and-chapters.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract INITIAL_CHAPTERS array
    match = re.search(r'export const INITIAL_CHAPTERS:[^=]*=\s*(\[[\s\S]*?\]);', content)
    if not match:
        print("Warning: could not parse INITIAL_CHAPTERS from ts file")
        return {}
        
    js_text = match.group(1)
    # Simple regex extraction of items
    items = {}
    for block in re.finditer(r'\{\s*secao_id:\s*(\d+),\s*numero:\s*(\d+),\s*titulo_pt:\s*"([^"]*)",\s*autores:\s*"([^"]*)"\s*\}', js_text):
        sec_id = int(block.group(1))
        num = int(block.group(2))
        title = block.group(3)
        authors = block.group(4)
        items[num] = {
            "secao_id": sec_id,
            "titulo": title,
            "autores": [a.strip() for a in authors.split(",") if a.strip()]
        }
    return items

if __name__ == '__main__':
    raw_slices = extract_all_chapter_slices()
    master = load_master_chapters()
    
    complete_dataset = {}
    from build_full_chapters_dataset import CHAPTER_24_DATA
    
    for num in range(1, 110):
        if num in raw_slices:
            parsed = parse_chapter_lines(raw_slices[num], num)
            # Merge master data if field is empty
            if num in master:
                if not parsed["titulo"]:
                    parsed["titulo"] = master[num]["titulo"]
                if not parsed["autores"]:
                    parsed["autores"] = master[num]["autores"]
            complete_dataset[num] = parsed
        elif num == 24:
            complete_dataset[24] = CHAPTER_24_DATA
            
    print(f"Generated complete dataset for {len(complete_dataset)} chapters.")
    
    # Save as JSON
    out_path = 'lib/data/chapters-content-full.json'
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(complete_dataset, f, indent=2, ensure_ascii=False)
        
    print(f"File updated at {out_path} ({os.path.getsize(out_path):,} bytes)")
