const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const appServerDir = path.join(root, '.next/server/app');

console.log('=== EXPANDED COMPREHENSIVE BUILD OUTPUT VERIFICATION ===\n');

let pass = 0;
let fail = 0;

function check(cond, msg) {
  if (cond) {
    console.log(`[PASS] ${msg}`);
    pass++;
  } else {
    console.error(`[FAIL] ${msg}`);
    fail++;
  }
}

// 1. Robots.txt
const robotsTxt = fs.readFileSync(path.join(appServerDir, 'robots.txt.body'), 'utf8');
console.log('1. robots.txt Checks:');
check(robotsTxt.includes('Sitemap: https://www.phoolkaridecorstudio.in/sitemap.xml'), 'robots.txt points to canonical WWW sitemap');
check(robotsTxt.includes('Host: https://www.phoolkaridecorstudio.in'), 'robots.txt specifies canonical host');

// 2. Sitemap.xml
const sitemapXml = fs.readFileSync(path.join(appServerDir, 'sitemap.xml.body'), 'utf8');
console.log('\n2. sitemap.xml Checks:');
const locMatches = sitemapXml.match(/<loc>(.*?)<\/loc>/g) || [];
check(locMatches.length === 28, `Sitemap contains 28 URLs (found ${locMatches.length})`);
const nonWwwLocs = locMatches.filter(l => !l.startsWith('<loc>https://www.phoolkaridecorstudio.in'));
check(nonWwwLocs.length === 0, `0 non-WWW URLs in sitemap (found ${nonWwwLocs.length})`);
check(sitemapXml.includes('https://www.phoolkaridecorstudio.in/services</loc>'), 'Sitemap includes /services route');

// 3. Homepage index.html
const indexHtml = fs.readFileSync(path.join(appServerDir, 'index.html'), 'utf8');
console.log('\n3. Homepage index.html Checks:');
check(indexHtml.includes('<link rel="canonical" href="https://www.phoolkaridecorstudio.in"/>') || indexHtml.includes('<link rel="canonical" href="https://www.phoolkaridecorstudio.in/"/>'), 'Homepage canonical URL points to WWW');
check(indexHtml.includes('<meta property="og:url" content="https://www.phoolkaridecorstudio.in"/>') || indexHtml.includes('<meta property="og:url" content="https://www.phoolkaridecorstudio.in/"/>'), 'Homepage og:url points to WWW');
check(!indexHtml.includes('best wedding decorator in amritsar, luxury wedding planner amritsar'), 'Spam keywords absent from HTML');

const h1Matches = indexHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
check(h1Matches.length === 1, `Exactly 1 H1 tag on homepage (found ${h1Matches.length})`);
check(h1Matches[0] && h1Matches[0].includes('Where Every Detail Is A'), 'H1 tag contains brand luxury statement');

check(indexHtml.includes('500+'), 'Initial HTML contains "500+"');
check(indexHtml.includes('50+'), 'Initial HTML contains "50+"');
check(indexHtml.includes('100%'), 'Initial HTML contains "100%"');
check(!indexHtml.includes('>0+<') && !indexHtml.includes('>0%<'), 'Initial HTML does NOT output "0+" or "0%" fallback');

// Schemas in index.html
check(indexHtml.includes('"@type":"LocalBusiness"') || indexHtml.includes('"@type": "LocalBusiness"'), 'LocalBusiness schema in index.html');
check(indexHtml.includes('"@type":"FAQPage"') || indexHtml.includes('"@type": "FAQPage"'), 'FAQPage schema in index.html');

// 4. Dedicated Service Pages Checks
console.log('\n4. Service Pages Schema & Markup Checks:');
const services = [
  { file: 'services/wedding-decor.html', url: '/services/wedding-decor', img: 'wedding-decor.webp' },
  { file: 'services/corporate-events.html', url: '/services/corporate-events', img: 'corporate-events.webp' },
  { file: 'services/birthday-parties.html', url: '/services/birthday-parties', img: 'birthday-decor.webp' },
  { file: 'services/festival-decor.html', url: '/services/festival-decor', img: 'festival-decor.webp' }
];

for (const s of services) {
  const p = path.join(appServerDir, s.file);
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    check(html.includes('"@type":"Service"') || html.includes('"@type": "Service"'), `${s.file} has Service schema`);
    check(html.includes(s.img), `${s.file} references optimized ${s.img}`);
    check(html.includes('href="#contact"'), `${s.file} CTA links to #contact`);
    check(html.includes(`<link rel="canonical" href="https://www.phoolkaridecorstudio.in${s.url}"/>`), `${s.file} canonical URL correct`);
  } else {
    check(false, `${s.file} exists`);
  }
}

// 5. Hub Pages Schema Checks
console.log('\n5. Hub Pages Schema Checks:');
const hubPages = [
  { file: 'about.html', schemaType: 'AboutPage' },
  { file: 'services.html', schemaType: 'CollectionPage' },
  { file: 'gallery.html', schemaType: 'ImageGallery' },
  { file: 'themes.html', schemaType: 'CollectionPage' },
];

for (const h of hubPages) {
  const p = path.join(appServerDir, h.file);
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    check(html.includes(`"@type":"${h.schemaType}"`) || html.includes(`"@type": "${h.schemaType}"`), `${h.file} contains ${h.schemaType} schema`);
  } else {
    check(false, `${h.file} exists`);
  }
}

// 6. Blog Post Prerendered Check
console.log('\n6. Blog Post Schema Checks:');
const blogHtmlPath = path.join(appServerDir, 'blog/top-luxury-wedding-decor-trends-punjab-2024.html');
if (fs.existsSync(blogHtmlPath)) {
  const blogHtml = fs.readFileSync(blogHtmlPath, 'utf8');
  check(blogHtml.includes('"@type":"BlogPosting"') || blogHtml.includes('"@type": "BlogPosting"'), 'Blog post has BlogPosting schema');
  check(blogHtml.includes('mainEntityOfPage'), 'Blog post has mainEntityOfPage in schema');
  check(blogHtml.includes('/services/wedding-decor'), 'Blog post includes internal link to /services/wedding-decor');
} else {
  check(false, 'Sample blog post HTML exists');
}

// 7. Converted Assets on Disk
console.log('\n7. WebP Assets on Disk Check:');
const webpAssets = [
  'public/images/services/wedding-decor.webp',
  'public/images/services/corporate-events.webp',
  'public/images/services/birthday-decor.webp',
  'public/images/services/festival-decor.webp',
  'public/images/themes/royal-rajasthani.webp',
  'public/images/themes/enchanted-garden.webp',
  'public/images/themes/celestial-night.webp',
  'public/images/themes/rustic-vineyard.webp',
  'public/images/themes/modern-minimalist.webp',
];

for (const w of webpAssets) {
  const p = path.join(root, w);
  if (fs.existsSync(p)) {
    const sz = fs.statSync(p).size;
    check(sz < 400 * 1024, `${w}: ${(sz/1024).toFixed(1)} KB (under 400 KB)`);
  } else {
    check(false, `${w} exists`);
  }
}

console.log(`\n========================================`);
console.log(`EXPANDED TEST RESULT: ${pass} PASSED, ${fail} FAILED`);
console.log(`========================================`);
process.exit(fail === 0 ? 0 : 1);
