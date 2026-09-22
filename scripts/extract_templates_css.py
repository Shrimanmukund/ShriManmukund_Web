import glob
import os
import re

TEMPLATE_DIR = r'D:\MagicWorks\Projects\Manmukund Hospital web\Docs\(4) Template pages files'
OUTPUT_CSS = r'D:\MagicWorks\Projects\Manmukund Hospital web\Manmukund_Hospital_web\src\app\templates.css'

files = sorted(glob.glob(os.path.join(TEMPLATE_DIR, '*.html')))

all_css_blocks = []

for f in files:
    filename = os.path.basename(f)
    with open(f, 'r', encoding='utf-8') as fp:
        html = fp.read()
    
    style_matches = re.findall(r'<style>(.*?)</style>', html, re.DOTALL)
    for sm in style_matches:
        # replace data:image base64 with none or standard background
        clean_css = re.sub(r'url\([^\)]*data:image[^\)]*\)', 'none', sm)
        all_css_blocks.append(f"/* ========================================================\n   STYLES FROM {filename}\n   ======================================================== */\n" + clean_css)

combined_css = '\n\n'.join(all_css_blocks)

with open(OUTPUT_CSS, 'w', encoding='utf-8') as fp:
    fp.write(combined_css)

print(f"Successfully extracted {len(combined_css)} bytes into {OUTPUT_CSS}")
