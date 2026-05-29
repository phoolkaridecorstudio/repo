import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'Our Services | Phoolkari Decor Studio',
  description: 'Explore our luxury event decoration services in Amritsar. From majestic wedding mandaps to sophisticated corporate events and themed birthday parties.',
  alternates: {
    canonical: 'https://phoolkaridecorstudio.in/services',
  }
};

export default function ServicesPage() {
  return <ServicesClient />;
}
