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
  title: 'Wedding Decorators in Amritsar — Phoolkari Decor Studio | Luxury Event & Wedding Decor',
  description:
    'Top luxury wedding decorators and event planners in Amritsar, Punjab. Royal mandap decoration, wedding stage decor, Haldi/Mehndi setups & floral artistry at top resorts & farmhouses. Call +91 91557-03155.',
  keywords: [
    'Wedding Decorators in Amritsar',
    'Wedding Decor Amritsar',
    'Luxury Wedding Decor Amritsar',
    'Event Planners Amritsar',
    'Wedding Stage Decoration Punjab',
    'Mandap Decoration Amritsar',
    'Haldi and Mehndi Decor Amritsar',
    'Best Wedding Planners in Amritsar',
    'Corporate Event Management Amritsar',
    'Phoolkari Decor Studio'
  ],
  authors: [{ name: 'Phoolkari Decor Studio' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Wedding Decorators in Amritsar — Phoolkari Decor Studio',
    description:
      'Premier luxury wedding decorators & event planners in Amritsar, Punjab. Royal mandap decoration, grand wedding stages & floral themes.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.phoolkaridecorstudio.in',
    siteName: 'Phoolkari Decor Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Decorators in Amritsar — Phoolkari Decor Studio',
    description:
      'Premier luxury wedding decorators & event planners in Amritsar, Punjab. Royal mandaps, wedding stages & floral decor.',
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
  alternateName: 'Phoolkari Decor Studio - Luxury Wedding Planner in Amritsar | Wedding Decorator | Destination Wedding Planner',
  url: 'https://www.phoolkaridecorstudio.in',
  description:
    'Luxury event planning and bespoke wedding decoration services in Amritsar and across Punjab. Specializing in royal mandaps, exotic floral artistry, wedding stages, and luxury venue transformations at top hotels, resorts, and farmhouses.',
  image: 'https://www.phoolkaridecorstudio.in/images/logo.png',
  telephone: ['+91-91557-03155', '+91-96990-33155'],
  email: 'info@phoolkaridecorstudio.in',
  hasMap: 'https://share.google/h12ps5eynG7lKzTKg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ashiana Estate, 1034, Fateh Garh Churian Rd, Murad Pura, Naushehra',
    addressLocality: 'Amritsar',
    addressRegion: 'Punjab',
    postalCode: '143008',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.6770,
    longitude: 74.8709,
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
    'https://share.google/h12ps5eynG7lKzTKg',
    'https://www.google.com/search?kgmid=/g/11zc4qfjly',
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
