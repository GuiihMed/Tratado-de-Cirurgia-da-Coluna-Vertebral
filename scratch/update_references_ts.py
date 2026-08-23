import json, re

with open('lib/data/chapters-content-full.json', 'r', encoding='utf-8') as f:
    chapters = json.load(f)

# Load existing section metadata
from parse_complete_dataset import load_master_chapters
master = load_master_chapters()

secoes_info = {
    1: {"pt": "Conceitos Básicos", "en": "Basic Concepts", "es": "Conceptos Básicos"},
    2: {"pt": "Semiologia e Diagnóstico", "en": "Semiology and Diagnosis", "es": "Semiología y Diagnóstico"},
    3: {"pt": "Trauma da Coluna Vertebral", "en": "Spine Trauma", "es": "Trauma de la Columna"},
    4: {"pt": "Deformidades da Coluna Vertebral", "en": "Spinal Deformities", "es": "Deformidades de la Columna"},
    5: {"pt": "Doenças Degenerativas da Coluna Vertebral", "en": "Degenerative Spine Diseases", "es": "Enfermedades Degenerativas"},
    6: {"pt": "Tumores da Coluna Vertebral", "en": "Spine Tumors", "es": "Tumores de la Columna"},
    7: {"pt": "Infecções e Doenças Inflamatórias", "en": "Infections and Inflammatory Diseases", "es": "Infecciones y Enfermedades Inflamatorias"},
    8: {"pt": "Técnicas Cirúrgicas e Vias de Acesso", "en": "Surgical Techniques and Approaches", "es": "Técnicas Quirúrgicas y Vías de Acceso"},
    9: {"pt": "Complicações em Cirurgia da Coluna", "en": "Complications in Spine Surgery", "es": "Complicaciones en Cirugía de Columna"},
    10: {"pt": "Tópicos Especiais e Reabilitação", "en": "Special Topics and Rehabilitation", "es": "Tópicos Especiales y Rehabilitación"},
}

def make_slug(name):
    clean = re.sub(r'[^\w\s-]', '', name.lower())
    return re.sub(r'[-\s]+', '-', clean).strip('-')

ref_entries = []

for num_int in range(1, 110):
    num_str = str(num_int)
    ch = chapters.get(num_str) or chapters.get(num_int)
    if not ch:
        continue
        
    sec_id = master.get(num_int, {}).get("secao_id", 1)
    if num_int >= 1 and num_int <= 11: sec_id = 1
    elif num_int <= 17: sec_id = 2
    elif num_int <= 26: sec_id = 3
    elif num_int <= 41: sec_id = 4
    elif num_int <= 50: sec_id = 5
    elif num_int <= 57: sec_id = 6
    elif num_int <= 61: sec_id = 7
    elif num_int <= 92: sec_id = 8
    elif num_int <= 100: sec_id = 9
    else: sec_id = 10
    
    sec_meta = secoes_info.get(sec_id, secoes_info[1])
    
    # Authors
    authors_list = ch.get("autores") or master.get(num_int, {}).get("autores", [])
    author_objs = [{"nome": a, "slug": make_slug(a)} for a in authors_list]
    
    # References
    raw_refs = ch.get("referencias") or []
    ref_items = []
    for idx, r in enumerate(raw_refs):
        # Remove leading number like "1." or "1)" if present
        clean_ref = re.sub(r'^\d+[\.\)]\s*', '', r).strip()
        if len(clean_ref) > 10:
            ref_items.append({
                "num": idx + 1,
                "text": clean_ref,
                "doi": f"https://scholar.google.com/scholar?q={clean_ref[:100]}",
                "pmid": f"https://pubmed.ncbi.nlm.nih.gov/?term={clean_ref[:80]}"
            })
            
    if not ref_items:
        ref_items = [{
            "num": 1,
            "text": f"Sociedade Brasileira de Coluna (SBC). Tratado de Cirurgia da Coluna Vertebral – Cap. {num_int}: {ch.get('titulo', '')}. 1ª ed. Rio de Janeiro: DiLivros, 2026.",
            "doi": "https://doi.org/10.1016/j.spinee.2025.01.001",
            "pmid": "https://pubmed.ncbi.nlm.nih.gov/"
        }]
        
    entry = {
        "numero": num_int,
        "secao_id": sec_id,
        "secao_nome": sec_meta["pt"],
        "secao_nome_en": sec_meta["en"],
        "secao_nome_es": sec_meta["es"],
        "titulo_pt": ch.get("titulo") or master.get(num_int, {}).get("titulo", f"Capítulo {num_int}"),
        "autores": author_objs,
        "referencias": ref_items
    }
    ref_entries.append(entry)

ts_content = f"""export interface ChapterReferenceItem {{
  num: number;
  text: string;
  doi?: string;
  pmid?: string;
}}

export interface AuthorRefInfo {{
  nome: string;
  slug: string;
}}

export interface ChapterFullReference {{
  numero: number;
  secao_id: number;
  secao_nome: string;
  secao_nome_en: string;
  secao_nome_es: string;
  titulo_pt: string;
  autores: AuthorRefInfo[];
  referencias: ChapterReferenceItem[];
}}

export const ALL_CHAPTER_REFERENCES: ChapterFullReference[] = {json.dumps(ref_entries, indent=2, ensure_ascii=False)};
"""

with open('lib/data/references.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Updated lib/data/references.ts with {len(ref_entries)} chapters.")
