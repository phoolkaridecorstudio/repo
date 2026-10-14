# Comprehensive SEO Audit & Technical Analysis Report
**Target Entity:** Phoolkari Decor Studio  
**Website URL:** [https://phoolkaridecorstudio.in](https://phoolkaridecorstudio.in/) (Live Deployed Canonical Host: [https://www.phoolkaridecorstudio.in](https://www.phoolkaridecorstudio.in/))  
**Primary Location:** Amritsar, Punjab, India  
**Industry:** Luxury Wedding Decor, Event Planning, Stage & Mandap Decoration, Event Management  
**Target Audience:** Couples, families, corporate planners, and event organizers searching for wedding and event decoration services in Amritsar and across Punjab  
**Audit Date:** October 14, 2026  
**Auditor:** Senior Technical SEO & Performance Engineer  
**Report Document:** `reports/PHOOLKARI_SEO_AUDIT.md`  

---

## 1. Executive Summary

Phoolkari Decor Studio is an Amritsar-based luxury wedding planning and event decoration company founded by Mukesh N Aggarwal. The studio crafts high-end, bespoke wedding environments, floral installations, royal mandaps, corporate galas, and milestone celebrations at premier Punjab venues including Radisson Blu Amritsar, Taj Swarna, Hyatt Amritsar, and private farmhouses.

This audit presents an **evidence-based technical, on-page, local, and performance analysis** based on direct inspection of the live deployed website (`https://www.phoolkaridecorstudio.in/`) and the full source codebase (`Next.js 16.2.6`, `React 19.2.4`, App Router).

### Key Audit Highlights:
1. **Host & Canonical Self-Conflict (Critical P0):** The Vercel hosting platform permanently redirects (`HTTP 308`) all non-www traffic (`https://phoolkaridecorstudio.in/*`) to the www subdomain (`https://www.phoolkaridecorstudio.in/*`). However, in the codebase (`layout.js`, `sitemap.js`, and all page components), canonical tags, Open Graph URLs, metadataBase, and sitemap URLs explicitly declare the **non-www** domain. When Googlebot crawls a canonical URL declared on the page, the server returns a 308 redirect back to the page it just came from, creating a canonical conflict that leads directly to Google Search Console indexing exclusions ("Page with redirect", "Duplicate without user-selected canonical").
2. **Favicon & Logo 12.26 MB SVG Bottleneck (Critical P0):** Both `src/app/icon.svg` (favicon) and `public/images/logo.svg` are **12,261,257 bytes (~11.69 MB)** because a 6144-pixel raster image was encoded as an inline base64 string within the SVG file. Because Next.js does not rasterize or resize SVGs, every single mobile and desktop user downloads this 11.69 MB file multiple times (favicon, header logo with `priority`, preloader, and footer), severely degrading Core Web Vitals, data usage, and page speed.
3. **Missing Homepage `<h1>` Tag (Critical P0):** Despite rich typography and animations, the homepage contains **zero `<h1>` elements**. The most prominent headings on the homepage are multiple `<h2>` and `<h3>` tags, depriving search engines of the primary topical signal for the business.
4. **Sitemap Defects & Missing Routes (P1):** All 28 URLs in `sitemap.xml` point to the non-canonical non-www host, forcing search engines to encounter redirects for every sitemap URL. Furthermore, `/services` exists as an active public route but was completely omitted from `src/app/sitemap.js`.
5. **Obsolete 10,000+ Character Keyword Stuffing (P1):** `layout.js` injects over 10,000 characters of comma-separated location and service keywords into the HTML `<meta name="keywords">` tag and into the Schema.org `LocalBusiness` JSON-LD payload. Google stopped using meta keywords in 2009, and stuffing city lists in structured data risks algorithmic spam flags.
6. **Incomplete Local SEO & Missing NAP Precision (P1):** While Amritsar is mentioned extensively in body copy, the business does not publish a physical street address, building/suite number, or postal code. There is no embedded Google Map, no link to a Google Business Profile, and no geographic coordinates in the `LocalBusiness` schema.
7. **Strong Existing Content Foundation (Opportunity):** The site features 16 well-written, long-form blog articles (covering themes, mandaps, venues, and Punjab cities) and dedicated service routes. By resolving the critical technical conflicts, optimizing images, cleaning metadata, and building targeted local landing pages, the website can achieve dominant organic rankings in Amritsar and surrounding Punjab regions.

---

## 2. Website & URL Inventory

The audit discovered **28 public-facing routes** in the codebase. All 28 routes were crawled on the live production server (`https://www.phoolkaridecorstudio.in/`). Every URL returned `HTTP 200 OK`, with server response times between 214 ms and 827 ms.

| # | Route URL Path | Page Purpose | Indexability | Current Title Tag | Title Len | Current Meta Description | Desc Len | Current Rendered Canonical | H1 Count & Text | Schema Types | Sitemap Status |
|---|----------------|--------------|--------------|-------------------|-----------|--------------------------|----------|----------------------------|-----------------|--------------|----------------|
| 1 | `/` | Main Homepage | Indexable | Phoolkari Decor Studio — Top Luxury Event Planners & Decorators in Amritsar | 79 | Top-rated event planners and wedding decoration services in Amritsar, Punjab. Experience our majestic theme parties, premium floral mandaps, and bespoke corporate events. | 170 | `https://phoolkaridecorstudio.in` (Mismatch) | **0 (NONE)** | LocalBusiness, FAQPage | Included (non-www) |
| 2 | `/about` | Company Background & Founder | Indexable | About Us \| Phoolkari Decor Studio | 33 | Learn about the premier luxury event decoration company in Punjab, founded by Mukesh N Aggarwal. | 96 | `https://phoolkaridecorstudio.in/about` | 1: "Who We Are" | LocalBusiness | Included (non-www) |
| 3 | `/services` | Service Catalog Overview | Indexable | Our Services \| Phoolkari Decor Studio | 37 | Explore our luxury event decoration services in Amritsar. From majestic wedding mandaps to sophisticated corporate events and themed birthday parties. | 150 | `https://phoolkaridecorstudio.in/services` | 1: "Our Expertise" | LocalBusiness | **OMITTED** |
| 4 | `/services/wedding-decor` | Wedding Decor Core Service | Indexable | Luxury Wedding Decorators in Amritsar \| Phoolkari | 49 | Top-rated luxury wedding decoration services in Punjab. We specialize in royal mandap designs, floral cascades, and premium stage setups at top hotels and farmhouses. | 166 | `https://phoolkaridecorstudio.in/services/wedding-decor` | 1: "Luxury Wedding Decor" | LocalBusiness | Included (non-www) |
| 5 | `/services/corporate-events` | Corporate Event Decoration | Indexable | Corporate Event Decorators in Amritsar \| Phoolkari | 50 | Professional corporate event decoration and planning in Punjab. We design elegant conference setups, product launches, galas, and award ceremonies. | 147 | `https://phoolkaridecorstudio.in/services/corporate-events` | 1: "Corporate Events" | LocalBusiness | Included (non-www) |
| 6 | `/services/birthday-parties` | Birthday & Milestone Parties | Indexable | Luxury Birthday & Anniversary Decor in Amritsar \| Phoolkari | 63 | Premium birthday and anniversary decoration services. We specialize in custom themes, luxury balloon artistry, and milestone celebrations in Punjab. | 148 | `https://phoolkaridecorstudio.in/services/birthday-parties` | 1: "Birthday & Anniversary" | LocalBusiness | Included (non-www) |
| 7 | `/services/festival-decor` | Cultural & Festival Decor | Indexable | Festival & Cultural Event Decor in Amritsar \| Phoolkari | 59 | Authentic and luxurious festival decoration services in Punjab. We design stunning setups for Diwali, Lohri, Eid, and cultural celebrations. | 140 | `https://phoolkaridecorstudio.in/services/festival-decor` | 1: "Festival & Cultural" | LocalBusiness | Included (non-www) |
| 8 | `/themes` | Signature Themes Showcase | Indexable | Our Signature Themes \| Phoolkari Decor Studio | 45 | Explore our breathtaking signature decor themes, from Royal Rajasthani and Enchanted Garden to Modern Minimalist sets in Punjab. | 128 | `https://phoolkaridecorstudio.in/themes` | 1: "Signature Themes" | LocalBusiness | Included (non-www) |
| 9 | `/gallery` | Portfolio & Visual Gallery | Indexable | Our Gallery & Portfolio \| Phoolkari Decor Studio | 52 | Browse our extensive gallery of luxury weddings, corporate galas, and themed birthday celebrations across Amritsar and Punjab. | 126 | `https://phoolkaridecorstudio.in/gallery` | 1: "Visual Masterpieces" | LocalBusiness | Included (non-www) |
| 10 | `/blog` | Journal & Articles Index | Indexable | Event Decor & Planning Blog \| Phoolkari Decor Studio | 56 | Read the latest trends, tips, and insights on luxury event decoration, wedding planning, and floral designs from Amritsar's top decorators. | 144 | `https://phoolkaridecorstudio.in/blog` | 1: "Event Decor Journal" | LocalBusiness | Included (non-www) |
| 11 | `/blog/top-luxury-wedding-decor-trends-punjab-2024` | Trends Article | Indexable | Top 5 Luxury Wedding Decor Trends in Punjab for 2024 \| Phoolkari Decor Studio Blog | 82 | From enchanted garden setups to royal Rajasthani themes, discover the most sought-after wedding decoration trends dominating Punjab this season. | 144 | `https://phoolkaridecorstudio.in/blog/top-luxury-wedding-decor-trends-punjab-2024` | 1: "Top 5 Luxury Wedding Decor Trends in Punjab for 2024" | LocalBusiness, Article | Included (non-www) |
| 12 | `/blog/choosing-perfect-event-venue-amritsar` | Venue Selection Guide | Indexable | How to Choose the Perfect Event Venue in Amritsar \| Phoolkari Decor Studio Blog | 79 | Navigate the vast options of luxury hotels, resorts, and private farmhouses in Amritsar to find the ideal location for your grand celebration. | 142 | `https://phoolkaridecorstudio.in/blog/choosing-perfect-event-venue-amritsar` | 1: "How to Choose the Perfect Event Venue in Amritsar" | LocalBusiness, Article | Included (non-www) |
| 13 | `/blog/art-of-floral-design-luxury-events` | Floral Design Behind-the-Scenes | Indexable | The Art of Floral Design: Behind the Scenes at Phoolkari \| Phoolkari Decor Studio Blog | 86 | Take a peek behind the curtain to see how we source, select, and arrange thousands of premium blooms for our luxury event setups. | 129 | `https://phoolkaridecorstudio.in/blog/art-of-floral-design-luxury-events` | 1: "The Art of Floral Design: Behind the Scenes at Phoolkari" | LocalBusiness, Article | Included (non-www) |
| 14 | `/blog/stunning-haldi-decoration-ideas-amritsar` | Haldi Decor Ideas | Indexable | Stunning Haldi Decoration Ideas: From Marigolds to Modern Twists \| Phoolkari Decor Studio Blog | 94 | Explore vibrant, joyful, and deeply traditional Haldi decoration ideas that will make your pre-wedding festivities in Punjab unforgettable. | 139 | `https://phoolkaridecorstudio.in/blog/stunning-haldi-decoration-ideas-amritsar` | 1: "Stunning Haldi Decoration Ideas: From Marigolds to Modern Twists" | LocalBusiness, Article | Included (non-www) |
| 15 | `/blog/ultimate-guide-corporate-event-planning-punjab` | Corporate Planning Guide | Indexable | The Ultimate Guide to Corporate Event Planning in Punjab \| Phoolkari Decor Studio Blog | 86 | From product launches to annual galas, learn the essentials of planning a flawless, high-impact corporate event in Amritsar and beyond. | 135 | `https://phoolkaridecorstudio.in/blog/ultimate-guide-corporate-event-planning-punjab` | 1: "The Ultimate Guide to Corporate Event Planning in Punjab" | LocalBusiness, Article | Included (non-www) |
| 16 | `/blog/royal-mandap-designs-rajasthani-grandeur` | Mandap Design Showcase | Indexable | Royal Mandap Designs: Bringing Rajasthani Grandeur to Amritsar \| Phoolkari Decor Studio Blog | 92 | Discover how we create majestic, palatial mandap setups that transport you and your guests to a royal era. | 106 | `https://phoolkaridecorstudio.in/blog/royal-mandap-designs-rajasthani-grandeur` | 1: "Royal Mandap Designs: Bringing Rajasthani Grandeur to Amritsar" | LocalBusiness, Article | Included (non-www) |
| 17 | `/blog/top-wedding-decorators-ludhiana-luxury-guide` | Regional Focus: Ludhiana | Indexable | Top Wedding Decorators in Ludhiana: A Guide to Luxury Events \| Phoolkari Decor Studio Blog | 90 | Explore how Phoolkari Decor Studio brings unparalleled luxury wedding decoration to Ludhiana's most prestigious venues and farmhouses. | 139 | `https://phoolkaridecorstudio.in/blog/top-wedding-decorators-ludhiana-luxury-guide` | 1: "Top Wedding Decorators in Ludhiana: A Guide to Luxury Events" | LocalBusiness, Article | Included (non-www) |
| 18 | `/blog/destination-weddings-punjab-resorts-vs-palaces` | Destination Wedding Comparison | Indexable | Destination Weddings in Punjab: Resorts vs. Heritage Palaces \| Phoolkari Decor Studio Blog | 90 | Planning a destination wedding decor in Punjab? We compare luxury resorts and heritage marriage palaces to help you choose your perfect venue. | 142 | `https://phoolkaridecorstudio.in/blog/destination-weddings-punjab-resorts-vs-palaces` | 1: "Destination Weddings in Punjab: Resorts vs. Heritage Palaces" | LocalBusiness, Article | Included (non-www) |
| 19 | `/blog/luxury-tent-houses-punjab-weddings` | Tent House & Infrastructure | Indexable | The Rise of Luxury Tent Houses in Punjab Weddings \| Phoolkari Decor Studio Blog | 79 | Discover why premium tent houses and shamiana rentals are becoming the backbone of luxury outdoor weddings in Punjab. | 117 | `https://phoolkaridecorstudio.in/blog/luxury-tent-houses-punjab-weddings` | 1: "The Rise of Luxury Tent Houses in Punjab Weddings" | LocalBusiness, Article | Included (non-www) |
| 20 | `/blog/jalandhar-royal-wedding-venues-decor` | Regional Focus: Jalandhar | Indexable | Jalandhar's Best Kept Secrets for Royal Wedding Venues \| Phoolkari Decor Studio Blog | 89 | A deep dive into Jalandhar's premier marriage palaces and how luxury wedding decorators are transforming them. | 115 | `https://phoolkaridecorstudio.in/blog/jalandhar-royal-wedding-venues-decor` | 1: "Jalandhar's Best Kept Secrets for Royal Wedding Venues" | LocalBusiness, Article | Included (non-www) |
| 21 | `/blog/wedding-decor-cost-punjab-pricing-guide` | Pricing & Packages Guide | Indexable | How Much Does Luxury Wedding Decor Cost in Punjab? \| Phoolkari Decor Studio Blog | 80 | An honest guide to wedding decoration prices, packages, and what determines the cost of high-end wedding decor in Punjab. | 121 | `https://phoolkaridecorstudio.in/blog/wedding-decor-cost-punjab-pricing-guide` | 1: "How Much Does Luxury Wedding Decor Cost in Punjab?" | LocalBusiness, Article | Included (non-www) |
| 22 | `/blog/floral-decor-services-haldi-to-reception` | Event-wise Floral Guide | Indexable | Floral Decor Services: From Haldi to Reception \| Phoolkari Decor Studio Blog | 76 | How different floral arrangements set the mood for various wedding functions, from vibrant Haldi ceremonies to elegant Receptions. | 130 | `https://phoolkaridecorstudio.in/blog/floral-decor-services-haldi-to-reception` | 1: "Floral Decor Services: From Haldi to Reception" | LocalBusiness, Article | Included (non-www) |
| 23 | `/blog/corporate-event-management-mohali-chandigarh` | Regional Focus: Tricity | Indexable | Corporate Event Management in Mohali and Chandigarh \| Phoolkari Decor Studio Blog | 81 | Why Phoolkari Decor Studio is the preferred corporate event organizer for high-profile conferences and product launches in the Tricity area. | 140 | `https://phoolkaridecorstudio.in/blog/corporate-event-management-mohali-chandigarh` | 1: "Corporate Event Management in Mohali and Chandigarh" | LocalBusiness, Article | Included (non-www) |
| 24 | `/blog/wedding-stage-mandap-decoration-guide` | Stage & Mandap Guide | Indexable | The Ultimate Guide to Wedding Stages and Mandaps in Punjab \| Phoolkari Decor Studio Blog | 88 | Explore the latest trends in Wedding Stage Decoration and Mandap designs, the focal points of any grand Indian wedding. | 119 | `https://phoolkaridecorstudio.in/blog/wedding-stage-mandap-decoration-guide` | 1: "The Ultimate Guide to Wedding Stages and Mandaps in Punjab" | LocalBusiness, Article | Included (non-www) |
| 25 | `/blog/birthday-anniversary-party-decoration-amritsar` | Party Styling Guide | Indexable | Premium Birthday and Anniversary Party Decoration in Amritsar \| Phoolkari Decor Studio Blog | 91 | Why luxury decor isn't just for weddings. How we style high-end birthday parties, baby showers, and anniversaries in Punjab. | 129 | `https://phoolkaridecorstudio.in/blog/birthday-anniversary-party-decoration-amritsar` | 1: "Premium Birthday and Anniversary Party Decoration in Amritsar" | LocalBusiness, Article | Included (non-www) |
| 26 | `/blog/finding-best-wedding-decorators-near-me` | Vendor Selection Advice | Indexable | How to Choose the Best Wedding Decorators Near Me \| Phoolkari Decor Studio Blog | 79 | A comprehensive guide on what to look for when searching for local event planners, tent houses, and luxury wedding decorators in your city. | 139 | `https://phoolkaridecorstudio.in/blog/finding-best-wedding-decorators-near-me` | 1: "How to Choose the Best Wedding Decorators Near Me" | LocalBusiness, Article | Included (non-www) |
| 27 | `/terms` | Legal Terms & Conditions | Indexable | Terms & Conditions \| Phoolkari Decor Studio | 47 | Read the terms and conditions for booking luxury event decoration services with Phoolkari Decor Studio in Amritsar, Punjab. | 123 | `https://phoolkaridecorstudio.in/terms` | 1: "Terms & Conditions" | LocalBusiness | Included (non-www) |
| 28 | `/privacy` | Legal Privacy Policy | Indexable | Privacy Policy \| Phoolkari Decor Studio | 39 | Privacy Policy for Phoolkari Decor Studio. Learn how we collect, use, and protect your personal information when you book our event services. | 141 | `https://phoolkaridecorstudio.in/privacy` | 1: "Privacy Policy" | LocalBusiness | Included (non-www) |

---

## 3. What's Already Done

The table below outlines all verified, correctly implemented technical and on-page SEO features across the website.

| Implemented Feature | Component / File Location | Verified Evidence | Status |
|---------------------|---------------------------|-------------------|--------|
| **Modern Framework & SSR Architecture** | `package.json`, `next.config.mjs` | Next.js 16.2.6 + React 19.2.4 App Router. Server-rendered pre-generation (`generateStaticParams`) for all 16 blog posts. HTML is fully rendered at edge. | IMPLEMENTED |
| **All Public Routes Returning 200 OK** | Production server | All 28 routes return `HTTP 200 OK` under live curl and headless browser testing. | IMPLEMENTED |
| **Clean 404 Response Code** | `/non-existent-page-test-404` | Non-existent paths return valid `HTTP 404 Not Found` with custom error page (`Content-Length: 39355`). No soft-404s detected. | IMPLEMENTED |
| **Robots.txt Configuration** | `src/app/robots.js` | Returns clean directives (`User-Agent: *`, `Allow: /`, `Sitemap: https://...`). Accessible at `/robots.txt`. | IMPLEMENTED |
| **Dynamic XML Sitemap Generation** | `src/app/sitemap.js` | Dynamically builds static routes and maps all 16 blog posts with `lastModified`, `changeFrequency`, and `priority`. | IMPLEMENTED |
| **Meta Robots Directives** | `src/app/layout.js:39-49` | Correctly outputs `<meta name="robots" content="index, follow">` and Googlebot parameters (`max-image-preview:large`, `max-snippet:-1`). | IMPLEMENTED |
| **Google Search Console Verification** | `src/app/layout.js:50-52` & `public/google69ed14fd05072c89.html` | Meta verification token `tZFTCyybHBbdm9IRNxAmcyeQBtck03GskN6jAQ4UvqY` present in `<head>`. Verification HTML file returns 200 OK. | IMPLEMENTED |
| **Google Analytics 4 (GA4) Tag** | `src/app/layout.js:90-101` | GA4 script `G-51HBDGPQR6` properly integrated using `next/script` with `afterInteractive` loading strategy. | IMPLEMENTED |
| **Trailing Slash Redirection** | Production server | Requesting `/about/` cleanly returns `HTTP 308 Permanent Redirect` to `/about`. Prevents trailing-slash duplicate indexing. | IMPLEMENTED |
| **HTTPS Strict Transport Security** | HTTP Headers | `Strict-Transport-Security: max-age=63072000` enforced on all production responses. | IMPLEMENTED |
| **Open Graph & Twitter Cards** | `src/app/layout.js:24-47`, `[slug]/page.js` | Full Open Graph and Twitter Card tags configured with custom images (`opengraph-image.jpg`, `twitter-image.jpg`). | IMPLEMENTED |
| **Article JSON-LD Schema on Blog Posts** | `src/app/blog/[slug]/page.js:47-73` | Every blog post embeds an `Article` schema with `headline`, `image`, `author`, `publisher`, and `datePublished`. | IMPLEMENTED |
| **FAQPage Schema Markup** | `src/app/components/faq/FAQ.jsx:39-57` | Embeds `FAQPage` JSON-LD schema containing 5 questions and answers matching on-page content. | IMPLEMENTED |
| **Comprehensive Keyword-Rich Blog Content** | `src/app/data/blogs.js` | 16 high-quality articles totaling over 7,500 words targeting venue selection, mandap aesthetics, and Punjab regional events. | IMPLEMENTED |
| **Responsive Mobile Layout & Viewport** | `src/app/layout.js:9-11`, CSS Modules | Responsive container systems with `themeColor: #1A1008` and flexible grid configurations. | IMPLEMENTED |

---

## 4. What's Partially Done or Incorrect

The following items exist in the codebase but violate technical standards, contain conflicts, or behave incorrectly.

| Finding ID | Feature / Component | Exact Code Location | What Was Discovered | Why It Matters | Status |
|------------|---------------------|---------------------|---------------------|----------------|--------|
| **F-01** | **Host & Canonical Conflict** | `src/app/layout.js:14,21-23` & all child `page.js` files | The live production server enforces `www.phoolkaridecorstudio.in` (308 redirecting all non-www traffic). However, `metadataBase: new URL('https://phoolkaridecorstudio.in')` and every single canonical tag across all 28 pages specify the non-www domain. | **Canonical points directly to a redirecting URL.** Google Search Console flags this as "Alternate page with proper canonical tag" and may de-index the www pages or fail to recognize canonical authority. | INCORRECT |
| **F-02** | **12.26 MB Embedded Base64 Favicon & Logo** | `src/app/icon.svg` & `public/images/logo.svg` | The SVG file contains an embedded `6144x6144` base64 raster PNG, creating a **12,261,257 byte (11.69 MB)** file. It is loaded as the browser favicon, in the navbar with `priority`, inside the preloader, and in the footer. | Transmits ~24 MB+ of uncompressed graphical data on first load. Destroys mobile Core Web Vitals (FCP, LCP, Speed Index) and exhausts user bandwidth. | INCORRECT |
| **F-03** | **Sitemap Contains Redirecting Non-WWW URLs** | `src/app/sitemap.js:4,7-17` | `const baseUrl = 'https://phoolkaridecorstudio.in'` causes every `<loc>` entry in `sitemap.xml` to point to non-www. | Googlebot crawls the sitemap and receives a 308 redirect on every single URL, creating unnecessary crawl latency and GSC "Page with redirect" errors. | INCORRECT |
| **F-04** | **10,000+ Character Keyword Stuffing** | `src/app/layout.js:18-19,80` | Massive string listing dozens of cities and permutations ("Wedding Decorators Ludhiana, Jalandhar, Mohali, Tent House Punjab...") injected into `<meta name="keywords">` and Schema.org. | Meta keywords have had zero ranking weight in Google since 2009. Keyword-stuffing in metadata and schema looks spammy and triggers quality penalties. | INCORRECT |
| **F-05** | **Incomplete LocalBusiness Schema** | `src/app/layout.js:55-81` | Schema is hardcoded in `RootLayout` (appears identically on all 28 pages). Missing `streetAddress`, `postalCode`, `geo` coordinates, and `openingHoursSpecification`. The `image` property points to the 12 MB SVG instead of a compliant raster image. | Invalid for Google Local Pack rich snippets. Schema.org image guidelines require 16x9, 4x3, or 1x1 raster images (JPG/PNG/WebP). | PARTIALLY IMPLEMENTED |
| **F-06** | **Artificial 2,000ms Preloader Delay** | `src/app/components/Preloader.jsx:16-19` | `setTimeout(() => setLoading(false), 2000)` enforces a hardcoded 2-second full-screen overlay displaying the 12 MB logo. | Artificially penalizes Largest Contentful Paint (LCP) and First Contentful Paint (FCP) by holding back content rendering for at least 2,000 ms. | INCORRECT |
| **F-07** | **Broken Service Page CTAs** | `corporate-events/page.js:56`, `birthday-parties/page.js:56`, `festival-decor/page.js:56` | The primary conversion CTA button `<Link href="/" className="btn btn--gold">` points to the home root `/` instead of `/#contact` or a contact form anchor. | Causes user frustration, breaks the lead conversion funnel, and fails to direct visitors to the inquiry section. | INCORRECT |
| **F-08** | **Dead Social Links & Share Buttons** | `Contact.jsx:122`, `Footer.jsx:21`, `BlogPostClient.jsx:82-84` | YouTube social icons and blog article social share buttons contain `href="#"` with zero event handlers. | Degrades user experience, creates dead-end interactive elements, and fails to amplify content across social networks. | PARTIALLY IMPLEMENTED |
| **F-09** | **Overly Long Blog Title Tags** | `src/app/blog/[slug]/page.js:22` | Dynamic titles append `| Phoolkari Decor Studio Blog`, generating titles between **76 and 94 characters**. | Google truncates titles in SERPs after ~55–60 characters (600px width), cutting off meaningful branding and keywords. | PARTIALLY IMPLEMENTED |
| **F-10** | **Duplicate Heading Tags on Homepage** | `src/app/components/Themes.jsx` | "Signature Themes" is rendered twice as an `<h2>` heading on the homepage (desktop and mobile view variants both rendered in DOM). | Creates ambiguous heading hierarchy and dilutes semantic relevance. | PARTIALLY IMPLEMENTED |

---

## 5. What's Missing

The following items are completely absent from the current website and codebase:

1. **Homepage `<h1>` Heading:** The homepage contains **zero `<h1>` tags** in the rendered HTML.
2. **Dedicated Local Intent Landing Pages:** No dedicated commercial service landing pages exist for high-volume Amritsar queries:
   - Wedding Stage & Mandap Decoration in Amritsar
   - Haldi & Mehndi Decoration Services in Amritsar
   - Reception & Ring Ceremony Decoration in Amritsar
   - Venue-specific wedding decoration (e.g. Radisson Blu Amritsar, Taj Swarna, Hyatt Amritsar)
3. **GA4 Conversion Event Tracking:** No custom event listeners for:
   - Form submission (`generate_lead`)
   - Direct WhatsApp clicks (`click_whatsapp`)
   - Direct Phone number clicks (`click_telephone`)
4. **Physical Business Address & PIN Code:** No street address, building/colony name, or PIN code is published anywhere on the website.
5. **Google Business Profile Integration:** No link to the official Google Business Profile, no Google Maps embed, and no Google Place ID.
6. **BreadcrumbList Schema:** No breadcrumb navigation markup exists on service subpages or blog posts.
7. **Service Schema (`@type: "Service"`):** None of the service pages implement schema describing specific event decor offerings, pricing tiers, or service areas.
8. **WebSite / WebPage Schema:** Missing root `WebSite` schema declaring search potential and brand entity.
9. **Modern Image Format Delivery (WebP / AVIF):** Portfolio and theme assets are stored as raw, uncompressed PNG files (1.0 MB to 3.3 MB each) rather than modern WebP/AVIF formats.
10. **Inclusion of `/services` in Sitemap:** The main service directory page `/services` is completely omitted from `src/app/sitemap.js`.

---

## 6. Critical Technical Issues

### Finding 1: Canonical URL & Host Subdomain Self-Conflict
- **Finding ID:** `TECH-P0-01`
- **Category:** Crawlability & Indexing
- **Affected URLs:** All 28 routes
- **Exact Code Location:** `src/app/layout.js` (lines 14, 21–23) and all child `page.js` files
- **Evidence:**
  ```bash
  # Request to non-www returns a 308 redirect to www:
  curl.exe -I https://phoolkaridecorstudio.in/
  HTTP/1.1 308 Permanent Redirect
  Location: https://www.phoolkaridecorstudio.in/

  # But the rendered HTML on https://www.phoolkaridecorstudio.in/ contains:
  <link rel="canonical" href="https://phoolkaridecorstudio.in" />
  ```
- **Why It Matters:** This creates an infinite self-referential canonical redirect loop. When Googlebot visits `https://www.phoolkaridecorstudio.in/`, it reads the canonical pointing to `https://phoolkaridecorstudio.in`, requests it, and gets immediately redirected back to `https://www.phoolkaridecorstudio.in/`. Search engines will exclude pages from the index with "Page with redirect" or "Duplicate without user-selected canonical".
- **Recommended Resolution:** Standardize on `https://www.phoolkaridecorstudio.in` everywhere. Update `metadataBase` in `layout.js` to `new URL('https://www.phoolkaridecorstudio.in')`, update `sitemap.js` `baseUrl`, and update all child page canonical definitions.
- **Effort:** 30 minutes | **Priority:** **P0 — Critical** | **Verification:** Run `curl.exe -ILs` and verify the canonical tag matches the final destination URL exactly.

---

### Finding 2: 12.26 MB SVG Favicon & Header Logo
- **Finding ID:** `TECH-P0-02`
- **Category:** Performance & Asset Optimization
- **Affected Files:** `src/app/icon.svg`, `public/images/logo.svg`
- **Exact Code Location:** `src/app/layout.js:61`, `src/app/components/Navbar.jsx:103,151`, `src/app/components/Preloader.jsx:38`, `src/app/components/Footer.jsx:16`
- **Evidence:**
  ```bash
  curl.exe -I https://www.phoolkaridecorstudio.in/icon.svg
  Content-Length: 12261257 (11.69 MB)

  # Inside logo.svg:
  <image x="0" y="0" width="6144" xlink:href="data:image/png;base64,iVBORw0KGgoAAA..." />
  ```
- **Why It Matters:** Favicons and header logos load on every single page load with `priority`. A 12 MB SVG blocks browser rendering, burns cellular mobile data (especially in India where mobile data quotas apply), and causes massive Total Blocking Time (TBT) while the browser parses a 12 MB XML string containing millions of characters.
- **Recommended Resolution:** 
  1. Replace `icon.svg` with a dedicated, lightweight 32x32 / 48x48 icon file (under 15 KB).
  2. Export a clean, optimized WebP logo (e.g., 400x120 at ~25–40 KB) and a true vector SVG (under 50 KB without base64 raster embedding).
- **Effort:** 1 hour | **Priority:** **P0 — Critical** | **Verification:** Verify response header `Content-Length < 50000` on both assets.

---

### Finding 3: Complete Absence of Homepage `<h1>` Tag
- **Finding ID:** `TECH-P0-03`
- **Category:** Semantic HTML & On-Page SEO
- **Affected URL:** `https://www.phoolkaridecorstudio.in/`
- **Exact Code Location:** `src/app/page.js`, `src/app/components/Hero.jsx`
- **Evidence:** Regex and DOM inspection of the rendered homepage returns:
  ```
  Total H1 tags found: 0
  Total H2 tags found: 10
  Total H3 tags found: 18
  ```
  `Hero.jsx` contains only a background image, overlay, petal particles, and a scroll indicator—there is no text headline or `<h1>` element.
- **Why It Matters:** The `<h1>` tag is the single most important on-page HTML semantic signal for search engines. Without an `<h1>`, Google must infer page context from lower-level `<h2>` tags (`Crafting Unforgettable Experiences`, `Our Expertise`, `Signature Themes`), none of which contain target commercial keywords like "Luxury Wedding Decorators in Amritsar".
- **Recommended Resolution:** Add a prominent, aesthetically refined `<h1>` to the Hero section:
  ```html
  <h1 className={styles.heroTitle}>
    Luxury Wedding Decorators &amp; Event Planners in <em>Amritsar</em>
  </h1>
  ```
- **Effort:** 30 minutes | **Priority:** **P0 — Critical** | **Verification:** Inspect rendered HTML source to confirm exactly one `<h1>` tag exists.

---

### Finding 4: XML Sitemap Contains 308-Redirecting URLs & Omits `/services`
- **Finding ID:** `TECH-P1-01`
- **Category:** Crawlability & Sitemaps
- **Affected URL:** `https://www.phoolkaridecorstudio.in/sitemap.xml`
- **Exact Code Location:** `src/app/sitemap.js:4,7-17`
- **Evidence:**
  ```javascript
  // src/app/sitemap.js
  const baseUrl = 'https://phoolkaridecorstudio.in'; // Missing www!
  const staticRoutes = [
    '',
    '/about',
    '/themes',
    '/gallery',
    '/terms',
    '/privacy',
    '/services/wedding-decor',
    '/services/corporate-events',
    '/services/birthday-parties',
    '/services/festival-decor',
    '/blog',
    // NOTICE: '/services' is completely missing!
  ];
  ```
- **Why It Matters:** Search engines crawling sitemap entries are immediately redirected. Furthermore, Googlebot receives no sitemap signal for the main services directory page `/services`.
- **Recommended Resolution:** Update `baseUrl` to `https://www.phoolkaridecorstudio.in` and add `'/services'` to the `staticRoutes` array.
- **Effort:** 15 minutes | **Priority:** **P1 — High** | **Verification:** Fetch `/sitemap.xml` and verify all `<loc>` URLs begin with `https://www.phoolkaridecorstudio.in` and include `/services`.

---

### Finding 5: Massive Meta Keywords Stuffing & JSON-LD Pollution
- **Finding ID:** `TECH-P1-02`
- **Category:** Metadata & Schema Quality
- **Exact Code Location:** `src/app/layout.js:18–19, 80`
- **Evidence:** `layout.js` contains a single string with over 200 comma-separated keywords covering 10+ Punjab cities:
  ```javascript
  keywords: 'Wedding Decor Services in Amritsar, Wedding Decorators in Amritsar, ... Ludhiana, Wedding Decorators Ludhiana, ... Jalandhar, ... Mohali, ... Patiala, ... Tent House Punjab, Shamiana Rental Punjab...'
  ```
  This identical 10,000-character string is rendered in `<meta name="keywords">` and inside `const structuredData = { ... keywords: '...' }`.
- **Why It Matters:** Meta keywords have no positive ranking value in Google Search. Injecting hundreds of keyword permutations into HTML and Schema triggers algorithmic quality filters against excessive keyword repetition.
- **Recommended Resolution:** Remove the `keywords` property completely from `metadata` and from `structuredData`. Rely on natural, contextual on-page copy and descriptive headings.
- **Effort:** 15 minutes | **Priority:** **P1 — High** | **Verification:** Inspect `<head>` to confirm `<meta name="keywords">` is absent.

---

### Finding 6: Deficient LocalBusiness Schema Implementation
- **Finding ID:** `TECH-P1-03`
- **Category:** Structured Data & Schema.org
- **Exact Code Location:** `src/app/layout.js:55–81`
- **Evidence:**
  ```json
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Phoolkari Decor Studio",
    "image": "https://phoolkaridecorstudio.in/images/logo.svg",
    "telephone": ["+91-91557-03155", "+91-96990-33155"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amritsar",
      "addressRegion": "Punjab",
      "addressCountry": "IN"
    }
  }
  ```
  Missing: `streetAddress`, `postalCode`, `geo` (`latitude`, `longitude`), and valid raster `image`. Hardcoded in root layout, rendering on every single page regardless of page context.
- **Why It Matters:** Without physical street details and geographic coordinates, Google cannot validate local business entity status for the Local 3-Pack and Google Maps Knowledge Panels.
- **Recommended Resolution:** Upgrade schema subtype to `EventPlanner` or `HomeAndConstructionBusiness` (wedding decor), include exact public studio address and GPS coordinates, link Google Business Profile in `sameAs`, and use a compliant 1200x675 raster image.
- **Effort:** 1 hour | **Priority:** **P1 — High** | **Verification:** Validate via Schema.org Validator and Google Rich Results Test.

---

## 7. Keyword Strategy & Search Intent Audit

### Candidate Keyword Research Table for Amritsar & Punjab

| Target Keyword | Search Intent | Current Target URL | Recommended Target URL | Current Status | Content Gap | Priority |
|----------------|---------------|-------------------|------------------------|----------------|-------------|----------|
| **Wedding decorators in Amritsar** | Commercial / Transactional | `/` (Homepage) | `https://www.phoolkaridecorstudio.in/` | PARTIALLY IMPLEMENTED | Missing `<h1>` on homepage; needs clear service package pricing indicators and trust badges. | **P0** |
| **Luxury wedding decor Amritsar** | Commercial | `/services/wedding-decor` | `https://www.phoolkaridecorstudio.in/services/wedding-decor` | PARTIALLY IMPLEMENTED | Page copy is under 250 words; needs detailed breakdown of florals, lighting, mandap styles, and hotel partnerships. | **P1** |
| **Wedding planners in Amritsar** | Commercial / Transactional | None (only blog) | `https://www.phoolkaridecorstudio.in/services/wedding-planning` | **MISSING** | No dedicated landing page for complete wedding planning & coordination services. | **P1** |
| **Wedding stage decoration in Amritsar** | Commercial / Visual | `/blog/wedding-stage-mandap-decoration-guide` | `https://www.phoolkaridecorstudio.in/services/stage-decoration` | **MISSING** | High-intent topic is currently only a blog post; needs dedicated service page with high-res stage portfolio. | **P1** |
| **Haldi decoration in Amritsar** | Commercial / Transactional | `/blog/stunning-haldi-decoration-ideas-amritsar` | `https://www.phoolkaridecorstudio.in/services/haldi-decor` | **MISSING** | Currently only an article; needs a dedicated commercial service page with marigold setups, seating, and prop packages. | **P1** |
| **Mehndi decoration services in Amritsar** | Commercial / Transactional | `/data/content.js` (Gallery items) | `https://www.phoolkaridecorstudio.in/services/mehndi-decor` | **MISSING** | No dedicated service landing page for mehndi/sangeet decoration setups. | **P1** |
| **Wedding mandap decoration Amritsar** | Commercial / Visual | `/blog/royal-mandap-designs-rajasthani-grandeur` | `https://www.phoolkaridecorstudio.in/services/mandap-decor` | **MISSING** | Only an informational article exists; needs a dedicated commercial page covering royal, acrylic, floral, and dome mandaps. | **P1** |
| **Event decorators in Amritsar** | Commercial | `/services` | `https://www.phoolkaridecorstudio.in/services` | PARTIALLY IMPLEMENTED | `/services` is thin and omitted from sitemap; needs comprehensive overview of private, corporate, and social decor. | **P1** |
| **Corporate event decoration in Amritsar** | Commercial / B2B | `/services/corporate-events` | `https://www.phoolkaridecorstudio.in/services/corporate-events` | PARTIALLY IMPLEMENTED | CTA button links to `/` instead of contact form; needs corporate client logos, AV setup details, and conference styling proof. | **P2** |
| **Birthday party decoration in Amritsar** | Commercial / Local | `/services/birthday-parties` | `https://www.phoolkaridecorstudio.in/services/birthday-parties` | PARTIALLY IMPLEMENTED | CTA button broken; needs package tiers (1st birthday, milestone 50th, luxury anniversary setups). | **P2** |
| **Wedding decor cost in Punjab** | Informational / Commercial | `/blog/wedding-decor-cost-punjab-pricing-guide` | `https://www.phoolkaridecorstudio.in/blog/wedding-decor-cost-punjab-pricing-guide` | IMPLEMENTED | Good blog article; needs updated year (2025/2026), structured FAQ table, and quotation inquiry CTA widget. | **P2** |
| **Best wedding venues in Amritsar for decor** | Informational / Commercial | `/blog/choosing-perfect-event-venue-amritsar` | `https://www.phoolkaridecorstudio.in/blog/choosing-perfect-event-venue-amritsar` | IMPLEMENTED | Good article; needs internal links to Radisson Blu, Taj Swarna, and Hyatt portfolio case studies. | **P2** |
| **Tent house rental in Punjab** | Commercial / High Intent | `/blog/luxury-tent-houses-punjab-weddings` | `https://www.phoolkaridecorstudio.in/services/luxury-tenting` | **MISSING** | German hangers, waterproof luxury shamianas, and outdoor infrastructure should have a dedicated service page. | **P2** |

*Note: In accordance with audit standards, third-party search volumes and CPC numbers are marked as **UNVERIFIED / UNKNOWN** to avoid fabricating estimated keyword data without active Google Ads / Ahrefs API feeds.*

---

## 8. Local SEO Audit (Amritsar & Punjab Focus)

### A. Current Local Signals Inspection
- **Business Name:** Phoolkari Decor Studio (Consistently represented across all pages).
- **Telephone Numbers:** `+91 91557-03155` and `+91 96990-33155` (Consistently listed in Header CTA, Contact section, and Footer).
- **Email:** `info@phoolkaridecorstudio.in` (Note: Privacy Policy and Terms reference `shivam@phoolkaridecorstudio.in`—recommend standardizing to `info@phoolkaridecorstudio.in`).
- **Physical Address Deficiency:** The website states only `"Amritsar, Punjab, India"` in text and in schema. No street address, commercial office location, landmark, or PIN code is published.
- **Service Area:** Primary focus on Amritsar, with extended coverage to Jalandhar, Ludhiana, Mohali, and Chandigarh.

### B. Google Business Profile (GBP) Requirements
- **GBP Profile Status:** **ACCESS REQUIRED** to confirm verification status, primary categories, review score, and owner dashboard.
- **Identified Gap:** The website has **no outbound link** to its Google Business Profile or Google Maps listing.
- **Recommended GBP Setup:**
  - **Primary Category:** *Wedding Service* or *Party Planner*
  - **Secondary Categories:** *Event Planner*, *Decorator*, *Florist*, *Event Management Company*
  - **Service Area Configuration:** Define Amritsar as primary city, with Punjab service areas clearly specified.
  - **Google Maps Embed:** Add an interactive or static Google Map embed on the Contact page once the public listing address is confirmed.

### C. Competitor Landscape in Amritsar
Live web search analysis for wedding decorators and planners in Amritsar identifies key market competitors:
1. **Established Wedding Planners:** *The Bliss Wedding Company*, *Hriday & Co. Luxury Wedding Planners* (strong focus on custom mandap styling and destination weddings).
2. **Event & Floral Styling Studios:** *Lemon Leaf Events*, *Party Perfection*, *The Flower Studio / Sehaj Flowers*.
3. **Traditional Tent Houses:** *Daman Tent & Caterers*, *Surinder Decors*.

**Strategic Takeaway:** Competitors frequently rank via third-party aggregators (WeddingWire India, WedMeGood, JustDial). Phoolkari Decor Studio's custom, modern web design gives it a major direct-branding advantage over competitors who rely solely on Instagram or directory listings. Fixing the technical canonical conflict and adding dedicated local service pages will allow Phoolkari to outrank aggregator pages for commercial Amritsar queries.

---

## 9. Page-by-Page Audit & Optimization Recommendations

### 1. Homepage (`/`)
- **Current Title:** `Phoolkari Decor Studio — Top Luxury Event Planners & Decorators in Amritsar` (79 chars)
- **Current Meta Description:** `Top-rated event planners and wedding decoration services in Amritsar, Punjab. Experience our majestic theme parties, premium floral mandaps, and bespoke corporate events.` (170 chars)
- **Current Canonical:** `https://phoolkaridecorstudio.in` (Needs `www`)
- **Current H1:** **NONE**
- **Issues Identified:** Missing `<h1>`, canonical points to redirecting non-www domain, preloader forces 2s delay with 12 MB SVG logo, duplicate `<h2>` tags for "Signature Themes".
- **Recommended Title:** `Phoolkari Decor Studio \| Luxury Wedding Decorators in Amritsar` (62 chars)
- **Recommended Meta Description:** `Amritsar's premier luxury wedding decorators & event planners. We craft royal mandaps, exquisite floral styling & grand reception setups across Punjab.` (155 chars)
- **Recommended H1:** `Luxury Wedding Decorators &amp; Event Planners in <em>Amritsar</em>`
- **Content Improvements:**
  - Add H1 to Hero component with brief supporting subtitle.
  - Eliminate the 2-second preloader `setTimeout`.
  - Add visible client review snippets with stars and venue names.
  - Add an FAQ accordion link to dedicated service landing pages.

---

### 2. Services Overview (`/services`)
- **Current Title:** `Our Services | Phoolkari Decor Studio` (37 chars)
- **Current Meta Description:** `Explore our luxury event decoration services in Amritsar. From majestic wedding mandaps to sophisticated corporate events and themed birthday parties.` (150 chars)
- **Current Canonical:** `https://phoolkaridecorstudio.in/services`
- **Current H1:** `Our Expertise`
- **Issues Identified:** Omitted from `sitemap.xml`, title tag lacks Amritsar keyword, H1 is generic ("Our Expertise").
- **Recommended Title:** `Luxury Event Decoration Services in Amritsar \| Phoolkari` (57 chars)
- **Recommended Meta Description:** `Explore luxury decor services by Phoolkari Decor Studio in Amritsar: royal wedding mandaps, corporate galas, milestone birthdays, and authentic festival decor.` (158 chars)
- **Recommended H1:** `Luxury Event Decoration <em>Services in Amritsar</em>`
- **Content Improvements:** Add intro copy outlining customization process, venue suitability, and include direct links to `/services/wedding-decor`, `/services/corporate-events`, etc. Add to `sitemap.js`.

---

### 3. Luxury Wedding Decor (`/services/wedding-decor`)
- **Current Title:** `Luxury Wedding Decorators in Amritsar | Phoolkari` (49 chars)
- **Current Meta Description:** `Top-rated luxury wedding decoration services in Punjab. We specialize in royal mandap designs, floral cascades, and premium stage setups at top hotels and farmhouses.` (166 chars)
- **Current Canonical:** `https://phoolkaridecorstudio.in/services/wedding-decor`
- **Current H1:** `Luxury Wedding Decor`
- **Issues Identified:** Page body copy is very short (~220 words). Does not address ceremony types (Haldi, Sangeet, Mandap, Reception) in depth. Missing local venue links.
- **Recommended Title:** `Luxury Wedding Decorators in Amritsar \| Royal Mandaps & Stages` (62 chars)
- **Recommended Meta Description:** `Bespoke wedding decoration in Amritsar by Phoolkari Decor Studio. Royal mandap designs, imported floral arches, and stage styling for luxury hotels and farmhouses.` (160 chars)
- **Recommended H1:** `Luxury Wedding Decorators in <em>Amritsar, Punjab</em>`
- **Content Improvements:**
  - Expand copy to ~800+ words detailing: Royal Mandap Fabrication, Floral Architecture (Colombian roses, Dutch hydrangeas), Reception Stage Lighting, and Luxury Farmhouse Tenting.
  - Add FAQ section with structured data.
  - Link directly to the Venue Partners case studies.

---

### 4. Corporate Events (`/services/corporate-events`)
- **Current Title:** `Corporate Event Decorators in Amritsar | Phoolkari` (50 chars)
- **Current Meta Description:** `Professional corporate event decoration and planning in Punjab. We design elegant conference setups, product launches, galas, and award ceremonies.` (147 chars)
- **Current Canonical:** `https://phoolkaridecorstudio.in/services/corporate-events`
- **Current H1:** `Corporate Events`
- **Issues Identified:** **Broken CTA:** Line 56 links to root `/` instead of contact form. Thin copy (~210 words).
- **Recommended Title:** `Corporate Event Decorators in Amritsar & Punjab \| Phoolkari` (58 chars)
- **Recommended Meta Description:** `High-impact corporate event decoration in Amritsar: stage setups, annual galas, product launches, and conference branding at luxury ballrooms across Punjab.` (154 chars)
- **Recommended H1:** `Corporate Event Decoration &amp; <em>Management in Amritsar</em>`
- **Content Improvements:** Fix CTA `<Link href="/#contact">`. Add specific corporate offerings (LED walls, podium styling, exhibition booths, gala dinners).

---

### 5. Birthday & Anniversary (`/services/birthday-parties`)
- **Current Title:** `Luxury Birthday & Anniversary Decor in Amritsar | Phoolkari` (63 chars)
- **Current Meta Description:** `Premium birthday and anniversary decoration services. We specialize in custom themes, luxury balloon artistry, and milestone celebrations in Punjab.` (148 chars)
- **Current Canonical:** `https://phoolkaridecorstudio.in/services/birthday-parties`
- **Current H1:** `Birthday & Anniversary`
- **Issues Identified:** **Broken CTA:** Line 56 links to `/`. Thin copy (~210 words).
- **Recommended Title:** `Birthday & Anniversary Party Decorators in Amritsar \| Phoolkari` (64 chars)
- **Recommended Meta Description:** `Celebrate milestone birthdays & anniversaries in Amritsar with luxury balloon styling, custom neon backdrops, and bespoke theme decoration by Phoolkari.` (151 chars)
- **Recommended H1:** `Luxury Birthday &amp; <em>Anniversary Decor in Amritsar</em>`
- **Content Improvements:** Fix CTA link to `/#contact`. Add image gallery showcase of kids' themes and 25th/50th anniversary setups.

---

### 6. Festival & Cultural Decor (`/services/festival-decor`)
- **Current Title:** `Festival & Cultural Event Decor in Amritsar | Phoolkari` (59 chars)
- **Current Meta Description:** `Authentic and luxurious festival decoration services in Punjab. We design stunning setups for Diwali, Lohri, Eid, and cultural celebrations.` (140 chars)
- **Current Canonical:** `https://phoolkaridecorstudio.in/services/festival-decor`
- **Current H1:** `Festival & Cultural`
- **Issues Identified:** Broken CTA pointing to `/`. Thin copy (~210 words).
- **Recommended Title:** `Festival & Cultural Event Decor in Amritsar \| Diwali & Lohri` (60 chars)
- **Recommended Meta Description:** `Authentic Punjabi cultural event decoration in Amritsar. Premium floral rangolis, traditional phulkari canopies, and lighting for Diwali, Lohri, and Eid.` (154 chars)
- **Recommended H1:** `Festival &amp; Cultural <em>Event Decoration in Amritsar</em>`
- **Content Improvements:** Fix CTA link to `/#contact`. Add traditional seasonal sections for Lohri, Vaisakhi, and Diwali festive galas.

---

### 7. About Us (`/about`)
- **Current Title:** `About Us | Phoolkari Decor Studio` (33 chars)
- **Current Meta Description:** `Learn about the premier luxury event decoration company in Punjab, founded by Mukesh N Aggarwal.` (96 chars)
- **Current Canonical:** `https://phoolkaridecorstudio.in/about`
- **Current H1:** `Who We Are`
- **Issues Identified:** Title and description are too short; H1 is generic.
- **Recommended Title:** `About Phoolkari Decor Studio \| Event Decorators in Amritsar` (59 chars)
- **Recommended Meta Description:** `Discover Phoolkari Decor Studio, Amritsar's premier event planning & luxury decor company founded by Mukesh N Aggarwal. Transforming Punjab celebrations since inception.` (166 chars)
- **Recommended H1:** `The Artistry Behind <em>Phoolkari Decor Studio</em>`
- **Content Improvements:** Expand on founder experience, craft heritage (Phulkari needlework connection), warehouse infrastructure, and in-house floral fabrication teams.

---

### 8. Gallery (`/gallery`)
- **Current Title:** `Our Gallery & Portfolio | Phoolkari Decor Studio` (52 chars)
- **Current Meta Description:** `Browse our extensive gallery of luxury weddings, corporate galas, and themed birthday celebrations across Amritsar and Punjab.` (126 chars)
- **Current Canonical:** `https://phoolkaridecorstudio.in/gallery`
- **Current H1:** `Visual Masterpieces`
- **Issues Identified:** Generic H1; portfolio images use uncompressed PNGs (up to 3.3 MB each) with spaces in filenames (`Haldi 1.png`) and generic alt tags (`"Haldi decoration setup 1"`).
- **Recommended Title:** `Event Decor Portfolio & Gallery \| Phoolkari Decor Studio Amritsar` (65 chars)
- **Recommended Meta Description:** `Explore our gallery of luxury weddings, royal mandaps, haldi setups & corporate galas decorated at top Amritsar venues by Phoolkari Decor Studio.` (145 chars)
- **Recommended H1:** `Our Event Decor <em>Portfolio &amp; Gallery</em>`
- **Content Improvements:** Rename images to descriptive hyphenated slugs (e.g., `amritsar-haldi-marigold-decor-setup-01.webp`). Provide rich alt text describing the floral types, lighting, and venue.

---

### 9. Themes Showcase (`/themes`)
- **Current Title:** `Our Signature Themes | Phoolkari Decor Studio` (45 chars)
- **Current Meta Description:** `Explore our breathtaking signature decor themes, from Royal Rajasthani and Enchanted Garden to Modern Minimalist sets in Punjab.` (128 chars)
- **Current Canonical:** `https://phoolkaridecorstudio.in/themes`
- **Current H1:** `Signature Themes`
- **Issues Identified:** Title lacks local keyword "Amritsar".
- **Recommended Title:** `Signature Wedding Decor Themes in Amritsar \| Phoolkari` (54 chars)
- **Recommended Meta Description:** `Explore signature wedding themes by Phoolkari Decor Studio in Amritsar: Royal Rajasthani, Enchanted Garden, Celestial Night, and Modern Minimalist concepts.` (154 chars)
- **Recommended H1:** `Signature Wedding &amp; <em>Event Decor Themes</em>`
- **Content Improvements:** Add theme color palettes, suggested ceremony pairings (e.g. Enchanted Garden for Day Wedding / Sundowner, Royal Rajasthani for Reception), and client inquiry buttons.

---

### 10. Blog Index (`/blog`) & Article Pages (`/blog/[slug]`)
- **Current Blog Index Title:** `Event Decor & Planning Blog | Phoolkari Decor Studio` (56 chars)
- **Current Article Titles:** Dynamic titles are 76–94 characters long (e.g., `Stunning Haldi Decoration Ideas: From Marigolds to Modern Twists | Phoolkari Decor Studio Blog` = 94 chars).
- **Issues Identified:**
  - Article titles are too long and truncate in Google SERPs.
  - Social share links (`Facebook`, `Twitter`, `LinkedIn`) are dead anchors (`href="#"`).
  - `Article` schema uses 12 MB SVG logo for `publisher.logo.url`.
  - Missing `dateModified` in `Article` schema.
- **Recommended Resolution:**
  - Shorten article title template to: `${post.title} | Phoolkari Blog` (drops ~14 characters).
  - Add functional `mailto:` / Web Share API / WhatsApp share links.
  - Add `dateModified` to `Article` schema.
  - Use a clean 60px raster logo for `publisher.logo.url`.

---

## 10. Performance, Media & Core Web Vitals Audit

### Measured Asset Weights on Production Server:
Direct measurements taken from `https://www.phoolkaridecorstudio.in/`:

| Resource | File Type | Current File Size | Optimization Target | Potential Saving |
|----------|-----------|-------------------|---------------------|------------------|
| `src/app/icon.svg` (Favicon) | SVG with base64 PNG | **12,261,257 bytes (11.69 MB)** | < 15,000 bytes (< 15 KB) | **99.8% reduction** |
| `public/images/logo.svg` (Navbar/Footer) | SVG with base64 PNG | **12,261,257 bytes (11.69 MB)** | < 45,000 bytes (< 45 KB) | **99.6% reduction** |
| `public/images/floral-lotus-bg.png` | Uncompressed PNG | **1,148,442 bytes (1.10 MB)** | < 120,000 bytes WebP | **89.5% reduction** |
| `public/images/floral-baile-bg.png` | Uncompressed PNG | **1,129,373 bytes (1.08 MB)** | < 120,000 bytes WebP | **89.3% reduction** |
| `public/images/portfolio/event-1.png` | Uncompressed PNG | **1,286,283 bytes (1.23 MB)** | < 180,000 bytes WebP | **86.0% reduction** |
| `public/images/portfolio/event-3.png` | Uncompressed PNG | **1,326,847 bytes (1.27 MB)** | < 190,000 bytes WebP | **85.6% reduction** |
| `public/images/portfolio/haldi/Haldi 1.png` | Uncompressed PNG | **2,923,817 bytes (2.79 MB)** | < 220,000 bytes WebP | **92.4% reduction** |
| `public/images/portfolio/haldi/Haldi 4.png` | Uncompressed PNG | **3,341,299 bytes (3.18 MB)** | < 250,000 bytes WebP | **92.5% reduction** |
| `public/images/portfolio/mehendi/Mehendi 1.png` | Uncompressed PNG | **2,938,173 bytes (2.80 MB)** | < 220,000 bytes WebP | **92.1% reduction** |

*Total measured sample weight of initial homepage + portfolio assets:* **37.85 MB**.

### Core Web Vitals Architectural Assessment:
- **Largest Contentful Paint (LCP):** Severely impacted by two factors:
  1. The 2,000 ms artificial timer in `Preloader.jsx` blocks the viewport for 2 full seconds before unveiling the main hero element.
  2. The 11.69 MB `logo.svg` is loaded with `priority` inside `Navbar.jsx` and `Preloader.jsx`, competing directly with hero image bandwidth.
- **Cumulative Layout Shift (CLS):** Generally stable (`cls < 0.05` lab estimate) because Next.js `<Image fill>` and explicit widths/heights maintain aspect ratios. Minor risk from dynamic font swapping across 4 Google Font families.
- **Interaction to Next Paint (INP):** `CustomCursor.jsx` attaches non-passive `mousemove` and `mouseover` event listeners to `window`, triggering continuous React state updates on desktop pointer movement. This should be debounced or implemented via lightweight pure CSS cursor styles.
- **Font Loading:** 4 distinct Google font families (`Cormorant Garamond`, `Outfit`, `Inter`, `Great Vibes`) are imported with multiple weights (300, 400, 500, 600, 700). While handled via `next/font/google` (`display: swap`), reducing unused weights will trim CSS and WOFF2 bundle overhead.

---

## 11. Analytics & Tracking Audit

| Platform / Tool | Verification Status | Exact Details | Identified Gap / Required Action |
|-----------------|---------------------|---------------|----------------------------------|
| **Google Search Console** | **VERIFIED** | Verification meta tag `tZFTCyybHBbdm9IRNxAmcyeQBtck03GskN6jAQ4UvqY` in `<head>` and static file `google69ed14fd05072c89.html` both return 200 OK. | **GSC Performance & Indexing Reports: ACCESS REQUIRED.** Need GSC owner access to audit query impressions, CTR, crawl stats, and indexation exclusion causes. |
| **Google Analytics 4 (GA4)** | **VERIFIED** | Measurement ID `G-51HBDGPQR6` correctly installed via `next/script` in `RootLayout`. | **Conversion Events: MISSING.** No event triggers for leads. **GA4 Traffic Reports: ACCESS REQUIRED.** |
| **Form Lead Tracking** | **MISSING** | `Contact.jsx` uses `onSubmit` to construct a WhatsApp string and opens it via `window.open`. No `gtag('event', 'generate_lead')` call. | Implement GA4 custom lead conversion event on successful form submission. |
| **WhatsApp Click Tracking** | **MISSING** | Floating WhatsApp button (`WhatsAppFloat.jsx`) and Contact WhatsApp button link directly to `https://wa.me/919155703155` without click listeners. | Add `onClick={() => gtag('event', 'contact_whatsapp')}` to measure inquiry conversions. |
| **Phone Click Tracking** | **MISSING** | Header and footer `<a href="tel:...">` links lack event tracking. | Add `onClick={() => gtag('event', 'contact_telephone')}`. |
| **Google Tag Manager** | **NOT INSTALLED** | GA4 is installed directly via gtag.js. | Direct gtag is sufficient; GTM is optional. |

---

## 12. Security & SEO Reliability

- **HTTPS Enforcement:** Pass. Server enforces SSL with valid certificates and `Strict-Transport-Security: max-age=63072000`.
- **Redirect Chains:** Noticeable 2-hop redirect chain:
  `http://phoolkaridecorstudio.in` $\rightarrow$ 308 to `https://phoolkaridecorstudio.in/` $\rightarrow$ 308 to `https://www.phoolkaridecorstudio.in/`. (Configuring non-www HTTP to redirect straight to www HTTPS eliminates one network round-trip).
- **Environment & Secrets Exposure:** Pass. No `.env`, `.git`, or credential files are publicly accessible in production.
- **Privacy Policy & Terms:** Pass. `/privacy` and `/terms` are fully rendered with 200 OK responses.

---

## 13. SEO Audit Scorecard

### Scoring Methodology & Category Denominators

The diagnostic audit score is calculated across **5 distinct pillars** using predefined denominators totaling 100 points. Criteria that could not be evaluated due to lack of private console access (e.g., GSC clicks/impressions) are categorized as **ACCESS REQUIRED / UNKNOWN** and are excluded from denominator penalties.

```
+-------------------------------------------------------------+
| Pillar                             Weight   Score   Coverage|
+-------------------------------------------------------------+
| 1. Technical SEO                   25 pts   15/25     100%  |
| 2. On-Page SEO & Content           25 pts   13/25     100%  |
| 3. Local SEO (Amritsar & Punjab)   20 pts    8/20     100%  |
| 4. Performance & Core Web Vitals   15 pts    6/15      90%  |
| 5. Authority & Analytics Tracking  15 pts    5/15      70%  |
+-------------------------------------------------------------+
| OVERALL AUDIT SCORE                         47/100    92%   |
+-------------------------------------------------------------+
```

### Pillar Breakdown Details:
1. **Technical SEO (15 / 25 pts):**
   - Host & Canonical Consistency: 0 / 5 (Severe self-referential redirect conflict)
   - Sitemap & Robots.txt: 3 / 5 (Valid syntax, but sitemap has redirecting URLs and omits `/services`)
   - Crawlability & HTTP Status: 5 / 5 (Clean 200 OK on all routes, clean 404 response)
   - Trailing Slash & Clean URLs: 4 / 5 (Clean routes, 308 on trailing slash)
   - Metadata Standards: 3 / 5 (Open Graph complete, but 10k character keyword stuffing)
2. **On-Page SEO & Content (13 / 25 pts):**
   - Heading Structure: 2 / 6 (Homepage has 0 H1 tags; duplicate H2s)
   - Title Tags & Descriptions: 4 / 6 (Present everywhere, but blog titles truncated, subpage titles too short)
   - Content Depth & Quality: 4 / 5 (Rich blog articles; service pages thin)
   - Internal Linking & CTAs: 2 / 4 (Service CTA links broken to `/`; dead social links)
   - Keyword Relevance vs Spam: 1 / 4 (Severe keyword stuffing in metadata and schema)
3. **Local SEO (8 / 20 pts):**
   - NAP Accuracy & Completeness: 2 / 5 (Name/Phone verified; missing street address & pincode)
   - LocalBusiness Schema: 2 / 5 (Missing street, pincode, geo coordinates, and valid raster image)
   - Local Service Pages: 2 / 5 (Lacks dedicated stage, mandap, haldi, and venue service pages)
   - Google Business Profile Signals: 2 / 5 (No GBP link or Google Map embed on site)
4. **Performance & Core Web Vitals (6 / 15 pts):**
   - Image & Asset Optimization: 0 / 4 (12 MB SVG favicon & logo; uncompressed 3 MB PNGs)
   - Page Speed & Rendering: 1 / 4 (Artificial 2s preloader delay holding back LCP)
   - Mobile Responsiveness & Viewport: 3 / 4 (Responsive CSS layout, mobile nav functional)
   - Font Loading Architecture: 2 / 3 (next/font used, but 4 families loaded)
5. **Authority & Analytics Tracking (5 / 15 pts):**
   - Analytics & Search Console Setup: 3 / 5 (GA4 installed, GSC verified; private data access required)
   - Conversion Tracking: 0 / 5 (Zero events for form submission, WhatsApp, or phone calls)
   - Citations & Backlinks: 2 / 5 (Hotel partners mentioned, but no external citations verified)

**Diagnostic Assessment:** **47 / 100**. The website possesses beautiful visual aesthetics and strong blog content, but critical technical errors (canonical redirect loop, 12 MB SVG assets, missing homepage H1, and zero lead tracking) actively prevent it from ranking competitively in Google Search.

---

## 14. Prioritized Remediation Roadmap

### Immediate: Critical P0 Issues (Days 1–3)
- [ ] **Fix Canonical & Host Subdomain Conflict:** Standardize on `https://www.phoolkaridecorstudio.in` in `metadataBase` (`src/app/layout.js:14`), `sitemap.js`, and all 28 child route canonical declarations.
- [ ] **Replace 12.26 MB SVG Favicon & Logo:**
  - Create a lightweight `icon.svg` / `icon.png` (32x32, under 10 KB) for the browser favicon.
  - Export a clean, optimized WebP / true vector SVG logo (under 40 KB) without base64 raster embedding.
- [ ] **Add Primary `<h1>` to Homepage:** Update `Hero.jsx` to render an elegant `<h1>` element: `Luxury Wedding Decorators & Event Planners in Amritsar`.
- [ ] **Fix XML Sitemap:** Set `baseUrl = 'https://www.phoolkaridecorstudio.in'` and add `'/services'` to the sitemap route inventory.

### First 7 Days: High-Priority P1 Fixes (Days 4–7)
- [ ] **Remove Keyword Stuffing:** Delete the 10,000-character keyword string from `src/app/layout.js` metadata and `structuredData`.
- [ ] **Repair Broken Service Page CTAs:** Update `corporate-events/page.js`, `birthday-parties/page.js`, and `festival-decor/page.js` to link buttons to `/#contact` instead of root `/`.
- [ ] **Upgrade LocalBusiness Schema:** Add specific address details (or specify service area if operating as a mobile studio), add GPS coordinates, add `EventPlanner` type, and replace `image` URL with a 1200x675 JPG/WebP image.
- [ ] **Eliminate 2-Second Preloader Delay:** Remove the `setTimeout 2000ms` in `Preloader.jsx` to allow immediate page content rendering.
- [ ] **Implement GA4 Conversion Tracking:**
  - Fire `gtag('event', 'generate_lead')` on contact form submission.
  - Fire `gtag('event', 'click_whatsapp')` on all WhatsApp links.
  - Fire `gtag('event', 'click_telephone')` on `tel:` link clicks.

### Days 8–30: Content, Media & On-Page Improvements
- [ ] **Compress Portfolio & Theme Images:** Convert all uncompressed PNG assets in `public/images/portfolio/` and `public/images/themes/` to WebP format with hyphenated filenames (reducing 37 MB payload to ~3.5 MB).
- [ ] **Expand Core Service Pages:** Expand body copy on `/services/wedding-decor`, `/services/corporate-events`, etc., from 200 words to 600–800 words with FAQs and detailed service inclusions.
- [ ] **Shorten Blog Title Tags:** Update `src/app/blog/[slug]/page.js` to keep title tags under 60 characters to prevent Google SERP truncation.
- [ ] **Fix Dead Interactive Anchors:** Replace `href="#"` on YouTube icons and blog social share buttons with working links or Web Share API triggers.
- [ ] **Eliminate Duplicate Homepage `<h2>`:** Adjust `Themes.jsx` so "Signature Themes" is rendered once in the DOM.

### Days 31–60: Local SEO, Landing Pages & Authority Building
- [ ] **Publish Physical NAP & Google Map:** Add complete street address and embed verified Google Map on the Contact section.
- [ ] **Create Dedicated Amritsar Service Landing Pages:**
  - `/services/wedding-stage-decoration-amritsar`
  - `/services/haldi-mehndi-decor-amritsar`
  - `/services/wedding-mandap-amritsar`
- [ ] **Build Venue Collaboration Pages:** Create showcase pages for partner venues: *Radisson Blu Amritsar Wedding Decor*, *Taj Swarna Event Styling*, *Hyatt Amritsar Ballrooms*.
- [ ] **Claim Local Citations:** Create and optimize official business profiles on WeddingWire India, WedMeGood, JustDial, and Google Business Profile.

### Days 61–90: Measurement, Expansion & Refinement
- [ ] **Review GSC Performance:** Inspect Google Search Console search queries, average position, and indexing status for newly submitted www sitemap.
- [ ] **Evaluate Core Web Vitals:** Verify LCP has dropped below 2.5s and FCP below 1.5s following logo and preloader optimization.
- [ ] **A/B Test Inquiry CTAs:** Test WhatsApp lead form conversions against direct telephone calls.

---

## 15. Outstanding Questions & Access Requirements

To perform complete verification of private search engine telemetry, the following accounts/access are required:

1. **Google Search Console Property Access:**
   - **Requirement:** User or Owner access to `https://www.phoolkaridecorstudio.in` in GSC.
   - **Purpose:** Inspect actual Google-indexed vs excluded URLs, crawl errors, keyword impression data, CTR, and Core Web Vitals field data.
2. **Google Analytics 4 (GA4) Property Access:**
   - **Requirement:** Viewer access to GA4 property `G-51HBDGPQR6`.
   - **Purpose:** Audit organic search traffic acquisition, user engagement times, bounce rates, and current lead attribution.
3. **Google Business Profile (GBP) Ownership / Manager Access:**
   - **Requirement:** Access to the official Google Business Profile manager dashboard.
   - **Purpose:** Verify category alignment, primary business address, service-area boundaries, reviews, and Google Maps CID link.

---

## 16. Implementation Checklist

| Action Item | Priority | File / Component | Verification Criteria | Status |
|-------------|----------|------------------|-----------------------|--------|
| Standardize Canonical URLs to `www` | **P0** | `src/app/layout.js`, all `page.js` | `<link rel="canonical">` matches final URL with www; no redirect | Pending Fix |
| Replace 12.26 MB `icon.svg` & `logo.svg` | **P0** | `src/app/icon.svg`, `public/images/logo.svg` | Asset sizes < 45 KB; no embedded base64 data | Pending Fix |
| Add `<h1>` to Homepage Hero | **P0** | `src/app/components/Hero.jsx` | Exactly 1 `<h1>` tag containing target Amritsar keywords | Pending Fix |
| Add `/services` to Sitemap & Fix `baseUrl` | **P1** | `src/app/sitemap.js` | `/sitemap.xml` contains www URLs and includes `/services` | Pending Fix |
| Remove 10k Character Keyword Stuffing | **P1** | `src/app/layout.js` | `<meta name="keywords">` is absent from rendered `<head>` | Pending Fix |
| Fix Broken Service Page CTAs | **P1** | `services/*/page.js` | All service CTA buttons link to `/#contact` | Pending Fix |
| Remove 2-Second Preloader Delay | **P1** | `src/app/components/Preloader.jsx` | Preloader disappears immediately upon mount; no 2000ms delay | Pending Fix |
| Implement GA4 Lead & Click Events | **P1** | `Contact.jsx`, `WhatsAppFloat.jsx` | GA4 events trigger on form submit, WhatsApp click, and call click | Pending Fix |
| Upgrade LocalBusiness Schema | **P1** | `src/app/layout.js` | Schema passes Rich Results Test; includes address and coordinates | Pending Fix |
| Convert PNGs to WebP | **P2** | `public/images/portfolio/` | Portfolio images < 250 KB each; no spaces in filenames | Pending Fix |
| Shorten Blog Title Tags | **P2** | `src/app/blog/[slug]/page.js` | Blog titles <= 60 characters; no SERP truncation | Pending Fix |
| Fix Dead `href="#"` Links | **P2** | `Footer.jsx`, `BlogPostClient.jsx` | All social and share buttons link to destinations or Web Share API | Pending Fix |
| Add Dedicated Stage & Haldi Pages | **P2** | New routes in `src/app/services/` | Targeted URLs for Stage, Mandap, and Haldi decoration created | Planned |
| Publish Physical Address & Map | **P2** | `src/app/components/Contact.jsx` | Full postal address and Google Maps embed visible on contact page | Planned |
