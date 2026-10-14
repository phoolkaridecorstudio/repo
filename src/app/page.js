import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FounderNote from './components/FounderNote';

const Services = dynamic(() => import('./components/Services'));
const Themes = dynamic(() => import('./components/Themes'));
const Portfolio = dynamic(() => import('./components/Portfolio'));
const Process = dynamic(() => import('./components/Process'));
const Testimonials = dynamic(() => import('./components/Testimonials'));
const FAQ = dynamic(() => import('./components/faq/FAQ'));
const Contact = dynamic(() => import('./components/Contact'));
const Footer = dynamic(() => import('./components/Footer'));
const WhatsAppFloat = dynamic(() => import('./components/WhatsAppFloat'));
const BackToTop = dynamic(() => import('./components/BackToTop'));
const Preloader = dynamic(() => import('./components/Preloader'));
const CustomCursor = dynamic(() => import('./components/CustomCursor'));

const VenuePartners = dynamic(() => import('./components/VenuePartners'));

export const metadata = {
  title: 'Phoolkari Decor Studio — Top Luxury Event Planners & Decorators in Amritsar',
  description: 'Top-rated event planners and wedding decoration services in Amritsar, Punjab. Experience our majestic theme parties, premium floral mandaps, and bespoke corporate events.',
  alternates: {
    canonical: 'https://www.phoolkaridecorstudio.in',
  },
};

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who is the best event planner and decor company in Amritsar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Phoolkari Decor Studio is widely recognized as the premier luxury event planner and best decor company in Amritsar. We specialize in transforming venues into breathtaking experiences for weddings, corporate events, and grand celebrations across Punjab.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide decor services outside of Amritsar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we proudly serve clients across Punjab including Jalandhar, Ludhiana, Chandigarh, and handle destination weddings across northern India.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far in advance should we book your services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For large scale weddings, we recommend booking at least 3-6 months in advance to secure your dates and allow ample time for custom fabrication and design planning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer custom themes or only pre-designed packages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Everything we do is bespoke. While we have signature themes, our Creative Director works directly with you to craft a 100% unique design tailored to your vision and venue.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your starting price for wedding decor in Punjab?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our luxury wedding decor services are fully customized based on venue size, floral choices, and structural requirements. Mandap and stage setups typically range from ₹1.5 Lakhs to ₹6 Lakhs, with grand 5-star ballroom and German hanger productions customized from ₹5 Lakhs onwards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which luxury hotels and venues in Amritsar do you decorate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have extensive on-site experience decorating premier venues in Amritsar, including Radisson Blu Hotel (Grand Ballroom), Taj Swarna (Trinity Hall), Hyatt Regency, Welcomhotel by ITC, and exclusive private farmhouses along Airport Road and GT Road Bypass.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does your Haldi and Mehndi decoration service include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our Haldi and Mehndi setups feature fresh marigold (genda phool) cascades, brass urulis with floating lotuses, traditional Punjabi phulkari canopies, floral jhulas (swings), and dedicated flower shower zones.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <CustomCursor />
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <FounderNote />
        <About />
        <Services />
        <Themes />
        <VenuePartners />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />

    </>
  );
}
