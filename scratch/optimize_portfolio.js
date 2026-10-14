const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeImages() {
  console.log('Optimizing portfolio images to WebP...');

  // Event 1 to 5
  for (let i = 1; i <= 5; i++) {
    const srcPath = `public/images/portfolio/event-${i}.png`;
    const destPath = `public/images/portfolio/event-${i}.webp`;
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath).webp({ quality: 85 }).toFile(destPath);
      const origSize = fs.statSync(srcPath).size;
      const newSize = fs.statSync(destPath).size;
      console.log(`event-${i}.webp: ${origSize} -> ${newSize} bytes (${Math.round((1 - newSize/origSize)*100)}% saved)`);
    }
  }

  // Haldi 1 to 7
  for (let i = 1; i <= 7; i++) {
    const srcPath = `public/images/portfolio/haldi/Haldi ${i}.png`;
    const destPath = `public/images/portfolio/haldi/Haldi ${i}.webp`;
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath).webp({ quality: 85 }).toFile(destPath);
      const origSize = fs.statSync(srcPath).size;
      const newSize = fs.statSync(destPath).size;
      console.log(`Haldi ${i}.webp: ${origSize} -> ${newSize} bytes (${Math.round((1 - newSize/origSize)*100)}% saved)`);
    }
  }

  // Mehendi 1 to 5
  for (let i = 1; i <= 5; i++) {
    const srcPath = `public/images/portfolio/mehendi/Mehendi ${i}.png`;
    const destPath = `public/images/portfolio/mehendi/Mehendi ${i}.webp`;
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath).webp({ quality: 85 }).toFile(destPath);
      const origSize = fs.statSync(srcPath).size;
      const newSize = fs.statSync(destPath).size;
      console.log(`Mehendi ${i}.webp: ${origSize} -> ${newSize} bytes (${Math.round((1 - newSize/origSize)*100)}% saved)`);
    }
  }
}

optimizeImages().catch(console.error);
