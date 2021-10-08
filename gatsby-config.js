module.exports = {
  siteMetadata: {
    title: `Rotasız Karavan`,
    description: `Kişiye özel karavan imalat ve tadilatı.`,
    author: `@AhmetSBulbul`,
    siteUrl: `https://rotasizkaravandotcom.vercel.app/`,
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
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [
            `**/src/images/brand/icon.png`,
          ],
        },
      },
    },
    `gatsby-plugin-layout`,
    `gatsby-transformer-remark`,
  ],
};
