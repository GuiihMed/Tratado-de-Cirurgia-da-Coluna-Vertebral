import json
import os

batches = [
    ('slice_1_4_en.json', 'slice_1_4_es.json'),
    ('slice_5_8_en.json', 'slice_5_8_es.json'),
    ('slice_9_12_en.json', 'slice_9_12_es.json'),
    ('slice_13_16_en.json', 'slice_13_16_es.json'),
    ('slice_17_20_en.json', 'slice_17_20_es.json'),
    ('slice_21_24_en.json', 'slice_21_24_es.json'),
    ('slice_25_28_en.json', 'slice_25_28_es.json'),
]

full_en = {}
full_es = {}

for en_file, es_file in batches:
    with open(en_file, 'r', encoding='utf-8') as f:
        en_data = json.load(f)
        full_en.update(en_data)
    with open(es_file, 'r', encoding='utf-8') as f:
        es_data = json.load(f)
        full_es.update(es_data)

print(f"Total English chapters loaded: {len(full_en)} (Keys: {sorted([int(k) for k in full_en.keys()])})")
print(f"Total Spanish chapters loaded: {len(full_es)} (Keys: {sorted([int(k) for k in full_es.keys()])})")

assert len(full_en) == 28, f"Expected 28 EN chapters, got {len(full_en)}"
assert len(full_es) == 28, f"Expected 28 ES chapters, got {len(full_es)}"

required_fields = [
    'numero', 'titulo', 'secao', 'autores', 'contexto', 'objetivo',
    'conteudo_principal', 'aplicacao_clinica', 'mensagem_central',
    'por_que_importa', 'decs', 'mesh', 'palavras_chave_livres',
    'cards_destaque', 'referencias', 'seo'
]

# Validation
pt_suspicious_words = [
    "não", "está", "estão", "são", "também", "através", "apresenta", "descreve",
    "capítulo", "morfologia", "quando", "entre", "portanto", "essencial",
    "deve", "devem", "segundo", "durante", "exame", "avaliação"
]

for lang, data in [('English', full_en), ('Spanish', full_es)]:
    for k in range(1, 29):
        sk = str(k)
        assert sk in data, f"Missing chapter {sk} in {lang}"
        ch = data[sk]
        for f in required_fields:
            assert f in ch, f"Missing field {f} in chapter {sk} of {lang}"
        
        # Check text lengths
        assert len(ch['titulo']) > 0, f"Empty titulo in {lang} ch {sk}"
        assert len(ch['contexto']) > 50, f"Contexto too short in {lang} ch {sk}"
        assert len(ch['objetivo']) > 30, f"Objetivo too short in {lang} ch {sk}"
        assert len(ch['aplicacao_clinica']) > 50, f"Aplicacao clinica too short in {lang} ch {sk}"
        assert len(ch['mensagem_central']) > 30, f"Mensagem central too short in {lang} ch {sk}"
        assert len(ch['por_que_importa']) > 30, f"Por que importa too short in {lang} ch {sk}"
        assert len(ch['conteudo_principal']) > 0, f"Empty conteudo_principal in {lang} ch {sk}"
        assert len(ch['seo']['titulo']) > 0, f"Empty seo.titulo in {lang} ch {sk}"
        assert len(ch['seo']['slug']) > 0, f"Empty seo.slug in {lang} ch {sk}"
        
        for idx, block in enumerate(ch['conteudo_principal']):
            assert 'subtitulo' in block and len(block['subtitulo']) > 0, f"Empty subtitulo in ch {sk} block {idx} of {lang}"
            assert 'texto' in block and len(block['texto']) > 50, f"Empty texto in ch {sk} block {idx} of {lang}"

        if lang == 'English':
            # Check for accidental Portuguese words in English
            full_text = ch['contexto'] + ' ' + ch['objetivo'] + ' ' + ch['aplicacao_clinica'] + ' ' + ch['mensagem_central']
            for w in [" através ", " não ", " estão ", " também ", " capítulo "]:
                if w in full_text.lower():
                    print(f"WARNING: Suspicious PT word '{w}' in English ch {sk}")

print("All structure and length checks passed perfectly!")

# Save to destination paths
out_en = '/Users/manoeldesign/.gemini/antigravity/brain/7e1703fb-1acf-40aa-a137-05338f0871de/scratch/slice_1_28_en.json'
out_es = '/Users/manoeldesign/.gemini/antigravity/brain/7e1703fb-1acf-40aa-a137-05338f0871de/scratch/slice_1_28_es.json'

with open(out_en, 'w', encoding='utf-8') as f:
    json.dump(full_en, f, ensure_ascii=False, indent=2)

with open(out_es, 'w', encoding='utf-8') as f:
    json.dump(full_es, f, ensure_ascii=False, indent=2)

print(f"Successfully wrote {out_en} ({os.path.getsize(out_en):,} bytes)")
print(f"Successfully wrote {out_es} ({os.path.getsize(out_es):,} bytes)")
