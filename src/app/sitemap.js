import { blogsData } from './data/blogs';

export default function sitemap() {
  const baseUrl = 'https://phoolkaridecorstudio.in';

  const staticRoutes = [
    '',
    '/about',
    '/themes',
    '/gallery',
    '/terms',
    '/privacy',
    '/services/wedding-decor',
    '/services/corporate-events',
    '/services/birthday-parties',
    '/services/festival-decor',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('/services') ? 0.9 : 0.8,
  }));

  const blogRoutes = blogsData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
