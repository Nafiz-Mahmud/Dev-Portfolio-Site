/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nafizdev.appwrite.network/",
  generateRobotsTxt: true,
  sitemapSize: 5000,

  changefreq: "weekly",
  priority: 0.7,

  exclude: ["/admin/*", "/private/*"],

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
