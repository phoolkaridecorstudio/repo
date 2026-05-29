import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Image from 'next/image';

export const metadata = {
  title: 'Corporate Event Decorators in Amritsar | Phoolkari',
  description: 'Professional corporate event decoration and planning in Punjab. We design elegant conference setups, product launches, galas, and award ceremonies.',
  alternates: {
    canonical: 'https://phoolkaridecorstudio.in/services/corporate-events',
  }
};

const features = [
  { title: 'Award Ceremonies & Galas', desc: 'Red carpet entrances, grand stage designs, and luxury table centerpieces tailored to your corporate identity.' },
  { title: 'Product Launches', desc: 'Innovative, modern stage setups with intelligent lighting to make your new product shine in the spotlight.' },
  { title: 'Conferences & Seminars', desc: 'Clean, professional stage backdrops and branding integration that maintains corporate elegance throughout.' },
  { title: 'Festive Office Decor', desc: 'Premium floral and lighting installations for your office space during Diwali, Christmas, and New Year.' },
];

export default function CorporateEvents() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--cream)', paddingTop: '80px' }}>
        {/* Hero */}
        <div style={{ position: 'relative', height: '60vh', minHeight: '450px' }}>
          <Image src="/images/services/corporate-events.png" alt="Corporate Event Decoration by Phoolkari Decor Studio" fill style={{ objectFit: 'cover' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px', zIndex: 1 }}>
            <span className="section-label">Our Services</span>
            <h1 className="section-title" style={{ color: 'var(--white)' }}>Corporate <em>Events</em></h1>
            <div className="gold-divider"><span className="line" /><span className="dot" /><span className="line" /></div>
          </div>
        </div>

        {/* Intro */}
        <div className="container" style={{ padding: '80px var(--container-pad)', maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.7, textAlign: 'center', marginBottom: '80px' }}>
            Your corporate event is a direct reflection of your brand's prestige. At Phoolkari Decor Studio, we provide sophisticated, high-end decoration services for corporate clients across Punjab. From annual galas to professional conferences, we deliver environments that inspire.
          </p>

          {/* Feature Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '28px', marginBottom: '80px' }}>
            {features.map((f, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: '16px', padding: '36px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', borderTop: '3px solid var(--gold)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '12px', color: 'var(--black)' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div style={{ background: 'var(--black)', borderRadius: '20px', padding: '60px', textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--cream)', marginBottom: '20px' }}>Why Choose <em style={{ color: 'var(--gold)' }}>Us?</em></h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 40px' }}>
              Corporate events require strict adherence to timelines and a deep understanding of brand aesthetics. Our highly trained team executes flawless setups with minimal disruption, working closely with event planners and hotel staff to ensure a seamless experience.
            </p>
            <a href="/#contact" className="btn btn--gold">Inquire About Corporate Events</a>
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
