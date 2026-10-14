import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../servicesPage.module.css';

export const metadata = {
  title: 'Festival & Cultural Event Decor in Amritsar | Phoolkari',
  description: 'Authentic and luxurious festival decoration services in Punjab. We design stunning setups for Diwali, Lohri, Eid, and cultural celebrations.',
  alternates: { canonical: 'https://www.phoolkaridecorstudio.in/services/festival-decor' }
};

const features = [
  { title: 'Diwali & Festive Galas', desc: 'Spectacular lighting arrangements, elaborate rangoli-inspired floral designs, and traditional diyas to illuminate your space.' },
  { title: 'Lohri & Vaisakhi', desc: 'Rustic and vibrant Punjabi themes featuring traditional phulkari drapes, bonfire setups, and authentic folk elements.' },
  { title: 'Religious Gatherings', desc: 'Serene, pure, and elegant floral decorations for spiritual and religious ceremonies that demand respect and beauty.' },
  { title: 'Eid & Cultural Events', desc: 'Rich, ornate decorations blending traditional motifs with modern luxury for multicultural celebrations across Punjab.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Festival & Cultural Event Decoration in Amritsar',
  serviceType: 'Festive & Cultural Event Decoration',
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
    'Grand festive and cultural event decoration services in Amritsar and across Punjab. Specialized setups for Diwali galas, Lohri, Vaisakhi, and spiritual ceremonies.',
  url: 'https://www.phoolkaridecorstudio.in/services/festival-decor',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.phoolkaridecorstudio.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.phoolkaridecorstudio.in/services' },
    { '@type': 'ListItem', position: 3, name: 'Festival & Cultural Decor', item: 'https://www.phoolkaridecorstudio.in/services/festival-decor' },
  ],
};

export default function FestivalDecor() {
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
          <Image src="/images/services/festival-decor.webp" alt="Festival and Cultural Decoration by Phoolkari Decor Studio" fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span className={styles.bcSep}>/</span>
              <Link href="/services">Services</Link>
              <span className={styles.bcSep}>/</span>
              <span className={styles.bcCurrent}>Festival & Cultural</span>
            </nav>
            <span className="section-label">Our Services</span>
            <h1 className="section-title" style={{ color: 'var(--white)' }}>Festival & <em>Cultural</em></h1>
            <div className="gold-divider"><span className="line" /><span className="dot" /><span className="line" /></div>
          </div>
        </div>

        <div className={styles.intro}>
          <p className={styles.introText}>
            Celebrate the rich heritage of Punjab with authentic, luxurious cultural decorations. At Phoolkari Decor Studio, we specialize in blending traditional artistry with modern luxury to create unforgettable atmospheres for festivals and cultural events.
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
          <h2 className={styles.ctaTitle}>Authentic <em>Craftsmanship</em></h2>
          <p className={styles.ctaText}>
            We source local, traditional materials and combine them with premium floral imports to create setups that feel both authentically cultural and undeniably luxurious. Our team deeply respects the cultural significance of your events and designs accordingly.
          </p>
          <Link href="#contact" className="btn btn--gold">Inquire About Festival Decor</Link>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
