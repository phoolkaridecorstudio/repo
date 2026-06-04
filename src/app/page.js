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
    canonical: 'https://phoolkaridecorstudio.in',
  },
};

export default function Home() {
  return (
    <>
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
