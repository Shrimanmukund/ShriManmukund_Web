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
    print("-" * 80)
    
    # Extract tags with classes and their text headlines
    lines = html.split('\n')
    for line in lines:
        line_s = line.strip()
        if any(line_s.startswith(f"<{t}") for t in ["<header", "<section", "<article", "<aside", "<footer", "<h1", "<h2", "<h3", "<div class="]):
            # Only print key structural lines
            if any(k in line_s for k in ["hero", "card", "grid", "bar", "wrap", "header", "section", "footer", "badge", "pill", "banner", "tab", "faq", "consultation", "author", "byline", "cta"]):
                print("  ", line_s[:130])
    print("\n")
