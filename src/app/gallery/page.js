import GalleryClient from './GalleryClient';

export const metadata = {
  title: 'Our Gallery & Portfolio | Phoolkari Decor Studio',
  description: 'Browse our extensive gallery of luxury weddings, corporate galas, and themed birthday celebrations across Amritsar and Punjab.',
  alternates: {
    canonical: 'https://www.phoolkaridecorstudio.in/gallery',
  }
};

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Our Gallery & Portfolio | Phoolkari Decor Studio',
  description:
    'Browse our extensive gallery of luxury weddings, corporate galas, and themed birthday celebrations across Amritsar and Punjab.',
  url: 'https://www.phoolkaridecorstudio.in/gallery',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Phoolkari Decor Studio',
    url: 'https://www.phoolkaridecorstudio.in',
  },
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <GalleryClient />
    </>
  );
}
