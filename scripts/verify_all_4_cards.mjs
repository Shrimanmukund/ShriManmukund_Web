async function test() {
  const routes = [
    'http://localhost:3000/services/female-care/female-proctology/',
    'http://localhost:3000/services/female-care/garbhasanskar-antenatal-care/',
    'http://localhost:3000/services/female-care/postnatal-panchakarma/',
    'http://localhost:3000/services/non-surgical-piles-treatment/rubber-band-ligation/',
    'http://localhost:3000/knowledge/articles/ninth-month-sukha-prasava-protocol-labor-preparation/',
    'http://localhost:3000/knowledge/articles/uterine-involution-and-lactation-rasayanas-postnatal-guide/',
    'http://localhost:3000/knowledge/articles/traditional-udaraveshtana-abdominal-binding-postnatal-recovery/',
  ];

  for (const url of routes) {
    const res = await fetch(url);
    console.log(`[${res.status}] ${url}`);
  }

  // Check specific card links on female-proctology
  const resFP = await fetch('http://localhost:3000/services/female-care/female-proctology/');
  const htmlFP = await resFP.text();
  console.log('\n--- Female Proctology treatment links ---');
  const regex = /<a[^>]*class="treatment-link"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  let m;
  while ((m = regex.exec(htmlFP)) !== null) {
    console.log('FP Link:', m[1], '| Text:', m[2].trim());
  }

  // Check specific card links on garbhasanskar
  const resGarbh = await fetch('http://localhost:3000/services/female-care/garbhasanskar-antenatal-care/');
  const htmlGarbh = await resGarbh.text();
  console.log('\n--- Garbhasanskar treatment links ---');
  while ((m = regex.exec(htmlGarbh)) !== null) {
    console.log('Garbh Link:', m[1], '| Text:', m[2].trim());
  }

  // Check specific card links on postnatal
  const resPost = await fetch('http://localhost:3000/services/female-care/postnatal-panchakarma/');
  const htmlPost = await resPost.text();
  console.log('\n--- Postnatal treatment links ---');
  while ((m = regex.exec(htmlPost)) !== null) {
    console.log('Postnatal Link:', m[1], '| Text:', m[2].trim());
  }
}

test();
