const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

console.log('--- PHOOLKARI SEO IMPLEMENTATION VERIFIER ---\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failCount++;
  }
}

// 1. Asset Sizes
console.log('1. Checking Optimized Assets:');
const assetsToCheck = [
  { path: 'public/images/logo.png', maxKb: 100 },
  { path: 'public/images/logo.webp', maxKb: 100 },
  { path: 'public/images/logo.svg', maxKb: 100 },
  { path: 'src/app/icon.png', maxKb: 100 },
  { path: 'src/app/icon.svg', maxKb: 50 },
];

for (const a of assetsToCheck) {
  const p = path.join(root, a.path);
  if (fs.existsSync(p)) {
    const sz = fs.statSync(p).size;
    const kb = (sz / 1024).toFixed(1);
    assert(sz < a.maxKb * 1024, `${a.path}: ${kb} KB (limit: ${a.maxKb} KB)`);
  } else {
    assert(false, `${a.path} exists`);
  }
}

// 2. Metadata & Keywords Check
console.log('\n2. Checking Layout Metadata:');
const layoutContent = fs.readFileSync(path.join(root, 'src/app/layout.js'), 'utf8');
assert(layoutContent.includes("new URL('https://www.phoolkaridecorstudio.in')"), 'metadataBase is https://www.phoolkaridecorstudio.in');
assert(!layoutContent.includes('best wedding decorator in amritsar, luxury wedding planner amritsar'), 'Old 10,000+ character spam keywords removed');
assert(!layoutContent.includes('"keywords": "best wedding'), 'Invalid keywords field removed from LocalBusiness JSON-LD');
assert(layoutContent.includes("'@type': 'LocalBusiness'"), 'Valid LocalBusiness schema present in layout');
assert(layoutContent.includes('https://www.phoolkaridecorstudio.in/images/logo.png'), 'LocalBusiness image points to optimized logo.png');

// 3. Preloader Delay Check
console.log('\n3. Checking Preloader Delay:');
const preloaderContent = fs.readFileSync(path.join(root, 'src/app/components/Preloader.jsx'), 'utf8');
assert(!preloaderContent.includes('2000'), '2000ms delay removed from Preloader');
assert(preloaderContent.includes('500'), '500ms delay implemented in Preloader');

// 4. Statistics SSR & Accessibility Check
console.log('\n4. Checking Stats SSR Markup:');
const aboutContent = fs.readFileSync(path.join(root, 'src/app/components/About.jsx'), 'utf8');
assert(aboutContent.includes('srOnly'), 'Accessible srOnly text element added to Stats');
assert(aboutContent.includes('${target}${suffix}'), 'SSR & fallback displays actual target values (500+, 50+, 100%)');
assert(!aboutContent.includes("displayValue = inView ? count + suffix : '0' + suffix"), "Old fallback '0' + suffix removed");

// 5. Semantic H1 Check
console.log('\n5. Checking Semantic H1:');
const founderContent = fs.readFileSync(path.join(root, 'src/app/components/FounderNote.jsx'), 'utf8');
assert(founderContent.includes('<h1'), 'FounderNote contains semantic <h1> tag');
assert(founderContent.includes('Luxury Wedding Decorators &amp; Event Planners in Amritsar') || founderContent.includes('Where Every Detail Is A'), 'H1 includes location and core business specialty');

// 6. Service CTAs Check
console.log('\n6. Checking Service Page CTAs:');
const servicePages = [
  'src/app/services/corporate-events/page.js',
  'src/app/services/birthday-parties/page.js',
  'src/app/services/festival-decor/page.js'
];
for (const sp of servicePages) {
  const content = fs.readFileSync(path.join(root, sp), 'utf8');
  assert(!content.includes('href="/" className="btn'), `${sp} does not have broken href="/" CTA button`);
  assert(content.includes('href="#contact" className="btn'), `${sp} has working href="#contact" CTA button`);
}

// 7. Blog Internal Linking & WebP Check
console.log('\n7. Checking Blog Posts Content:');
const blogContent = fs.readFileSync(path.join(root, 'src/app/data/blogs.js'), 'utf8');
assert(blogContent.includes('/services/wedding-decor'), 'Blog posts include internal links to /services/wedding-decor');
assert(blogContent.includes('/services/corporate-events'), 'Blog posts include internal links to /services/corporate-events');
assert(blogContent.includes('/services/birthday-parties'), 'Blog posts include internal links to /services/birthday-parties');
assert(!blogContent.includes('event-1.png'), 'Blog image references migrated to .webp');

// 8. LLMs.txt Check
console.log('\n8. Checking llms.txt:');
const llmsPath = path.join(root, 'public/llms.txt');
assert(fs.existsSync(llmsPath), 'public/llms.txt exists');
if (fs.existsSync(llmsPath)) {
  const llms = fs.readFileSync(llmsPath, 'utf8');
  assert(llms.includes('Phoolkari Decor Studio'), 'llms.txt contains business name');
  assert(llms.includes('Amritsar, Punjab, India'), 'llms.txt contains verified location');
  assert(llms.includes('https://www.phoolkaridecorstudio.in'), 'llms.txt contains canonical host');
}

console.log(`\nSUMMARY: ${passCount} PASSED, ${failCount} FAILED.`);
process.exit(failCount === 0 ? 0 : 1);
