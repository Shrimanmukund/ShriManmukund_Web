import os
import re

out_dir = r"d:\MagicWorks\Projects\Manmukund Hospital web\Manmukund_Hospital_web\scripts\cleaned_templates"
files = sorted([f for f in os.listdir(out_dir) if f.endswith('.clean.html')])

for f in files:
    path = os.path.join(out_dir, f)
    with open(path, 'r', encoding='utf-8') as fp:
        html = fp.read()
    
    print("=" * 80)
    print(f"TEMPLATE: {f}")
    print("=" * 80)
    
    # Find comments or major tag openings
    tags = re.findall(r'(<!--.*?-->|<(?:header|section|footer|aside|nav|article|div)[^>]*class="([^"]*)"[^>]*>)', html, re.DOTALL)
    for full, cls in tags:
        if full.startswith('<!--'):
            print(f"\n  [COMMENT] {full.strip()}")
        elif any(k in cls for k in ['hero', 'bar', 'grid', 'unit', 'card', 'summary', 'accordion', 'strip', 'footer', 'nav', 'container', 'header', 'content', 'flow', 'table', 'form', 'drawer']):
            print(f"    <{full.split()[0][1:]} class='{cls}'>")
    print("\n")
