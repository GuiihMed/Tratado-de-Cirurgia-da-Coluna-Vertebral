import os
import zipfile
import re
import json
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

def normalize_text(text):
    return re.sub(r'\s+', ' ', text).strip()

def parse_docx_files():
    all_files = []
    for root, dirs, files in os.walk('capitulos_conteudo'):
        for f in sorted(files):
            if f.endswith('.docx') and not f.startswith('.'):
                all_files.append(os.path.join(root, f))
    
    print(f"Total docx files found: {len(all_files)}")
    
    # We will parse each file into chapters
    chapters = {}
    
    for file_path in all_files:
        paras = get_docx_paragraphs(file_path)
        if not paras:
            continue
            
        # Check if file has multiple chapters
        # Look for chapter delimiter patterns
        cap_indices = []
        for idx, line in enumerate(paras):
            # Pattern 1: CAPÍTULO XX — Title or CAPÍTULO XX
            m = re.match(r'^(?:CAPÍTULO|Capítulo|Capitulo|CAPITULO)\s+(\d+)', line, re.IGNORECASE)
            if m:
                cap_num = int(m.group(1))
                cap_indices.append((idx, cap_num, line))
            else:
                # Pattern 2: Número do capítulo: XX or Número do capítulo: Capítulo XX
                m2 = re.match(r'^(?:Número do capítulo|Numero do capitulo|Capítulo|Capitulo):\s*(?:Capítulo|Capitulo)?\s*(\d+)', line, re.IGNORECASE)
                if m2 and (not cap_indices or cap_indices[-1][0] != idx):
                    cap_num = int(m2.group(1))
                    # Only add if it's the start of a chapter
                    if not cap_indices or cap_indices[-1][1] != cap_num:
                        cap_indices.append((idx, cap_num, line))
        
        # If no explicit chapter header found, deduce from filename
        if not cap_indices:
            fn_match = re.search(r'(?:Capítulo|Capitulo|Capítulo)\s*(\d+)', os.path.basename(file_path), re.IGNORECASE)
            if fn_match:
                cap_indices = [(0, int(fn_match.group(1)), paras[0])]
        
        # Deduplicate cap_indices by cap_num
        seen = set()
        clean_indices = []
        for idx, num, line in cap_indices:
            if num not in seen:
                seen.add(num)
                clean_indices.append((idx, num, line))
                
        # Split paragraphs per chapter
        for i, (start_idx, cap_num, header_line) in enumerate(clean_indices):
            end_idx = clean_indices[i+1][0] if i+1 < len(clean_indices) else len(paras)
            chapter_paras = paras[start_idx:end_idx]
            chapters[cap_num] = {
                "file": file_path,
                "header_line": header_line,
                "paras": chapter_paras
            }
            
    print(f"Successfully extracted {len(chapters)} chapters!")
    missing = [i for i in range(1, 110) if i not in chapters]
    print(f"Missing chapters: {missing}")
    
    return chapters

if __name__ == '__main__':
    chapters = parse_docx_files()
    for num in sorted(chapters.keys()):
        ch = chapters[num]
        print(f"Cap {num:03d} (lines: {len(ch['paras']):3d}): {ch['header_line'][:60]} [from {os.path.basename(ch['file'])}]")
