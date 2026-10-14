const fs = require('fs');
const sharp = require('sharp');

async function generateAssets() {
  console.log('Generating optimized brand assets...');

  // 1. Trim the transparent PNG
  const trimmedBuf = await sharp('public/images/logo-transparent.png')
    .trim()
    .toBuffer();

  // 2. Generate public/images/logo.png (800x400 contain)
  const logoPngBuf = await sharp(trimmedBuf)
    .resize(800, 400, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 90, compressionLevel: 9 })
    .toBuffer();
  fs.writeFileSync('public/images/logo.png', logoPngBuf);
  console.log('Created public/images/logo.png:', logoPngBuf.length, 'bytes');

  // 3. Generate public/images/logo.webp
  const logoWebpBuf = await sharp(trimmedBuf)
    .resize(800, 400, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 90 })
    .toBuffer();
  fs.writeFileSync('public/images/logo.webp', logoWebpBuf);
  console.log('Created public/images/logo.webp:', logoWebpBuf.length, 'bytes');

  // 4. Generate clean public/images/logo.svg embedding the optimized logoPngBuf
  const logoSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 400" width="800" height="400">
  <image width="800" height="400" xlink:href="data:image/png;base64,${logoPngBuf.toString('base64')}"/>
</svg>`;
  fs.writeFileSync('public/images/logo.svg', logoSvgContent);
  console.log('Created public/images/logo.svg:', Buffer.byteLength(logoSvgContent), 'bytes');

  // 5. Generate src/app/icon.png (512x512 square)
  const iconPngBuf = await sharp(trimmedBuf)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 90, compressionLevel: 9 })
    .toBuffer();
  fs.writeFileSync('src/app/icon.png', iconPngBuf);
  console.log('Created src/app/icon.png:', iconPngBuf.length, 'bytes');

  // 6. Generate src/app/icon.svg (clean square SVG with 256x256 embedded png)
  const iconSmallPngBuf = await sharp(trimmedBuf)
    .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 85, compressionLevel: 9 })
    .toBuffer();
  const iconSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" width="256" height="256">
  <image width="256" height="256" xlink:href="data:image/png;base64,${iconSmallPngBuf.toString('base64')}"/>
</svg>`;
  fs.writeFileSync('src/app/icon.svg', iconSvgContent);
  console.log('Created src/app/icon.svg:', Buffer.byteLength(iconSvgContent), 'bytes');
}

generateAssets().catch(console.error);
