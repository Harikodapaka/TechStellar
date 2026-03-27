module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://techstellarconsulting.ca',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  additionalPaths: async () => [
    { loc: '/services', changefreq: 'weekly', priority: 0.8 },
    { loc: '/careers', changefreq: 'weekly', priority: 0.8 },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'black-listed-bot',
        disallow: ['/sitemap.rss', '/rss.xml'],
      },
    ],
  },
};
