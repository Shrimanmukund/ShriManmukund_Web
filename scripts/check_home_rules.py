import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open(r'd:\MagicWorks\Projects\Manmukund Hospital web\Docs\(4) Template pages files\template-c-01-home.html', 'r', encoding='utf-8') as f:
    c = f.read()

rules = [
    r'\.nav\s*\{[^}]*\}',
    r'\.nav-inner\s*\{[^}]*\}',
    r'\.nav-menu\s*\{[^}]*\}',
    r'\.nav-menu a\s*\{[^}]*\}',
    r'\.nav-cta\s*\{[^}]*\}',
    r'\.knowledge\s*\{[^}]*\}',
    r'\.article-card\s*\{[^}]*\}',
    r'\.article-type\s*\{[^}]*\}',
    r'\.article-title\s*\{[^}]*\}',
    r'\.article-excerpt\s*\{[^}]*\}',
    r'\.article-meta\s*\{[^}]*\}',
    r'\.article-time\s*\{[^}]*\}',
    r'\.article-more\s*\{[^}]*\}',
]

for r in rules:
    m = re.findall(r, c)
    print('Pattern:', r)
    for match in m:
        print(match.strip())
    print('=' * 40)
