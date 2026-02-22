import type { APIRoute } from 'astro';

const siteUrl = 'https://mariadelavera.com';

const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/perdida-de-peso', priority: '0.9', changefreq: 'monthly' },
  { url: '/nutricion-deportiva', priority: '0.9', changefreq: 'monthly' },
  { url: '/salud-digestiva', priority: '0.9', changefreq: 'monthly' },
  { url: '/salud-hormonal', priority: '0.9', changefreq: 'monthly' },
  { url: '/nutricion-clinica', priority: '0.9', changefreq: 'monthly' },
  { url: '/nutricionista-online', priority: '0.9', changefreq: 'monthly' },
  { url: '/nutricionista-boadilla-centro', priority: '0.8', changefreq: 'monthly' },
  { url: '/nutricionista-prado-del-espino', priority: '0.8', changefreq: 'monthly' },
  { url: '/nutricionista-olivar-de-boadilla', priority: '0.8', changefreq: 'monthly' },
  { url: '/nutricionista-bonanza-boadilla', priority: '0.8', changefreq: 'monthly' },
  { url: '/nutricionista-las-lomas-boadilla', priority: '0.8', changefreq: 'monthly' },
  { url: '/nutricionista-valdecabanas-boadilla', priority: '0.8', changefreq: 'monthly' },
  { url: '/nutricionista-sector-b-boadilla', priority: '0.8', changefreq: 'monthly' },
  { url: '/aviso-legal', priority: '0.3', changefreq: 'yearly' },
  { url: '/politica-de-privacidad', priority: '0.3', changefreq: 'yearly' },
  { url: '/politica-de-cookies', priority: '0.3', changefreq: 'yearly' },
];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
