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
  metadataBase: new URL('https://www.phoolkaridecorstudio.in'),
  title: 'Phoolkari Decor Studio — Luxury Event Planners & Decoration Services in Amritsar',
  description:
    'Premium luxury event planners and decoration services for weddings, birthdays, corporate events & celebrations at top hotels, resorts & farmhouses in Amritsar, Punjab. Transform your occasion into a masterpiece.',
  keywords: [
    'Wedding Decorators in Amritsar',
    'Luxury Wedding Decor Amritsar',
    'Event Planners Amritsar',
    'Wedding Stage Decoration Punjab',
    'Mandap Decoration Amritsar',
    'Haldi and Mehndi Decor Amritsar',
    'Corporate Event Management Amritsar',
    'Phoolkari Decor Studio'
  ],
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
    url: 'https://www.phoolkaridecorstudio.in',
    siteName: 'Phoolkari Decor Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phoolkari Decor Studio — Luxury Event Decoration',
    description:
      'Where Every Occasion Becomes a Masterpiece. Premium decor services in Amritsar, Punjab.',
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
  verification: {
    google: 'tZFTCyybHBbdm9IRNxAmcyeQBtck03GskN6jAQ4UvqY',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'EventPlanner'],
  name: 'Phoolkari Decor Studio',
  url: 'https://www.phoolkaridecorstudio.in',
  description:
    'Luxury event planning and bespoke decoration services for weddings, corporate galas, and celebrations in Amritsar and across Punjab. Specializing in royal mandaps, exotic floral artistry, and luxury venue transformations.',
  image: 'https://www.phoolkaridecorstudio.in/images/logo.png',
  telephone: ['+91-91557-03155', '+91-96990-33155'],
  email: 'info@phoolkaridecorstudio.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mall Road & Circular Road Area',
    addressLocality: 'Amritsar',
    addressRegion: 'Punjab',
    postalCode: '143001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.6340,
    longitude: 74.8723,
  },
  founder: {
    '@type': 'Person',
    name: 'Mukesh N Aggarwal',
    jobTitle: 'Creative Director & Founder',
  },
  priceRange: '$$$$',
  openingHours: 'Mo-Su 09:00-21:00',
  areaServed: [
    {
      '@type': 'City',
      name: 'Amritsar',
    },
    {
      '@type': 'State',
      name: 'Punjab',
    },
    {
      '@type': 'City',
      name: 'Jalandhar',
    },
    {
      '@type': 'City',
      name: 'Ludhiana',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Luxury Event & Wedding Decoration Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Luxury Wedding Decor & Royal Mandaps',
          url: 'https://www.phoolkaridecorstudio.in/services/wedding-decor',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Corporate Event Management & Galas',
          url: 'https://www.phoolkaridecorstudio.in/services/corporate-events',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Luxury Birthday & Anniversary Decoration',
          url: 'https://www.phoolkaridecorstudio.in/services/birthday-parties',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Festival & Cultural Celebration Decor',
          url: 'https://www.phoolkaridecorstudio.in/services/festival-decor',
        },
      },
    ],
  },
  sameAs: [
    'https://www.instagram.com/phoolkaridecorstudio/',
    'https://www.facebook.com/phoolkaridecorstudio/',
    'https://in.pinterest.com/phoolkaridecorstudio/',
  ],
};

import SmoothScroll from './components/SmoothScroll';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} ${inter.variable} ${greatVibes.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-51HBDGPQR6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-51HBDGPQR6');
          `}
        </Script>
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
