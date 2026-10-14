const sharp = require('sharp');

async function testFavicon() {
  // Trim first to remove extraneous empty padding, then fit into a square 512x512 with contain
  const trimmed = await sharp('public/images/logo-transparent.png').trim().toBuffer();
  
  await sharp(trimmed)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('scratch/test_icon_512.png');

  await sharp(trimmed)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('scratch/test_icon_64.png');

  console.log('Saved scratch/test_icon_512.png and scratch/test_icon_64.png');
}

testFavicon().catch(console.error);
