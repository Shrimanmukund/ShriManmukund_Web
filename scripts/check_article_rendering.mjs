async function checkArticle(slug) {
  const url = `http://localhost:3000/knowledge/articles/${slug}/`;
  const res = await fetch(url);
  const html = await res.text();
  console.log(`\n=== Checking: ${slug} (${res.status}) ===`);
  const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (titleMatch) console.log('H1 Title:', titleMatch[1].trim());
  const authorMatch = html.match(/class="[^"]*author[^"]*"[^>]*>([\s\S]*?)<\//);
  console.log('Has Doctor Swati / author info:', html.includes('Dr. Swati'));
  console.log('Has Amravati / Shri Manmukund Hospital:', html.includes('Shri Manmukund Hospital'));
  console.log('HTML Length:', html.length);
}

async function run() {
  await checkArticle('uterine-involution-and-lactation-rasayanas-postnatal-guide');
  await checkArticle('traditional-udaraveshtana-abdominal-binding-postnatal-recovery');
  await checkArticle('postnatal-abhyanga-and-swedana-recovery-guide');
}

run();
