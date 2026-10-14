"""Pravi optimizovane WebP verzije slika proizvoda koje jos nemaju:
  public/images/thumbs/<ime>.webp  (480px, kartice)
  public/images/md/<ime>.webp      (1000px, stranica proizvoda)

Pokretanje (iz foldera frontend):  python scripts/optimize_images.py
Potreban je Pillow:                pip install Pillow

Savet: novu sliku nazovite po slugu proizvoda (npr. tuia-smaragd-4.jpg) - to pomaze Google Images.
"""
import os
import re
from PIL import Image, ImageOps

FRONT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGES = os.path.join(FRONT, 'public', 'images')
DATA = os.path.join(FRONT, 'src', 'data', 'productsData.js')
VARIANTS = [('thumbs', 480, 62), ('md', 1000, 68)]

paths = set()
# slike proizvoda + naslovne slike vodiča
for data_file in [DATA, os.path.join(FRONT, 'src', 'data', 'guides.js')]:
    src = open(data_file, encoding='utf-8').read()
    paths |= {re.sub(r"\\(.)", r"\1", m) for m in re.findall(r"'(/images/(?:[^'\\]|\\.)+)'", src)}

made = 0
for p in sorted(paths):
    name = p[len('/images/'):]
    if '/' in name or not os.path.exists(os.path.join(IMAGES, name)):
        continue
    base = os.path.splitext(name)[0]
    targets = [(d, size, q, os.path.join(IMAGES, d, base + '.webp')) for d, size, q in VARIANTS]
    if all(os.path.exists(t[3]) for t in targets):
        continue
    img = ImageOps.exif_transpose(Image.open(os.path.join(IMAGES, name))).convert('RGB')
    for d, size, q, out in targets:
        os.makedirs(os.path.dirname(out), exist_ok=True)
        copy = img.copy()
        copy.thumbnail((size, size))
        copy.save(out, 'WEBP', quality=q, method=6)
    made += 1
    print('napravljeno:', name)

print(f'gotovo, novih slika: {made}')
