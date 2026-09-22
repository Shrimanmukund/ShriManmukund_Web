import os
import re
import json

CONTENT_PATH = r'D:\MagicWorks\Projects\Manmukund Hospital web\Docs\content.md'
OUTPUT_JSON = r'D:\MagicWorks\Projects\Manmukund Hospital web\Manmukund_Hospital_web\src\lib\data\seeded-content.json'
OUTPUT_SQL = r'D:\MagicWorks\Projects\Manmukund Hospital web\Manmukund_Hospital_web\supabase\seed\seed.sql'

with open(CONTENT_PATH, 'r', encoding='utf-8') as f:
    raw_text = f.read()

# Split into numbered pages
sections = re.split(r'\n(?=# \d+\.)', raw_text)
print(f"Total split sections: {len(sections)-1}")

pages = []

for s in sections[1:]:
    header_match = re.match(r'# (\d+)\.\s*(.*?)\n', s)
    if not header_match:
        continue
    page_num = int(header_match.group(1))
    title = header_match.group(2).strip()
    
    url_match = re.search(r'\*\*URL:\*\*\s*`?([^`\n]+)`?', s)
    url = url_match.group(1).strip() if url_match else ""
    
    meta_title_match = re.search(r'\*\*Meta title:\*\*\s*(.*?)\n', s)
    meta_title = meta_title_match.group(1).strip() if meta_title_match else ""
    
    meta_desc_match = re.search(r'\*\*Meta description:\*\*\s*(.*?)\n', s)
    meta_desc = meta_desc_match.group(1).strip() if meta_desc_match else ""
    
    # Extract Headline
    headline_match = re.search(r'### Headline\s*\n\n?(.*?)(?=\n###|\n##|\Z)', s, re.DOTALL)
    headline = headline_match.group(1).strip() if headline_match else title
    
    # Extract Subheadline
    subheadline_match = re.search(r'### Sub-headline\s*\n\n?(.*?)(?=\n###|\n##|\Z)', s, re.DOTALL)
    subheadline = subheadline_match.group(1).strip() if subheadline_match else ""
    
    # Extract Alternative Names (Hindi / Marathi / Sanskrit)
    alt_match = re.search(r'### Alternative Names\s*\n\n?(.*?)(?=\n###|\n##|\Z)', s, re.DOTALL)
    alt_names = alt_match.group(1).strip() if alt_match else ""
    
    # Extract Answer-first summary
    summary_match = re.search(r'## Answer-First Summary\s*\n\n?(.*?)(?=\n##|\n---|\Z)', s, re.DOTALL)
    answer_first_summary = summary_match.group(1).strip() if summary_match else ""
    
    # Extract FAQs
    faqs = []
    faq_section_match = re.search(r'## (?:Frequently Asked Questions|FAQ[s]?)\s*\n\n?(.*?)(?=\n## (?!Q\d)|# \d+|\Z)', s, re.DOTALL | re.IGNORECASE)
    if faq_section_match:
        faq_text = faq_section_match.group(1)
        # Match **Q: ...** followed by answer text
        faq_items = re.findall(r'\*\*Q:?\s*(.*?)\*\*\s*\n\n?(.*?)(?=\n\*\*Q:|\n##|\Z)', faq_text, re.DOTALL)
        if not faq_items:
            # Fallback to ### Q1: ... or ### 1. ...
            faq_items = re.findall(r'###\s*(?:Q\d+[:.]?|\d+[\.:])?\s*(.*?)\n\n?(.*?)(?=\n###|\Z)', faq_text, re.DOTALL)
        for q, a in faq_items:
            clean_q = q.strip().replace('**', '').replace('Q:', '').strip()
            clean_a = a.strip()
            if clean_q and clean_a:
                faqs.append({
                    "question": clean_q,
                    "answer": clean_a
                })
                
    # Clean body markdown (everything after metadata header block)
    body_parts = s.split('---', 1)
    body = body_parts[1].strip() if len(body_parts) > 1 else s
    
    slug = url.strip('/').split('/')[-1] if url else f"page-{page_num}"
    
    pages.append({
        "pageNum": page_num,
        "title": title,
        "url": url,
        "slug": slug,
        "headline": headline,
        "subheadline": subheadline,
        "alternativeNames": alt_names,
        "metaTitle": meta_title,
        "metaDescription": meta_desc,
        "answerFirstSummary": answer_first_summary,
        "faqs": faqs,
        "rawContent": s,
        "bodyMarkdown": body
    })

total_faqs = sum(len(p['faqs']) for p in pages)
print(f"Successfully processed {len(pages)} pages with a total of {total_faqs} extracted FAQ items.")

with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
    json.dump(pages, f, indent=2, ensure_ascii=False)

print(f"Saved JSON to {OUTPUT_JSON}")
