import os
import re

templates_dir = r"d:\MagicWorks\Projects\Manmukund Hospital web\Docs\(4) Template pages files"
files = sorted([f for f in os.listdir(templates_dir) if f.endswith('.html')])

for f in files:
    path = os.path.join(templates_dir, f)
    with open(path, 'r', encoding='utf-8') as fp:
        html = fp.read()
    
    # Strip <style> and <script> tags to see pure HTML structure
    clean_html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL | re.IGNORECASE)
    clean_html = re.sub(r'<script[^>]*>.*?</script>', '', clean_html, flags=re.DOTALL | re.IGNORECASE)
    
    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*?)</body>', clean_html, re.DOTALL | re.IGNORECASE)
    body_content = body_match.group(1) if body_match else clean_html
    
    # Save clean HTML to a scratch folder or inspect
    out_dir = r"d:\MagicWorks\Projects\Manmukund Hospital web\Manmukund_Hospital_web\scripts\cleaned_templates"
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, f.replace('.html', '.clean.html'))
    with open(out_file, 'w', encoding='utf-8') as ofp:
        ofp.write(body_content)
        
    print(f"Written cleaned HTML for {f}: size {len(body_content):,} chars")
