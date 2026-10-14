const fs = require('fs');
const sharp = require('sharp');

async function main() {
  const content = fs.readFileSync('src/app/icon.svg', 'utf8');
  const match = content.match(/xlink:href="data:image\/png;base64,([^"]+)"/);
  if (!match) {
    console.log('No base64 image found');
    return;
  }
  const buf = Buffer.from(match[1], 'base64');
  console.log('Base64 decoded bytes:', buf.length);
  const meta = await sharp(buf).metadata();
  console.log('Dimensions:', meta.width, 'x', meta.height, 'format:', meta.format, 'channels:', meta.channels);
  
  // Save extracted original PNG for backup and analysis
  fs.writeFileSync('scratch/extracted_logo.png', buf);
  console.log('Saved scratch/extracted_logo.png');

  const svgSkeleton = content.replace(/data:image\/png;base64,[^"]+/, '[BASE64_DATA]');
  console.log('=== SVG SKELETON ===');
  console.log(svgSkeleton);
}

main().catch(console.error);
