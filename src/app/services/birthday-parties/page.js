import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Image from 'next/image';
import styles from '../servicesPage.module.css';

export const metadata = {
  title: 'Luxury Birthday & Anniversary Decor in Amritsar | Phoolkari',
  description: 'Premium birthday and anniversary decoration services. We specialize in custom themes, luxury balloon artistry, and milestone celebrations in Punjab.',
  alternates: { canonical: 'https://phoolkaridecorstudio.in/services/birthday-parties' }
};

const features = [
  { title: 'Themed Kids Birthdays', desc: 'From enchanted forests to superhero universes, we create immersive environments using premium balloon artistry and custom props.' },
  { title: 'Anniversary Galas', desc: 'Romantic and elegant setups featuring floral arches, vintage lighting, and sophisticated dining aesthetics.' },
  { title: 'Milestone Birthdays', desc: 'Chic, modern designs for 18th, 21st, and 50th birthday parties, complete with photo booths and customized signage.' },
  { title: 'Custom Fabrication', desc: 'We custom-build structures, neon signs, and backdrops tailored specifically to the guest of honor for a truly unique celebration.' },
];

export default function BirthdayParties() {
  return (
    <>
      <Navbar />
      <main className={styles.servicePage}>
        <div className={styles.heroWrap}>
          <Image src="/images/services/birthday-decor.png" alt="Birthday and Anniversary Decoration by Phoolkari Decor Studio" fill style={{ objectFit: 'cover' }} priority />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className="section-label">Our Services</span>
            <h1 className="section-title" style={{ color: 'var(--white)' }}>Birthday & <em>Anniversary</em></h1>
            <div className="gold-divider"><span className="line" /><span className="dot" /><span className="line" /></div>
          </div>
        </div>

        <div className={styles.intro}>
          <p className={styles.introText}>
            Every milestone deserves a spectacular celebration. Whether it's a grand 50th anniversary, a magical 1st birthday, or a lavish sweet sixteen, Phoolkari Decor Studio brings your vision to life with custom-themed luxury decoration.
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
          <h2 className={styles.ctaTitle}>Make Every <em>Moment</em> Count</h2>
          <p className={styles.ctaText}>
            We don't just use standard props. Our studio custom-builds structures, neon signs, and backdrops tailored specifically to the guest of honor, ensuring your celebration is entirely unique and deeply personal.
          </p>
          <a href="/#contact" className="btn btn--gold">Plan Your Celebration</a>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
