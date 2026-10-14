import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../servicesPage.module.css';

export const metadata = {
  title: 'Wedding Decorators in Amritsar — Luxury Wedding Decor | Phoolkari Decor Studio',
  description: 'Top-rated luxury wedding decoration services in Amritsar, Punjab. Royal mandap designs, floral cascades, wedding stages & theme setups at premier venues & farmhouses.',
  alternates: { canonical: 'https://www.phoolkaridecorstudio.in/services/wedding-decor' }
};

const features = [
  { title: 'Royal Mandap Designs', desc: 'Custom-built structures featuring fresh exotic florals, crystal chandeliers, and luxurious drapes.' },
  { title: 'Sangeet & Haldi Setups', desc: 'Vibrant, colorful, and traditional setups with marigold cascades, traditional props, and modern twists.' },
  { title: 'Reception Stages', desc: 'Majestic backdrop designs with intelligent lighting, premium furniture, and elegant floral arches.' },
  { title: 'Entrance & Walkway', desc: 'Grand welcome arches and candle-lit pathways to leave a lasting first impression on your guests.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wedding Decorators in Amritsar',
  serviceType: 'Wedding Decoration & Planning',
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
    'Top-rated luxury wedding decoration services in Punjab specializing in royal mandap designs, floral cascades, and premium stage setups.',
  url: 'https://www.phoolkaridecorstudio.in/services/wedding-decor',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.phoolkaridecorstudio.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.phoolkaridecorstudio.in/services' },
    { '@type': 'ListItem', position: 3, name: 'Luxury Wedding Decor', item: 'https://www.phoolkaridecorstudio.in/services/wedding-decor' },
  ],
};

export default function WeddingDecor() {
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
          <Image src="/images/services/wedding-decor.webp" alt="Luxury Wedding Decor by Phoolkari Decor Studio" fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span className={styles.bcSep}>/</span>
              <Link href="/services">Services</Link>
              <span className={styles.bcSep}>/</span>
              <span className={styles.bcCurrent}>Wedding Decor</span>
            </nav>
            <span className="section-label">Our Services</span>
            <h1 className="section-title" style={{ color: 'var(--white)' }}>Luxury Wedding <em>Decor</em></h1>
            <div className="gold-divider"><span className="line" /><span className="dot" /><span className="line" /></div>
          </div>
        </div>

        <div className={styles.intro}>
          <p className={styles.introText}>
            Your wedding day is one of the most special moments of your life. From intimate pre-wedding functions to grand celebrations, we create beautiful floral mandaps, stunning stage backdrops, and elegant lighting tailored to your family&apos;s traditions and budget.
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
          <h2 className={styles.ctaTitle}>Venues We <em>Decorate</em></h2>
          <p className={styles.ctaText}>
            We regularly decorate weddings at Amritsar&apos;s top luxury hotels and farmhouses, including Radisson Blu, Taj Swarna, Hyatt Regency, and private farmhouse lawns. Wherever your venue is, we ensure everything looks picture-perfect and is completed on time.
          </p>
          <Link href="#contact" className="btn btn--gold">Talk to Our Team</Link>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
