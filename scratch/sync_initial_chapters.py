import json, re

with open('lib/data/chapters-content-full.json', 'r', encoding='utf-8') as f:
    chapters = json.load(f)

# Load existing sections-and-chapters.ts
with open('lib/data/sections-and-chapters.ts', 'r', encoding='utf-8') as f:
    ts_code = f.read()

# Build updated INITIAL_CHAPTERS array
chapters_list = []
for num in range(1, 110):
    ch = chapters.get(str(num)) or chapters.get(num)
    if not ch:
        continue
        
    sec_id = 1
    if num >= 1 and num <= 11: sec_id = 1
    elif num <= 17: sec_id = 2
    elif num <= 26: sec_id = 3
    elif num <= 41: sec_id = 4
    elif num <= 50: sec_id = 5
    elif num <= 57: sec_id = 6
    elif num <= 61: sec_id = 7
    elif num <= 92: sec_id = 8
    elif num <= 100: sec_id = 9
    else: sec_id = 10
    
    title = ch.get("titulo", f"Capítulo {num}")
    authors_arr = ch.get("autores", [])
    authors_str = ", ".join(authors_arr)
    
    chapters_list.append({
        "secao_id": sec_id,
        "numero": num,
        "titulo_pt": title,
        "autores": authors_str
    })

# Format as TypeScript
new_init_chapters = "export const INITIAL_CHAPTERS: Omit<Capitulo, 'conteudo_html' | 'slug'>[] = [\n"
for item in chapters_list:
    new_init_chapters += f'  {{ secao_id: {item["secao_id"]}, numero: {item["numero"]}, titulo_pt: "{item["titulo_pt"]}", autores: "{item["autores"]}" }},\n'
new_init_chapters += "];"

# Replace in ts_code
updated_code = re.sub(
    r'export const INITIAL_CHAPTERS: Omit<Capitulo, [^=]*=\s*\[[\s\S]*?\];',
    new_init_chapters,
    ts_code
)

with open('lib/data/sections-and-chapters.ts', 'w', encoding='utf-8') as f:
    f.write(updated_code)

print("Successfully updated INITIAL_CHAPTERS in sections-and-chapters.ts")
