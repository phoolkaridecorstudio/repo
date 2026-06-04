import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Image from 'next/image';
import styles from '../servicesPage.module.css';

export const metadata = {
  title: 'Luxury Wedding Decorators in Amritsar | Phoolkari',
  description: 'Top-rated luxury wedding decoration services in Punjab. We specialize in royal mandap designs, floral cascades, and premium stage setups at top hotels and farmhouses.',
  alternates: { canonical: 'https://phoolkaridecorstudio.in/services/wedding-decor' }
};

const features = [
  { title: 'Royal Mandap Designs', desc: 'Custom-built structures featuring fresh exotic florals, crystal chandeliers, and luxurious drapes.' },
  { title: 'Sangeet & Haldi Setups', desc: 'Vibrant, colorful, and traditional setups with marigold cascades, traditional props, and modern twists.' },
  { title: 'Reception Stages', desc: 'Majestic backdrop designs with intelligent lighting, premium furniture, and elegant floral arches.' },
  { title: 'Entrance & Walkway', desc: 'Grand welcome arches and candle-lit pathways to leave a lasting first impression on your guests.' },
];

export default function WeddingDecor() {
  return (
    <>
      <Navbar />
      <main className={styles.servicePage}>
        <div className={styles.heroWrap}>
          <Image src="/images/services/wedding-decor.png" alt="Luxury Wedding Decor by Phoolkari Decor Studio" fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className="section-label">Our Services</span>
            <h1 className="section-title" style={{ color: 'var(--white)' }}>Luxury Wedding <em>Decor</em></h1>
            <div className="gold-divider"><span className="line" /><span className="dot" /><span className="line" /></div>
          </div>
        </div>

        <div className={styles.intro}>
          <p className={styles.introText}>
            Your wedding day is one of the most significant moments of your life. At Phoolkari Decor Studio, we transform venues into breathtaking experiences that reflect your unique love story. As Amritsar's premier wedding decorators, we specialize in high-end, bespoke floral design and structural architecture.
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
            We have extensive experience working with Punjab's top luxury venues, including Radisson Blu, Taj Swarna, Hyatt Amritsar, and various premium private farmhouses. Whether it is an intimate garden wedding or a grand ballroom reception, we know how to optimize the space.
          </p>
          <a href="/#contact" className="btn btn--gold">Book Your Wedding Consultation</a>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
