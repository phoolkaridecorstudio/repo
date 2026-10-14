import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../servicesPage.module.css';

export const metadata = {
  title: 'Luxury Wedding Decorators in Amritsar | Phoolkari',
  description: 'Top-rated luxury wedding decoration services in Punjab. We specialize in royal mandap designs, floral cascades, and premium stage setups at top hotels and farmhouses.',
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
  name: 'Luxury Wedding Decorators in Amritsar',
  serviceType: 'Wedding Decoration & Planning',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Phoolkari Decor Studio',
    url: 'https://www.phoolkaridecorstudio.in',
    image: 'https://www.phoolkaridecorstudio.in/images/logo.png',
    telephone: ['+91-91557-03155', '+91-96990-33155'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amritsar',
      addressRegion: 'Punjab',
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

export default function WeddingDecor() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <main className={styles.servicePage}>
        <div className={styles.heroWrap}>
          <Image src="/images/services/wedding-decor.webp" alt="Luxury Wedding Decor by Phoolkari Decor Studio" fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className="section-label">Our Services</span>
            <h1 className="section-title" style={{ color: 'var(--white)' }}>Luxury Wedding <em>Decor</em></h1>
            <div className="gold-divider"><span className="line" /><span className="dot" /><span className="line" /></div>
          </div>
        </div>

        <div className={styles.intro}>
          <p className={styles.introText}>
            Your wedding day is a masterpiece waiting to be painted. From intimate ceremonies to grand destination weddings, we create breathtaking environments tailored perfectly to your love story. Whether it&apos;s a vibrant Haldi setup, a royal Mandap, or a glamorous reception hall, our expertise guarantees an unforgettable experience.
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
          <h2 className={styles.ctaTitle}>Venues We <em>Transform</em></h2>
          <p className={styles.ctaText}>
            We have extensive experience working with Punjab&apos;s top luxury venues, including Radisson Blu, Taj Swarna, Hyatt Amritsar, and various premium private farmhouses. Whether it is an intimate garden wedding or a grand ballroom reception, we know how to optimize the space.
          </p>
          <Link href="#contact" className="btn btn--gold">Book Your Wedding Consultation</Link>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
