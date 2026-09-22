import os
import re
import sys

# Ensure UTF-8 output
sys.stdout.reconfigure(encoding='utf-8')

out_dir = r"d:\MagicWorks\Projects\Manmukund Hospital web\Manmukund_Hospital_web\scripts\cleaned_templates"
files = sorted([f for f in os.listdir(out_dir) if f.endswith('.clean.html')])

for f in files:
    path = os.path.join(out_dir, f)
    with open(path, 'r', encoding='utf-8') as fp:
        html = fp.read()
    
    print("=" * 80)
    print(f"=== {f} ===")
    print("=" * 80)
    
    parts = re.split(r'(?=<!--\s*[A-Z0-9\s/_-]+\s*-->|<section\b)', html)
    for p in parts:
        p_clean = p.strip()
        if not p_clean: continue
        if p_clean.startswith('<!-- NAV') or p_clean.startswith('<!-- MOBILE') or p_clean.startswith('<!-- FOOTER'):
            continue
        first_line = p_clean.split('\n')[0]
        m = re.search(r'<section[^>]*class=["\']([^"\']*)["\']', p_clean)
        sec_cls = m.group(1) if m else "no-section-tag"
        headings = re.findall(r'<h[1-3][^>]*>(.*?)</h[1-3]>', p_clean, re.DOTALL)
        headings_clean = [re.sub(r'<[^>]+>', '', h).strip() for h in headings]
        print(f"[{first_line[:60]}] -> <section class='{sec_cls}'>")
        if headings_clean:
            print(f"   Headings: {headings_clean[:3]}")
        classes = set(re.findall(r'class=["\']([^"\']+)["\']', p_clean))
        classes_flat = set()
        for cl in classes:
            for item in cl.split():
                classes_flat.add(item)
        print(f"   Classes used ({len(classes_flat)}): {', '.join(sorted(list(classes_flat))[:15])}")
        print()
