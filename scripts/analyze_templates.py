import os
import re

templates_dir = r"d:\MagicWorks\Projects\Manmukund Hospital web\Docs\(4) Template pages files"
files = sorted([f for f in os.listdir(templates_dir) if f.endswith('.html')])

for f in files:
    path = os.path.join(templates_dir, f)
    with open(path, 'r', encoding='utf-8') as fp:
        html = fp.read()
    
    print("=" * 80)
    print(f"FILE: {f} (size: {len(html):,} bytes)")
    
    title_m = re.search(r'<title>(.*?)</title>', html, re.DOTALL | re.IGNORECASE)
    print("TITLE:", title_m.group(1).strip() if title_m else "No Title")
    
    # Extract embedded CSS length and check if there are key CSS variables
    style_matches = re.findall(r'<style[^>]*>(.*?)</style>', html, re.DOTALL | re.IGNORECASE)
    total_style_len = sum(len(s) for s in style_matches)
    print(f"Inline <style> blocks: {len(style_matches)}, total characters: {total_style_len:,}")

    # Extract all top-level classes used in HTML tags
    classes = set()
    for tag_match in re.finditer(r'class=["\']([^"\']+)["\']', html):
        for c in tag_match.group(1).split():
            classes.add(c)
    print(f"Unique CSS classes used in markup: {len(classes)}")
    
    # Extract main sections (<section ...>, <header ...>, <nav ...>, <footer ...>)
    print("Key Structural Tags Found:")
    structural_tags = re.findall(r'<(header|nav|main|section|aside|footer|article)[^>]*>', html, re.IGNORECASE)
    for tag in structural_tags[:15]:
        print("  ", tag.replace("\n", " ")[:120])
    print()
