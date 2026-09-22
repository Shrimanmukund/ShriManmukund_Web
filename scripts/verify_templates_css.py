import os
import re

out_dir = r"d:\MagicWorks\Projects\Manmukund Hospital web\Manmukund_Hospital_web\scripts\cleaned_templates"
all_classes = set()
for f in os.listdir(out_dir):
    if f.endswith('.clean.html'):
        with open(os.path.join(out_dir, f), 'r', encoding='utf-8') as fp:
            html = fp.read()
        for m in re.finditer(r'class=["\']([^"\']+)["\']', html):
            for c in m.group(1).split():
                all_classes.add(c)

print(f"Total unique classes across all 9 HTML templates: {len(all_classes)}")

css_path = "src/app/templates.css"
with open(css_path, "r", encoding="utf-8") as fp:
    css_content = fp.read()

missing = []
for c in sorted(all_classes):
    # Check if .c is found in css_content
    pattern = r'\.' + re.escape(c) + r'[\s,\.:\{#\[>]'
    if not re.search(pattern, css_content):
        # Also check without trailing punctuation
        if f".{c}" not in css_content:
            missing.append(c)

print(f"Missing classes in templates.css: {len(missing)}")
if missing:
    print("Missing list:")
    for m in missing:
        print("  -", m)
