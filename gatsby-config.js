module.exports = {
  siteMetadata: {
    title: `Rotasız Karavan`,
    description: `Kişiye özel karavan imalat ve tadilatı.`,
    siteUrl: `https://www.rotasizkaravan.com`,
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
        start_url: `/`,
        lang: `tr`,
        icon: `src/images/brand/icon.png`,
      },
    },

    `gatsby-plugin-offline`,
    `gatsby-plugin-layout`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-robots-txt`,
  ],
};
