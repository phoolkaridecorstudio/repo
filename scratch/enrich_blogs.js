const fs = require('fs');

let content = fs.readFileSync('src/app/data/blogs.js', 'utf8');

// 1. Update event-*.png to event-*.webp
content = content.replace(/\/images\/portfolio\/event-([1-5])\.png/g, '/images/portfolio/event-$1.webp');

// 2. Add contextual internal links where relevant
// Post 1: link to /services/wedding-decor
content = content.replace(
  '<p>If you\'re planning a wedding in Amritsar or anywhere in Punjab, our team at Phoolkari Decor Studio is here to turn these trends into reality for your special day. <a href="/#contact">Contact us today</a> for a consultation.</p>',
  '<p>If you\'re planning a wedding in Amritsar or anywhere in Punjab, our team at Phoolkari Decor Studio is here to turn these trends into reality for your special day. Explore our <a href="/services/wedding-decor">luxury wedding decor services</a> or <a href="/#contact">contact us today</a> for a consultation.</p>'
);

// Post 4: link to /services/wedding-decor and /gallery
content = content.replace(
  '<p>Whether you want a traditional marigold explosion or a modern, subtle floral setup, our team can design a Haldi space that is as vibrant as your celebration.</p>',
  '<p>Whether you want a traditional marigold explosion or a modern, subtle floral setup, our team can design a Haldi space that is as vibrant as your celebration. Explore our custom <a href="/services/wedding-decor">wedding decor services</a> or browse our <a href="/gallery">portfolio gallery</a> for more inspiration.</p>'
);

// Post 5: link to /services/corporate-events
content = content.replace(
  '<p>Planning a corporate event requires precision, professionalism, and a keen eye for detail. Trust the experts at Phoolkari Decor Studio to deliver an event that perfectly represents your corporate identity.</p>',
  '<p>Planning a corporate event requires precision, professionalism, and a keen eye for detail. Trust the experts at Phoolkari Decor Studio to deliver an event that perfectly represents your corporate identity. Discover our complete <a href="/services/corporate-events">corporate event management services</a> or get in touch for a customized proposal.</p>'
);

// Post 6: link to /services/wedding-decor
content = content.replace(
  '<p>A royal mandap is more than just a decoration; it\'s an architectural masterpiece. Contact Phoolkari Decor Studio to design a mandap fit for royalty.</p>',
  '<p>A royal mandap is more than just a decoration; it\'s an architectural masterpiece. Browse our <a href="/services/wedding-decor">mandap and stage decor services</a> or contact Phoolkari Decor Studio to design a mandap fit for royalty.</p>'
);

// Post 14: link to /services/wedding-decor
content = content.replace(
  '<p>At any Indian wedding, the Stage and the Mandap are the absolute focal points. Every guest will look at them, and every photograph will feature them. This is where wedding stage decoration in Punjab truly becomes an art form.</p>',
  '<p>At any Indian wedding, the Stage and the Mandap are the absolute focal points. Every guest will look at them, and every photograph will feature them. Explore our dedicated <a href="/services/wedding-decor">wedding stage & mandap decoration</a> options to create an unforgettable centerpiece.</p>'
);

// Post 15: link to /services/birthday-parties
content = content.replace(
  '<p>Luxury event styling is not limited to weddings. We are seeing a massive surge in demand for premium birthday party decoration in Punjab, as well as grand anniversary celebrations and baby showers.</p>',
  '<p>Luxury event styling is not limited to weddings. We are seeing a massive surge in demand for premium <a href="/services/birthday-parties">birthday party decoration</a> in Punjab, as well as grand anniversary celebrations and milestone baby showers.</p>'
);

fs.writeFileSync('src/app/data/blogs.js', content);
console.log('Successfully enriched blogs.js with WebP images and contextual internal links!');
