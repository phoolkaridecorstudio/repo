import ThemesClient from './ThemesClient';

export const metadata = {
  title: 'Our Signature Themes | Phoolkari Decor Studio',
  description: 'Explore our breathtaking signature decor themes, from Royal Rajasthani and Enchanted Garden to Modern Minimalist sets in Punjab.',
  alternates: {
    canonical: 'https://www.phoolkaridecorstudio.in/themes',
  }
};

const themesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Signature Event Decor Themes | Phoolkari Decor Studio',
  description:
    'Explore our breathtaking signature decor themes, from Royal Rajasthani and Enchanted Garden to Modern Minimalist sets in Punjab.',
  url: 'https://www.phoolkaridecorstudio.in/themes',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Phoolkari Decor Studio',
    url: 'https://www.phoolkaridecorstudio.in',
  },
};

export default function ThemesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(themesSchema) }}
      />
      <ThemesClient />
    </>
  );
}
