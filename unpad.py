from PIL import Image
import glob
import os

for f in glob.glob('proje_resim/Roomerang/*.png'):
    if 'Roomerang.png' in f: continue
    try:
        img = Image.open(f).convert("RGBA")
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            img.save(f)
            print(f"Cropped {f} to {img.size}")
    except Exception as e:
        print(e)
