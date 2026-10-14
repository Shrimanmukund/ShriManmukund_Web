async function verify() {
  const res = await fetch('http://localhost:3000/services/female-care/postnatal-panchakarma/');
  const html = await res.text();
  const regex = /<a[^>]*class="treatment-link"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    console.log('Target Link:', match[1], '| Text:', match[2].trim());
  }
}
verify();
