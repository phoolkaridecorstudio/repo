import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import Image from 'next/image';

export const metadata = {
  title: 'Luxury Birthday & Anniversary Decor in Amritsar | Phoolkari',
  description: 'Premium birthday and anniversary decoration services. We specialize in custom themes, luxury balloon artistry, and milestone celebrations in Punjab.',
  alternates: {
    canonical: 'https://phoolkaridecorstudio.in/services/birthday-parties',
  }
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
      <main style={{ background: 'var(--cream)', paddingTop: '80px' }}>
        {/* Hero */}
        <div style={{ position: 'relative', height: '60vh', minHeight: '450px' }}>
          <Image src="/images/services/birthday-decor.png" alt="Birthday and Anniversary Decoration by Phoolkari Decor Studio" fill style={{ objectFit: 'cover' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px', zIndex: 1 }}>
            <span className="section-label">Our Services</span>
            <h1 className="section-title" style={{ color: 'var(--white)' }}>Birthday & <em>Anniversary</em></h1>
            <div className="gold-divider"><span className="line" /><span className="dot" /><span className="line" /></div>
          </div>
        </div>

        {/* Intro */}
        <div className="container" style={{ padding: '80px var(--container-pad)', maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.7, textAlign: 'center', marginBottom: '80px' }}>
            Every milestone deserves a spectacular celebration. Whether it's a grand 50th anniversary, a magical 1st birthday, or a lavish sweet sixteen, Phoolkari Decor Studio brings your vision to life with custom-themed luxury decoration.
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
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--cream)', marginBottom: '20px' }}>Make Every <em style={{ color: 'var(--gold)' }}>Moment</em> Count</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 40px' }}>
              We don't just use standard props. Our studio custom-builds structures, neon signs, and backdrops tailored specifically to the guest of honor, ensuring your celebration is entirely unique and deeply personal.
            </p>
            <a href="/#contact" className="btn btn--gold">Plan Your Celebration</a>
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
