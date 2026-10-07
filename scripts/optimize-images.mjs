import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');

async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;
  if (filePath.includes('favicon') || filePath.includes('logo.jpg') || filePath.includes('site.webmanifest')) return;

  const stat = fs.statSync(filePath);
  const sizeKB = stat.size / 1024;

  if (sizeKB > 80) {
    console.log(`Optimizing: ${path.relative(PUBLIC_DIR, filePath)} (${sizeKB.toFixed(1)} KB)`);
    const buffer = fs.readFileSync(filePath);
    const metadata = await sharp(buffer).metadata();

    let pipeline = sharp(buffer);
    // Resize max dimensions if extremely large (e.g. > 1600px)
    if (metadata.width && metadata.width > 1600) {
      pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
    }

    if (ext === '.jpg' || ext === '.jpeg') {
      const optimized = await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
      if (optimized.length < stat.size) {
        fs.writeFileSync(filePath, optimized);
        console.log(`  -> New size: ${(optimized.length / 1024).toFixed(1)} KB`);
      }
    } else if (ext === '.png') {
      const optimized = await pipeline.png({ quality: 85, compressionLevel: 9 }).toBuffer();
      if (optimized.length < stat.size) {
        fs.writeFileSync(filePath, optimized);
        console.log(`  -> New size: ${(optimized.length / 1024).toFixed(1)} KB`);
      }
    } else if (ext === '.webp') {
      const optimized = await pipeline.webp({ quality: 82, effort: 6 }).toBuffer();
      if (optimized.length < stat.size) {
        fs.writeFileSync(filePath, optimized);
        console.log(`  -> New size: ${(optimized.length / 1024).toFixed(1)} KB`);
      }
    }
  }
}

async function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkDir(fullPath);
    } else if (entry.isFile()) {
      await processImage(fullPath);
    }
  }
}

async function run() {
  console.log('Starting image compression scan in public/...');
  await walkDir(PUBLIC_DIR);
  console.log('Done optimizing images!');
}

run().catch(console.error);
