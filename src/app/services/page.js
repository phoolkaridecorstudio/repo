import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'Our Services | Phoolkari Decor Studio',
  description: 'Explore our luxury event decoration services in Amritsar. From majestic wedding mandaps to sophisticated corporate events and themed birthday parties.',
  alternates: {
    canonical: 'https://www.phoolkaridecorstudio.in/services',
  }
};

const servicesHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Luxury Event Decoration Services | Phoolkari Decor Studio',
  description:
    'Explore our luxury event decoration services in Amritsar. From majestic wedding mandaps to sophisticated corporate events and themed birthday parties.',
  url: 'https://www.phoolkaridecorstudio.in/services',
  hasPart: [
    {
      '@type': 'Service',
      name: 'Luxury Wedding Decor',
      url: 'https://www.phoolkaridecorstudio.in/services/wedding-decor',
    },
    {
      '@type': 'Service',
      name: 'Corporate Events Decor',
      url: 'https://www.phoolkaridecorstudio.in/services/corporate-events',
    },
    {
      '@type': 'Service',
      name: 'Birthday & Anniversary Decor',
      url: 'https://www.phoolkaridecorstudio.in/services/birthday-parties',
    },
    {
      '@type': 'Service',
      name: 'Festival & Cultural Decor',
      url: 'https://www.phoolkaridecorstudio.in/services/festival-decor',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.phoolkaridecorstudio.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.phoolkaridecorstudio.in/services' },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesHubSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesClient />
    </>
  );
}
