import AboutClient from './AboutClient';

export const metadata = {
  title: 'About Us | Phoolkari Decor Studio',
  description: 'Learn about the premier luxury event decoration company in Punjab, founded by Mukesh N Aggarwal.',
  alternates: {
    canonical: 'https://www.phoolkaridecorstudio.in/about',
  }
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Phoolkari Decor Studio',
  description: 'Learn about the premier luxury event decoration company in Punjab, founded by Mukesh N Aggarwal.',
  url: 'https://www.phoolkaridecorstudio.in/about',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Phoolkari Decor Studio',
    url: 'https://www.phoolkaridecorstudio.in',
    image: 'https://www.phoolkaridecorstudio.in/images/logo.png',
    telephone: ['+91-91557-03155', '+91-96990-33155'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Amritsar',
      addressRegion: 'Punjab',
      addressCountry: 'IN',
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutClient />
    </>
  );
}
