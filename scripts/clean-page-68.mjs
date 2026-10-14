import fs from 'fs';

const filePath = 'src/lib/data/seeded-content.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const item68 = data.find(p => p.pageNum === 68 || p.slug === 'postnatal-panchakarma');
if (item68) {
  const cutOff = '\n\n---\n\n# 68a. Masanumasik Garbhsanskara';
  if (item68.rawContent.includes(cutOff)) {
    item68.rawContent = item68.rawContent.split(cutOff)[0] + '\n\n---';
    console.log('Cleaned rawContent for page 68');
  }
  if (item68.bodyMarkdown.includes(cutOff)) {
    item68.bodyMarkdown = item68.bodyMarkdown.split(cutOff)[0] + '\n\n---';
    console.log('Cleaned bodyMarkdown for page 68');
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Successfully updated seeded-content.json');
} else {
  console.error('Item 68 not found');
}
