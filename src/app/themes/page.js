import ThemesClient from './ThemesClient';

export const metadata = {
  title: 'Our Signature Themes | Phoolkari Decor Studio',
  description: 'Explore our breathtaking signature decor themes, from Royal Rajasthani and Enchanted Garden to Modern Minimalist sets in Punjab.',
  alternates: {
    canonical: 'https://phoolkaridecorstudio.in/themes',
  }
};

export default function ThemesPage() {
  return <ThemesClient />;
}
