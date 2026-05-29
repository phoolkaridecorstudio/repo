import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Image from 'next/image';

export const metadata = {
  title: 'Luxury Wedding Decorators in Amritsar | Phoolkari',
  description: 'Top-rated luxury wedding decoration services in Punjab. We specialize in royal mandap designs, floral cascades, and premium stage setups at top hotels and farmhouses.',
  alternates: {
    canonical: 'https://phoolkaridecorstudio.in/services/wedding-decor',
  }
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
      <main style={{ background: 'var(--cream)', paddingTop: '80px' }}>
        {/* Hero */}
        <div style={{ position: 'relative', height: '60vh', minHeight: '450px' }}>
          <Image src="/images/services/wedding-decor.png" alt="Luxury Wedding Decor by Phoolkari Decor Studio" fill style={{ objectFit: 'cover' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px', zIndex: 1 }}>
            <span className="section-label">Our Services</span>
            <h1 className="section-title" style={{ color: 'var(--white)' }}>Luxury Wedding <em>Decor</em></h1>
            <div className="gold-divider"><span className="line" /><span className="dot" /><span className="line" /></div>
          </div>
        </div>

        {/* Intro */}
        <div className="container" style={{ padding: '80px var(--container-pad)', maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.7, textAlign: 'center', marginBottom: '80px' }}>
            Your wedding day is one of the most significant moments of your life. At Phoolkari Decor Studio, we transform venues into breathtaking experiences that reflect your unique love story. As Amritsar's premier wedding decorators, we specialize in high-end, bespoke floral design and structural architecture.
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

          {/* Venues */}
          <div style={{ background: 'var(--black)', borderRadius: '20px', padding: '60px', textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--cream)', marginBottom: '20px' }}>Venues We <em style={{ color: 'var(--gold)' }}>Transform</em></h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 40px' }}>
              We have extensive experience working with Punjab's top luxury venues, including Radisson Blu, Taj Swarna, Hyatt Amritsar, and various premium private farmhouses. Whether it is an intimate garden wedding or a grand ballroom reception, we know how to optimize the space.
            </p>
            <a href="/#contact" className="btn btn--gold">Book Your Wedding Consultation</a>
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
