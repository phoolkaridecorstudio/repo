import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../servicesPage.module.css';

export const metadata = {
  title: 'Corporate Event Decorators in Amritsar | Phoolkari',
  description: 'Professional corporate event decoration and planning in Punjab. We design elegant conference setups, product launches, galas, and award ceremonies.',
  alternates: { canonical: 'https://www.phoolkaridecorstudio.in/services/corporate-events' }
};

const features = [
  { title: 'Award Ceremonies & Galas', desc: 'Red carpet entrances, grand stage designs, and luxury table centerpieces tailored to your corporate identity.' },
  { title: 'Product Launches', desc: 'Innovative, modern stage setups with intelligent lighting to make your new product shine in the spotlight.' },
  { title: 'Conferences & Seminars', desc: 'Clean, professional stage backdrops and branding integration that maintains corporate elegance throughout.' },
  { title: 'Festive Office Decor', desc: 'Premium floral and lighting installations for your office space during Diwali, Christmas, and New Year.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corporate Event Planners & Decorators in Amritsar',
  serviceType: 'Corporate Event Management & Decoration',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Phoolkari Decor Studio',
    url: 'https://www.phoolkaridecorstudio.in',
    image: 'https://www.phoolkaridecorstudio.in/images/logo.png',
    telephone: ['+91-91557-03155', '+91-96990-33155'],
    sameAs: 'https://share.google/h12ps5eynG7lKzTKg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ashiana Estate, 1034, Fateh Garh Churian Rd, Murad Pura, Naushehra',
      addressLocality: 'Amritsar',
      addressRegion: 'Punjab',
      postalCode: '143008',
      addressCountry: 'IN',
    },
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Amritsar, Punjab, India',
  },
  description:
    'High-end corporate event decoration in Amritsar and across Punjab. Specializing in award ceremonies, gala dinners, annual conferences, and brand launches.',
  url: 'https://www.phoolkaridecorstudio.in/services/corporate-events',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.phoolkaridecorstudio.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.phoolkaridecorstudio.in/services' },
    { '@type': 'ListItem', position: 3, name: 'Corporate Events', item: 'https://www.phoolkaridecorstudio.in/services/corporate-events' },
  ],
};

export default function CorporateEvents() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className={styles.servicePage}>
        <div className={styles.heroWrap}>
          <Image src="/images/services/corporate-events.webp" alt="Corporate Event Decoration by Phoolkari Decor Studio" fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span className={styles.bcSep}>/</span>
              <Link href="/services">Services</Link>
              <span className={styles.bcSep}>/</span>
              <span className={styles.bcCurrent}>Corporate Events</span>
            </nav>
            <span className="section-label">Our Services</span>
            <h1 className="section-title" style={{ color: 'var(--white)' }}>Corporate <em>Events</em></h1>
            <div className="gold-divider"><span className="line" /><span className="dot" /><span className="line" /></div>
          </div>
        </div>

        <div className={styles.intro}>
          <p className={styles.introText}>
            Your corporate event is a direct reflection of your brand&apos;s prestige. At Phoolkari Decor Studio, we provide sophisticated, high-end decoration services for corporate clients across Punjab. From annual galas to professional conferences, we deliver environments that inspire.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureCard}>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaBanner}>
          <h2 className={styles.ctaTitle}>Why Choose <em>Us?</em></h2>
          <p className={styles.ctaText}>
            Corporate events require strict adherence to timelines and a deep understanding of brand aesthetics. Our highly trained team executes flawless setups with minimal disruption, working closely with event planners and hotel staff to ensure a seamless experience.
          </p>
          <Link href="#contact" className="btn btn--gold">Inquire About Corporate Events</Link>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
