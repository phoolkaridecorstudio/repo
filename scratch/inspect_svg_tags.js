const fs = require('fs');
const content = fs.readFileSync('public/images/logo.svg', 'utf8');
const withoutBase64 = content.replace(/data:image\/png;base64,[^"]+/, '');
console.log('SVG without base64 length:', withoutBase64.length);
console.log('Cleaned XML:');
console.log(withoutBase64);
