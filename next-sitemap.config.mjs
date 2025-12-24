/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://dev-portfolio-site-five.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,

  changefreq: "weekly",
  priority: 0.7,

  exclude: ["/admin/*", "/private/*"],

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
