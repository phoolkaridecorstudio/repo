import GalleryClient from './GalleryClient';

export const metadata = {
  title: 'Our Gallery & Portfolio | Phoolkari Decor Studio',
  description: 'Browse our extensive gallery of luxury weddings, corporate galas, and themed birthday celebrations across Amritsar and Punjab.',
  alternates: {
    canonical: 'https://phoolkaridecorstudio.in/gallery',
  }
};

export default function GalleryPage() {
  return <GalleryClient />;
}
