# -*- coding: utf-8 -*-
import json
import os
import sys

import group1
import group2
import group3
import group4
import group5

def assemble():
    chapters_en = {}
    chapters_es = {}

    for g in [group1, group2, group3, group4, group5]:
        chapters_en.update(g.chapters_en)
        chapters_es.update(g.chapters_es)

    expected_keys = [str(i) for i in range(29, 56)]
    
    print(f"Total EN chapters: {len(chapters_en)}")
    print(f"Total ES chapters: {len(chapters_es)}")

    for k in expected_keys:
        if k not in chapters_en:
            raise ValueError(f"Missing EN chapter {k}")
        if k not in chapters_es:
            raise ValueError(f"Missing ES chapter {k}")
        
        # Check integrity
        for lang, obj in [("EN", chapters_en[k]), ("ES", chapters_es[k])]:
            for req in ["titulo", "contexto", "objetivo", "conteudo_principal", "aplicacao_clinica", "mensagem_central", "por_que_importa", "decs", "mesh", "palavras_chave_livres", "cards_destaque", "seo"]:
                if req not in obj:
                    raise ValueError(f"Missing field {req} in chapter {k} ({lang})")
                if isinstance(obj[req], str) and len(obj[req].strip()) == 0 and req != "secao":
                    raise ValueError(f"Empty field {req} in chapter {k} ({lang})")

    paths = [
        "/Users/manoeldesign/Desktop/Livros SBC/slice_29_55_en.json"
    ]
    for p in paths:
        os.makedirs(os.path.dirname(p), exist_ok=True)
        with open(p, "w", encoding="utf-8") as f:
            json.dump(chapters_en, f, ensure_ascii=False, indent=2)
        print(f"Wrote EN to {p} (size: {os.path.getsize(p)} bytes)")

    paths_es = [
        "/Users/manoeldesign/Desktop/Livros SBC/slice_29_55_es.json"
    ]
    for p in paths_es:
        os.makedirs(os.path.dirname(p), exist_ok=True)
        with open(p, "w", encoding="utf-8") as f:
            json.dump(chapters_es, f, ensure_ascii=False, indent=2)
        print(f"Wrote ES to {p} (size: {os.path.getsize(p)} bytes)")

    print("SUCCESS! All chapters 29-55 verified and written in EN and ES.")

if __name__ == "__main__":
    assemble()
