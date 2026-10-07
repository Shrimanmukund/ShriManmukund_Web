import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimizeHero() {
  const pngPath = path.resolve('public/images/hero/ayurveda-meets-modern-surgery.png');
  const webpPath = path.resolve('public/images/hero/ayurveda-meets-modern-surgery.webp');

  if (fs.existsSync(pngPath)) {
    // Generate optimized WebP
    const webpBuffer = await sharp(pngPath)
      .resize({ width: 640, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toBuffer();
    fs.writeFileSync(webpPath, webpBuffer);
    console.log(`Optimized hero WebP size: ${(webpBuffer.length / 1024).toFixed(1)} KB`);

    // Generate optimized PNG fallback
    const pngBuffer = await sharp(pngPath)
      .resize({ width: 640, withoutEnlargement: true })
      .png({ compressionLevel: 9, effort: 10 })
      .toBuffer();
    fs.writeFileSync(pngPath, pngBuffer);
    console.log(`Optimized hero PNG size: ${(pngBuffer.length / 1024).toFixed(1)} KB`);
  }
}

optimizeHero().catch(console.error);
