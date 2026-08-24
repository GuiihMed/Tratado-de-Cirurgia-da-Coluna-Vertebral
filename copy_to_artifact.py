import json
import shutil

src_en = "/Users/manoeldesign/Desktop/Livros SBC/slice_56_82_en.json"
src_es = "/Users/manoeldesign/Desktop/Livros SBC/slice_56_82_es.json"

dst_en = "/Users/manoeldesign/.gemini/antigravity/brain/b4e8365c-df76-4689-8367-bd1429ffea6c/scratch/slice_56_82_en.json"
dst_es = "/Users/manoeldesign/.gemini/antigravity/brain/b4e8365c-df76-4689-8367-bd1429ffea6c/scratch/slice_56_82_es.json"

try:
    shutil.copy(src_en, dst_en)
    shutil.copy(src_es, dst_es)
    print("Successfully copied to subagent artifact scratch folder!")
except Exception as e:
    print(f"Could not copy via python: {e}")
