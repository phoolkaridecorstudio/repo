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
    'Wedding Decor Services in Amritsar, Wedding Decorators in Amritsar, Best Wedding Decorators in Amritsar, Event Decor Company in Amritsar, Luxury Wedding Decor in Amritsar, Destination Wedding Decor in Amritsar, Hotel Wedding Decoration in Amritsar, Engagement Decoration in Amritsar, Haldi Ceremony Decoration in Amritsar, Mehndi Decoration Services in Amritsar, Sangeet Stage Decoration in Amritsar, Reception Decoration in Amritsar, Floral Wedding Decoration in Amritsar, Birthday Party Decoration in Amritsar, Corporate Event Decoration in Amritsar, Wedding Stage Decoration Amritsar, Resort Wedding Decor Amritsar, Luxury Event Decor Punjab, Theme Wedding Decoration Amritsar, Wedding Mandap Decoration Amritsar, Royal Wedding Decor Amritsar, Wedding Planner and Decorator Amritsar, Farmhouse Wedding Decoration Amritsar, Floral Decor Services Punjab, Premium Wedding Decor Company Punjab, Wedding Decorators Amritsar, Best Wedding Decorators Amritsar, Wedding Decor Services Amritsar, Luxury Wedding Decor Amritsar, Event Decor Company Amritsar, Hotel Wedding Decoration Amritsar, Destination Wedding Decor Punjab, Wedding Decorators Punjab, Best Wedding Decorators Punjab, Luxury Wedding Decor Punjab, Premium Wedding Decor Punjab, Wedding Decoration Services Punjab, Event Decorators Punjab, Event Decoration Company Punjab, Hotel Wedding Decor Punjab, Resort Wedding Decor Punjab, Royal Wedding Decoration Punjab, Floral Decoration Services Punjab, Wedding Stage Decoration Punjab, Wedding Mandap Decoration Punjab, Theme Wedding Decoration Punjab, Engagement Decoration Punjab, Haldi Decoration Punjab, Mehndi Decoration Punjab, Sangeet Decoration Punjab, Reception Decoration Punjab, Corporate Event Decor Punjab, Birthday Party Decoration Punjab, Anniversary Decoration Punjab, Baby Shower Decoration Punjab, Ring Ceremony Decoration Punjab, Luxury Wedding Decorators Punjab, High-End Wedding Decor Punjab, Luxury Floral Decor Punjab, Royal Palace Wedding Decor Punjab, Five Star Hotel Wedding Decor Punjab, Premium Event Styling Punjab, Designer Wedding Decor Punjab, Bespoke Wedding Decor Punjab, Luxury Destination Wedding Decor Punjab, Exclusive Wedding Decor Punjab, Wedding Decor for Hotels Punjab, Resort Wedding Decoration Punjab, Hotel Ballroom Decoration Punjab, Banquet Hall Decoration Punjab, Wedding Venue Decoration Punjab, Luxury Resort Wedding Decor Punjab, Hotel Event Decoration Punjab, Corporate Event Decor Punjab, Conference Decoration Punjab, Product Launch Event Decor Punjab, Award Ceremony Decoration Punjab, Exhibition Decoration Punjab, Business Event Decor Punjab, Corporate Stage Decoration Punjab, Ludhiana, Wedding Decorators Ludhiana, Luxury Wedding Decor Ludhiana, Event Decor Company Ludhiana, Jalandhar, Wedding Decorators Jalandhar, Luxury Wedding Decor Jalandhar, Event Decor Company Jalandhar, Mohali, Wedding Decorators Mohali, Luxury Wedding Decor Mohali, Event Decor Company Mohali, Patiala, Wedding Decorators Patiala, Luxury Wedding Decor Patiala, Event Decor Company Patiala, Bathinda, Wedding Decorators Bathinda, Luxury Wedding Decor Bathinda, Event Decor Company Bathinda, Pathankot, Wedding Decorators Pathankot, Event Decor Company Pathankot, Hoshiarpur, Wedding Decorators Hoshiarpur, Event Decor Company Hoshiarpur, Moga, Wedding Decorators Moga, Event Decor Company Moga, Kapurthala, Wedding Decorators Kapurthala, Event Decor Company Kapurthala, Wedding Decor Near Me, Event Decorators Near Me, Wedding Stage Decor Near Me, Luxury Wedding Decorators Near Me, Best Wedding Decor Company Near Me, Wedding Decoration Packages Punjab, Affordable Wedding Decor Punjab, Wedding Decor Cost Punjab, Wedding Decoration Price Punjab, Wedding Decor Services Near Me, Tent House Punjab, Best Tent House Punjab, Luxury Tent House Punjab, Wedding Tent House Punjab, Tent Rental Punjab, Event Tent Rental Punjab, Premium Tent House Punjab, Tent Decoration Punjab, Wedding Tent Decoration Punjab, Shamiana Rental Punjab, Tent and Catering Services Punjab, Outdoor Event Tent Punjab, Wedding Canopy Rental Punjab, Event Infrastructure Rental Punjab, Tent Services Punjab, Wedding Decoration Punjab, Wedding Decorators Punjab, Luxury Wedding Decoration Punjab, Floral Wedding Decoration Punjab, Wedding Venue Decoration Punjab, Wedding Stage Decoration Punjab, Wedding Entrance Decoration Punjab, Wedding Backdrop Decoration Punjab, Wedding Theme Decoration Punjab, Wedding Mandap Decoration Punjab, Reception Decoration Punjab, Engagement Decoration Punjab, Haldi Decoration Punjab, Mehndi Decoration Punjab, Sangeet Decoration Punjab, Venue Decoration Punjab, Banquet Hall Decoration Punjab, Hotel Decoration Punjab, Resort Decoration Punjab, Marriage Palace Decoration Punjab, Wedding Venue Styling Punjab, Luxury Venue Decor Punjab, Event Venue Decoration Punjab, Farmhouse Decoration Punjab, Outdoor Wedding Decoration Punjab, Marriage Palace Decor Punjab, Marriage Palace Decoration Services, Wedding Palace Decor Punjab, Banquet Decoration Punjab, Marriage Hall Decoration Punjab, Luxury Marriage Palace Decor, Wedding Venue Decor Punjab, Corporate Event Management Punjab, Corporate Event Decor Punjab, Conference Setup Punjab, Exhibition Booth Design Punjab, Product Launch Event Punjab, Annual Day Event Planner Punjab, Corporate Stage Decoration Punjab, Business Event Organizer Punjab, Corporate Event Services Punjab, Wedding Planner Near Me, Event Planner Near Me, Wedding Decorator Near Me, Tent House Near Me, Event Management Company Near Me, Wedding Organizer Near Me, Wedding Decoration Near Me, Luxury Wedding Planner Near Me, Tent Rental Near Me, Venue Decorator Near Me',
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
  ],
  keywords: 'Wedding Decor Services in Amritsar, Wedding Decorators in Amritsar, Best Wedding Decorators in Amritsar, Event Decor Company in Amritsar, Luxury Wedding Decor in Amritsar, Destination Wedding Decor in Amritsar, Hotel Wedding Decoration in Amritsar, Engagement Decoration in Amritsar, Haldi Ceremony Decoration in Amritsar, Mehndi Decoration Services in Amritsar, Sangeet Stage Decoration in Amritsar, Reception Decoration in Amritsar, Floral Wedding Decoration in Amritsar, Birthday Party Decoration in Amritsar, Corporate Event Decoration in Amritsar, Wedding Stage Decoration Amritsar, Resort Wedding Decor Amritsar, Luxury Event Decor Punjab, Theme Wedding Decoration Amritsar, Wedding Mandap Decoration Amritsar, Royal Wedding Decor Amritsar, Wedding Planner and Decorator Amritsar, Farmhouse Wedding Decoration Amritsar, Floral Decor Services Punjab, Premium Wedding Decor Company Punjab, Wedding Decorators Amritsar, Best Wedding Decorators Amritsar, Wedding Decor Services Amritsar, Luxury Wedding Decor Amritsar, Event Decor Company Amritsar, Hotel Wedding Decoration Amritsar, Destination Wedding Decor Punjab, Wedding Decorators Punjab, Best Wedding Decorators Punjab, Luxury Wedding Decor Punjab, Premium Wedding Decor Punjab, Wedding Decoration Services Punjab, Event Decorators Punjab, Event Decoration Company Punjab, Hotel Wedding Decor Punjab, Resort Wedding Decor Punjab, Royal Wedding Decoration Punjab, Floral Decoration Services Punjab, Wedding Stage Decoration Punjab, Wedding Mandap Decoration Punjab, Theme Wedding Decoration Punjab, Engagement Decoration Punjab, Haldi Decoration Punjab, Mehndi Decoration Punjab, Sangeet Decoration Punjab, Reception Decoration Punjab, Corporate Event Decor Punjab, Birthday Party Decoration Punjab, Anniversary Decoration Punjab, Baby Shower Decoration Punjab, Ring Ceremony Decoration Punjab, Luxury Wedding Decorators Punjab, High-End Wedding Decor Punjab, Luxury Floral Decor Punjab, Royal Palace Wedding Decor Punjab, Five Star Hotel Wedding Decor Punjab, Premium Event Styling Punjab, Designer Wedding Decor Punjab, Bespoke Wedding Decor Punjab, Luxury Destination Wedding Decor Punjab, Exclusive Wedding Decor Punjab, Wedding Decor for Hotels Punjab, Resort Wedding Decoration Punjab, Hotel Ballroom Decoration Punjab, Banquet Hall Decoration Punjab, Wedding Venue Decoration Punjab, Luxury Resort Wedding Decor Punjab, Hotel Event Decoration Punjab, Corporate Event Decor Punjab, Conference Decoration Punjab, Product Launch Event Decor Punjab, Award Ceremony Decoration Punjab, Exhibition Decoration Punjab, Business Event Decor Punjab, Corporate Stage Decoration Punjab, Ludhiana, Wedding Decorators Ludhiana, Luxury Wedding Decor Ludhiana, Event Decor Company Ludhiana, Jalandhar, Wedding Decorators Jalandhar, Luxury Wedding Decor Jalandhar, Event Decor Company Jalandhar, Mohali, Wedding Decorators Mohali, Luxury Wedding Decor Mohali, Event Decor Company Mohali, Patiala, Wedding Decorators Patiala, Luxury Wedding Decor Patiala, Event Decor Company Patiala, Bathinda, Wedding Decorators Bathinda, Luxury Wedding Decor Bathinda, Event Decor Company Bathinda, Pathankot, Wedding Decorators Pathankot, Event Decor Company Pathankot, Hoshiarpur, Wedding Decorators Hoshiarpur, Event Decor Company Hoshiarpur, Moga, Wedding Decorators Moga, Event Decor Company Moga, Kapurthala, Wedding Decorators Kapurthala, Event Decor Company Kapurthala, Wedding Decor Near Me, Event Decorators Near Me, Wedding Stage Decor Near Me, Luxury Wedding Decorators Near Me, Best Wedding Decor Company Near Me, Wedding Decoration Packages Punjab, Affordable Wedding Decor Punjab, Wedding Decor Cost Punjab, Wedding Decoration Price Punjab, Wedding Decor Services Near Me, Tent House Punjab, Best Tent House Punjab, Luxury Tent House Punjab, Wedding Tent House Punjab, Tent Rental Punjab, Event Tent Rental Punjab, Premium Tent House Punjab, Tent Decoration Punjab, Wedding Tent Decoration Punjab, Shamiana Rental Punjab, Tent and Catering Services Punjab, Outdoor Event Tent Punjab, Wedding Canopy Rental Punjab, Event Infrastructure Rental Punjab, Tent Services Punjab, Wedding Decoration Punjab, Wedding Decorators Punjab, Luxury Wedding Decoration Punjab, Floral Wedding Decoration Punjab, Wedding Venue Decoration Punjab, Wedding Stage Decoration Punjab, Wedding Entrance Decoration Punjab, Wedding Backdrop Decoration Punjab, Wedding Theme Decoration Punjab, Wedding Mandap Decoration Punjab, Reception Decoration Punjab, Engagement Decoration Punjab, Haldi Decoration Punjab, Mehndi Decoration Punjab, Sangeet Decoration Punjab, Venue Decoration Punjab, Banquet Hall Decoration Punjab, Hotel Decoration Punjab, Resort Decoration Punjab, Marriage Palace Decoration Punjab, Wedding Venue Styling Punjab, Luxury Venue Decor Punjab, Event Venue Decoration Punjab, Farmhouse Decoration Punjab, Outdoor Wedding Decoration Punjab, Marriage Palace Decor Punjab, Marriage Palace Decoration Services, Wedding Palace Decor Punjab, Banquet Decoration Punjab, Marriage Hall Decoration Punjab, Luxury Marriage Palace Decor, Wedding Venue Decor Punjab, Corporate Event Management Punjab, Corporate Event Decor Punjab, Conference Setup Punjab, Exhibition Booth Design Punjab, Product Launch Event Punjab, Annual Day Event Planner Punjab, Corporate Stage Decoration Punjab, Business Event Organizer Punjab, Corporate Event Services Punjab, Wedding Planner Near Me, Event Planner Near Me, Wedding Decorator Near Me, Tent House Near Me, Event Management Company Near Me, Wedding Organizer Near Me, Wedding Decoration Near Me, Luxury Wedding Planner Near Me, Tent Rental Near Me, Venue Decorator Near Me'
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
