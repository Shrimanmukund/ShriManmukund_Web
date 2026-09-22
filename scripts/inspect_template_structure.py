import glob
import os
import re

TEMPLATE_DIR = r'D:\MagicWorks\Projects\Manmukund Hospital web\Docs\(4) Template pages files'

def inspect_file(filename):
    path = os.path.join(TEMPLATE_DIR, filename)
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Strip base64 image strings
    clean_html = re.sub(r'data:image/[^;]+;base64,[^\'\"]+', '[IMAGE]', html)
    
    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*?)</body>', clean_html, re.DOTALL)
    if not body_match:
        return
    body = body_match.group(1)
    
    # Find all top-level elements and comment markers
    top_level = re.findall(r'(<!--\s*==+\s*([^=]+?)\s*==+\s*-->|<(section|header|nav|footer|div|main)[^>]*class=[\'\"]([^\'\"]+)[\'\"])', body)
    
    print(f"==================================================")
    print(f"FILE: {filename}")
    for item in top_level[:20]:
        if item[1]: # Comment marker
            print(f"  SECTION: {item[1].strip()}")
        elif item[2]: # Element
            print(f"    <{item[2]} class=\"{item[3]}\">")

for fname in sorted(os.listdir(TEMPLATE_DIR)):
    if fname.endswith('.html'):
        inspect_file(fname)
