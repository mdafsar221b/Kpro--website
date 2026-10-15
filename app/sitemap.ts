import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kpro.co.in';

  const routes = [
    '',
    '/solutions',
    '/capabilities',
    '/products',
    '/about',
    '/careers',
    '/training',
    '/training/corporate',
    '/training/college',
    '/case-studies/swargaseema',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
