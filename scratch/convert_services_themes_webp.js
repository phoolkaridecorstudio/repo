const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');

const imagesToConvert = [
  'public/images/services/birthday-decor.png',
  'public/images/services/corporate-events.png',
  'public/images/services/festival-decor.png',
  'public/images/services/intimate-gatherings.png',
  'public/images/services/theme-parties.png',
  'public/images/services/wedding-decor.png',
  'public/images/themes/celestial-night.png',
  'public/images/themes/enchanted-garden.png',
  'public/images/themes/modern-minimalist.png',
  'public/images/themes/royal-rajasthani.png',
  'public/images/themes/rustic-vineyard.png',
];

async function run() {
  console.log('--- Converting Services and Themes Images to WebP ---');
  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const relPath of imagesToConvert) {
    const fullPath = path.join(root, relPath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${fullPath}`);
      continue;
    }
    const origSize = fs.statSync(fullPath).size;
    totalOriginal += origSize;

    const outPath = fullPath.replace(/\.png$/, '.webp');
    await sharp(fullPath)
      .webp({ quality: 82 })
      .toFile(outPath);

    const newSize = fs.statSync(outPath).size;
    totalOptimized += newSize;
    const savings = (((origSize - newSize) / origSize) * 100).toFixed(1);
    console.log(`[OK] ${path.basename(fullPath)}: ${(origSize/1024).toFixed(1)} KB -> ${(newSize/1024).toFixed(1)} KB (-${savings}%)`);
  }

  const totalSaved = totalOriginal - totalOptimized;
  console.log(`\nTOTAL: ${(totalOriginal/1024/1024).toFixed(2)} MB -> ${(totalOptimized/1024/1024).toFixed(2)} MB`);
  console.log(`SAVED: ${(totalSaved/1024/1024).toFixed(2)} MB (-${(((totalSaved)/totalOriginal)*100).toFixed(1)}%)`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
