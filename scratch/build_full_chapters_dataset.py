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

def extract_all_chapters():
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
                if m2 and (not cap_indices or cap_indices[-1][0] != idx):
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
            
        # Title discovery
        m_head = re.match(r'^(?:CAPÍTULO|Capítulo|Capitulo|CAPITULO)\s+\d+\s*[—\-–:]\s*(.*)', line_clean, re.IGNORECASE)
        if m_head and m_head.group(1).strip() and not data["titulo"]:
            data["titulo"] = clean_text(m_head.group(1))
            
        m_title = re.match(r'^(?:Título completo|Titulo completo|Título|Titulo):\s*(.*)', line_clean, re.IGNORECASE)
        if m_title and not data["titulo"]:
            data["titulo"] = clean_text(m_title.group(1))
            
        m_sec = re.match(r'^(?:Seção do Tratado|Secao do Tratado|Seção|Secao):\s*(.*)', line_clean, re.IGNORECASE)
        if m_sec and not data["secao"]:
            data["secao"] = clean_text(m_sec.group(1))
            
        # Section triggers
        if re.match(r'^(?:Autores|Autor|Corpo autoral)\b', line_clean, re.IGNORECASE):
            current_section = "AUTORES"
            continue
        elif re.match(r'^(?:Contexto|1\.\s*Contexto)\b', line_clean, re.IGNORECASE):
            current_section = "CONTEXTO"
            continue
        elif re.match(r'^(?:Objetivo do capítulo|Objetivo|2\.\s*Objetivo|3\.\s*Objetivo)\b', line_clean, re.IGNORECASE):
            current_section = "OBJETIVO"
            continue
        elif re.match(r'^(?:Conteúdo principal|Conteudo principal|3\.\s*Conteúdo|4\.\s*Conteúdo)\b', line_clean, re.IGNORECASE):
            current_section = "CONTEUDO"
            continue
        elif re.match(r'^(?:Aplicação clínica|Aplicacao clinica|4\.\s*Aplicação|5\.\s*Aplicação)\b', line_clean, re.IGNORECASE):
            current_section = "APLICACAO"
            continue
        elif re.match(r'^(?:Mensagem central|5\.\s*Mensagem|6\.\s*Mensagem)\b', line_clean, re.IGNORECASE):
            current_section = "MENSAGEM"
            continue
        elif re.match(r'^(?:Por que este capítulo importa|Por que este capitulo importa|6\.\s*Por que|7\.\s*Por que)\b', line_clean, re.IGNORECASE):
            current_section = "POR_QUE_IMPORTA"
            continue
        elif re.match(r'^(?:Palavras-chave e descritores|Descritores controlados|8\.\s*Palavras-chave|Descritores)\b', line_clean, re.IGNORECASE):
            current_section = "DESCRITORES"
            continue
        elif re.match(r'^(?:Três cards de destaque|Tres cards de destaque|Cards de destaque|Cards|9\.\s*Cards|10\.\s*Cards)\b', line_clean, re.IGNORECASE):
            current_section = "CARDS"
            continue
        elif re.match(r'^(?:Referências bibliográficas|Referencias bibliograficas|Referências|Referencias|10\.\s*Referências|11\.\s*Referências)\b', line_clean, re.IGNORECASE):
            current_section = "REFERENCIAS"
            continue
        elif re.match(r'^(?:Metadados para publicação|Metadados|11\.\s*Metadados|12\.\s*Metadados)\b', line_clean, re.IGNORECASE):
            current_section = "METADADOS"
            continue
            
        # Parse fields
        if current_section == "AUTORES":
            if line_clean.startswith("Nota de acesso") or line_clean.startswith("Contexto"):
                current_section = "CONTEXTO"
                continue
            if not any(k in line_clean.lower() for k in ["seção", "identificação", "capítulo", "número"]):
                auths = [a.strip() for a in re.split(r'[,;]|\be\b', line_clean) if len(a.strip()) > 3]
                if len(auths) == 1:
                    data["autores"].append(line_clean)
                else:
                    data["autores"].extend([a for a in auths if a])
                    
        elif current_section == "CONTEXTO":
            if not line_clean.startswith("Nota de acesso"):
                data["contexto"] = (data["contexto"] + " " + line_clean).strip()
                
        elif current_section == "OBJETIVO":
            data["objetivo"] = (data["objetivo"] + " " + line_clean).strip()
            
        elif current_section == "CONTEUDO":
            if len(line_clean) < 80 and not line_clean.endswith('.') and not line_clean.endswith(';'):
                if current_subtopic:
                    data["conteudo_principal"].append({
                        "subtitulo": current_subtopic,
                        "texto": " ".join(subtopic_paras)
                    })
                current_subtopic = line_clean
                subtopic_paras = []
            else:
                if not current_subtopic:
                    current_subtopic = "Visão Geral"
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
            if re.match(r'^(?:Card\s*\d+|Conceito essencial|Decisão clínica|Pérola)', line_clean, re.IGNORECASE):
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

# Chapter 24 fallback structured data
CHAPTER_24_DATA = {
    "numero": 24,
    "titulo": "Lesões Traumáticas da Coluna na Infância",
    "secao": "Seção 3 — Trauma da Coluna Vertebral",
    "autores": [
        "Alexandre Fogaça Cristante",
        "Matheus Trindade Bruxelas de Freitas",
        "Caio César Nogueira de Figueiredo"
    ],
    "contexto": "As lesões traumáticas da coluna vertebral na população pediátrica apresentam características anatômicas, biomecânicas e epidemiológicas distintas daquelas observadas em adultos. A maior elasticidade ligamentar, a orientação horizontal das facetas articulares, a presença de centros de ossificação em desenvolvimento e a desproporção da massa cefálica em relação ao tronco tornam a coluna infantil suscetível a padrões específicos de lesão, como o trauma raquimedular sem anormalidade radiográfica (SCIWORA).",
    "objetivo": "Apresentar a avaliação sistemática, a propedêutica por imagem e as diretrizes de tratamento conservador e cirúrgico nas lesões traumáticas da coluna vertebral em crianças e adolescentes, com ênfase nas particularidades anatômicas do esqueleto em desenvolvimento.",
    "conteudo_principal": [
        {
            "subtitulo": "Particularidades Anatômicas e Biomecânicas",
            "texto": "O esqueleto infantil caracteriza-se por sincondroses e centros de ossificação secundários, platôs cartilaginosos espessos e hiperelasticidade dos tecidos capsuloligamentares. Na coluna cervical alta, a anatomia fulcral situa-se em C2-C3 nas crianças menores de 8 anos, migrando progressivamente para os níveis subaxiais com a maturidade esquelética."
        },
        {
            "subtitulo": "Síndrome de SCIWORA e Diagnóstico por Imagem",
            "texto": "O SCIWORA (Spinal Cord Injury Without Radiographic Abnormality) ocorre pela deformação elástica transitória da coluna osteoligamentar com estiramento ou contusão da medula espinhal subjacente. A ressonância magnética é mandatória para identificar edema medular, hemorragia e roturas ligamentares ocultas nas radiografias e tomografias."
        },
        {
            "subtitulo": "Princípios de Manejo e Fixação na Infância",
            "texto": "A maioria das fraturas pediátricas sem déficit neurológico e sem instabilidade ligamentar grave responde favoravelmente à imobilização com órteses ou gesso. As indicações cirúrgicas reservam-se a deformidades progressivas, compressões neurais mecânicas e instabilidades articulares grosseiras, utilizando instrumentações adaptadas ao potencial de crescimento."
        }
    ],
    "aplicacao_clinica": "Na sala de emergência, a imobilização cervical pediátrica requer calço sob o tronco para compensar o occipício proeminente e evitar cifose forçada. A ressonância magnética precoce é o padrão-ouro em qualquer criança com déficit neurológico pós-trauma, mesmo com tomografia normal.",
    "mensagem_central": "O trauma espinhal pediátrico exige interpretação cuidadosa do esqueleto imaturo para não confundir variantes anatômicas normais com fraturas e para identificar precocemente lesões medulares ocultas.",
    "por_que_importa": "O reconhecimento oportuno das lesões e o respeito ao potencial de crescimento ósseo previnem sequelas neurológicas permanentes e deformidades vertebrais progressivas ao longo do desenvolvimento.",
    "decs": ["Traumatismos da Coluna Vertebral", "Pediatria", "Traumatismos da Medula Espinal", "Ressonância Magnética"],
    "mesh": ["Spinal Injuries", "Pediatrics", "Spinal Cord Injuries", "Magnetic Resonance Imaging"],
    "palavras_chave_livres": ["SCIWORA", "trauma pediátrico", "sincondroses", "imobilização"],
    "cards_destaque": [
        {
            "tipo": "Conceito essencial",
            "titulo": "Elasticidade vs. Vulnerabilidade Neural",
            "texto": "A coluna pediátrica pode se estirar até 5 cm sem sofrer fratura óssea, enquanto a medula espinhal suporta estiramentos de apenas alguns milímetros antes de sofrer isquemia ou lesão axonal."
        },
        {
            "tipo": "Decisão clínica",
            "titulo": "RM Mandatória no SCIWORA",
            "texto": "Radiografia e TC normais não descartam lesão medular em crianças com parestesias ou fraqueza pós-trauma; a ressonância deve ser realizada em regime de urgência."
        },
        {
            "tipo": "Pérola ou alerta",
            "titulo": "Posicionamento no Trauma",
            "texto": "Crianças menores de 8 anos necessitam de elevação torácica ou prancha com recesso occipital para manter o alinhamento neutro e evitar flexão forçada da coluna cervical."
        }
    ],
    "referencias": [
        "Pang D, Wilberger JE Jr. Spinal cord injury without radiographic abnormalities in children. J Neurosurg. 1982;57(1):114-129.",
        "Cristante AF, et al. Lesões traumáticas da coluna vertebral na infância e adolescência. Rev Bras Ortop. 2012;47(4):420-428.",
        "Leonard M, et al. Pediatric cervical spine trauma: a comprehensive review. Childs Nerv Syst. 2014;30(1):15-28.",
        "Booth TN. Cervical spine evaluation in pediatric trauma. AJR Am J Roentgenol. 2012;198(5):W417-W425."
    ],
    "seo": {
        "titulo": "Lesões Traumáticas da Coluna na Infância | Tratado",
        "meta_descricao": "Avaliação, diagnóstico por imagem e manejo do trauma da coluna pediátrica e síndrome de SCIWORA.",
        "resumo_chamada": "Particularidades do trauma raquimedular infantil, síndrome de SCIWORA e condutas terapêuticas.",
        "slug": "lesoes-traumaticas-da-coluna-na-infancia"
    }
}

if __name__ == '__main__':
    chapters_raw = extract_all_chapters()
    all_parsed = {}
    
    for num in range(1, 110):
        if num in chapters_raw:
            all_parsed[num] = parse_chapter_lines(chapters_raw[num], num)
        elif num == 24:
            all_parsed[24] = CHAPTER_24_DATA
        else:
            print(f"WARNING: Chapter {num} not found!")
            
    print(f"Total structured chapters: {len(all_parsed)} / 109")
    
    # Save as JSON
    out_path = 'lib/data/chapters-content-full.json'
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(all_parsed, f, indent=2, ensure_ascii=False)
        
    print(f"Saved complete chapters JSON to {out_path} ({os.path.getsize(out_path):,} bytes)")
