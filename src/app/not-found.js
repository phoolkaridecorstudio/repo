import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Page Not Found | Phoolkari Decor Studio',
  description: 'The requested page could not be found. Return to Phoolkari Decor Studio homepage.',
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'calc(var(--nav-height, 80px) + 60px) 20px 80px',
          background: 'linear-gradient(180deg, #1A1008 0%, #0F0A05 100%)',
          color: '#fff',
        }}
      >
        <span
          className="section-label"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.8rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--gold-light)',
            marginBottom: '16px',
            display: 'block',
          }}
        >
          404 &bull; Luxury Lost &amp; Found
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: '#fff',
            marginBottom: '16px',
          }}
        >
          Page Not <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Found</em>
        </h1>

        <div className="gold-divider" style={{ margin: '0 auto 24px' }}>
          <span className="line" />
          <span className="dot" />
          <span className="line" />
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '520px',
            margin: '0 auto 40px',
            lineHeight: 1.8,
          }}
        >
          Even the most enchanting paths occasionally take an unexpected turn. The celebration or page you are looking for has moved or does not exist.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
          }}
        >
          <Link href="/" className="btn btn--gold">
            Return to Homepage
          </Link>
          <Link href="/gallery" className="btn btn--outline-light">
            Explore Portfolio
          </Link>
          <Link href="/#contact" className="btn btn--outline-light">
            Contact Studio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
