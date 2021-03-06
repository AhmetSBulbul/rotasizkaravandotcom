module.exports = {
  siteMetadata: {
    title: `Karavan İmalatı, Danışmanlığı ve Tamiri`,
    description: `İstek ve ihtiyaçlarınız doğrultusunda kişiye özel karavanlar üretiyoruz. Ücretsiz Karavan Danışmanlığı hizmetimiz ile merak ettiğiniz soruları bizlere sorabilirsiniz.`,
    author: `@rotasizkaravan`,
    siteUrl: `https://www.rotasizkaravan.com`,
    keywords: [`Karavan`, `Motokaravan`],
    image: "/images/meta-image.png",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rotasız Karavan`,
        short_name: `Rotasız Karavan`,
        start_url: `/`,
        background_color: `#276e68`,
        theme_color: `#e97e2e`,
        description: `Karavan üretimi, imalatı ve planlamla`,
        display: `standalone`,
        lang: `tr`,
        icon: `src/images/brand/fav-icon.png`,
      },
    },

    `gatsby-plugin-offline`,
    `gatsby-plugin-layout`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,

    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-M0SHFQF4RE"],
      },
    },
  ],
};
