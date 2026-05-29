import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Image from 'next/image';

export const metadata = {
  title: 'Festival & Cultural Event Decor in Amritsar | Phoolkari',
  description: 'Authentic and luxurious festival decoration services in Punjab. We design stunning setups for Diwali, Lohri, Eid, and cultural celebrations.',
  alternates: {
    canonical: 'https://phoolkaridecorstudio.in/services/festival-decor',
  }
};

const features = [
  { title: 'Diwali & Festive Galas', desc: 'Spectacular lighting arrangements, elaborate rangoli-inspired floral designs, and traditional diyas to illuminate your space.' },
  { title: 'Lohri & Vaisakhi', desc: 'Rustic and vibrant Punjabi themes featuring traditional phulkari drapes, bonfire setups, and authentic folk elements.' },
  { title: 'Religious Gatherings', desc: 'Serene, pure, and elegant floral decorations for spiritual and religious ceremonies that demand respect and beauty.' },
  { title: 'Eid & Cultural Events', desc: 'Rich, ornate decorations blending traditional motifs with modern luxury for multicultural celebrations across Punjab.' },
];

export default function FestivalDecor() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--cream)', paddingTop: '80px' }}>
        {/* Hero */}
        <div style={{ position: 'relative', height: '60vh', minHeight: '450px' }}>
          <Image src="/images/services/festival-decor.png" alt="Festival and Cultural Decoration by Phoolkari Decor Studio" fill style={{ objectFit: 'cover' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px', zIndex: 1 }}>
            <span className="section-label">Our Services</span>
            <h1 className="section-title" style={{ color: 'var(--white)' }}>Festival & <em>Cultural</em></h1>
            <div className="gold-divider"><span className="line" /><span className="dot" /><span className="line" /></div>
          </div>
        </div>

        {/* Intro */}
        <div className="container" style={{ padding: '80px var(--container-pad)', maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.7, textAlign: 'center', marginBottom: '80px' }}>
            Celebrate the rich heritage of Punjab with authentic, luxurious cultural decorations. At Phoolkari Decor Studio, we specialize in blending traditional artistry with modern luxury to create unforgettable atmospheres for festivals and cultural events.
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
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--cream)', marginBottom: '20px' }}>Authentic <em style={{ color: 'var(--gold)' }}>Craftsmanship</em></h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 40px' }}>
              We source local, traditional materials and combine them with premium floral imports to create setups that feel both authentically cultural and undeniably luxurious. Our team deeply respects the cultural significance of your events and designs accordingly.
            </p>
            <a href="/#contact" className="btn btn--gold">Inquire About Festival Decor</a>
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
