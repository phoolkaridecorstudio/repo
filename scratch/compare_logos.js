const sharp = require('sharp');
const fs = require('fs');

async function test() {
  console.log('Rendering public/images/logo-transparent.png at 400x200...');
  await sharp('public/images/logo-transparent.png')
    .resize(400, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('scratch/rendered_logo_transparent.png');
  console.log('Saved scratch/rendered_logo_transparent.png');
}

test().catch(console.error);
