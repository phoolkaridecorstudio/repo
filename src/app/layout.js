import { Cormorant_Garamond, Outfit, Inter, Great_Vibes } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-display', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-heading', display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-body', display: 'swap' });
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ['400'], variable: '--font-script', display: 'swap' });

export const viewport = {
  themeColor: '#1A1008',
};

export const metadata = {
  metadataBase: new URL('https://phoolkaridecorstudio.in'),
  title: 'Phoolkari Decor Studio — Luxury Event Decoration Services in Amritsar',
  description:
    'Premium luxury event decoration services for weddings, birthdays, corporate events & celebrations at top hotels, resorts & farmhouses in Amritsar, Punjab. Transform your occasion into a masterpiece.',
  keywords:
    'luxury event decoration, wedding decor Amritsar, event planner Punjab, farmhouse decoration, hotel event decor, phoolkari decor studio, wedding mandap design, theme parties Amritsar',
  authors: [{ name: 'Phoolkari Decor Studio' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Phoolkari Decor Studio — Luxury Event Decoration',
    description:
      'Where Every Occasion Becomes a Masterpiece. Premium decor services for weddings, celebrations & corporate events in Amritsar.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://phoolkaridecorstudio.in',
    siteName: 'Phoolkari Decor Studio',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Phoolkari Decor Studio — Luxury Wedding & Event Decoration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phoolkari Decor Studio — Luxury Event Decoration',
    description:
      'Where Every Occasion Becomes a Masterpiece. Premium decor services in Amritsar, Punjab.',
    images: ['/images/hero-bg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Phoolkari Decor Studio',
  description:
    'Luxury event decoration services for weddings, birthdays, corporate events & more at top hotels, resorts & farmhouses in Amritsar, Punjab.',
  image: 'https://phoolkaridecorstudio.in/images/logo.svg',
  telephone: ['+91-91557-03155', '+91-96990-33155'],
  email: 'info@phoolkaridecorstudio.in',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Amritsar',
    addressRegion: 'Punjab',
    addressCountry: 'IN',
  },
  priceRange: '$$$$',
  openingHours: 'Mo-Su 09:00-21:00',
  areaServed: {
    '@type': 'City',
    name: 'Amritsar',
  },
  sameAs: [
    'https://www.instagram.com/phoolkaridecorstudio/',
    'https://www.facebook.com/phoolkaridecorstudio/'
  ]
};

import SmoothScroll from './components/SmoothScroll';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} ${inter.variable} ${greatVibes.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
