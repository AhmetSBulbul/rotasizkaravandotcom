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
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: `${__dirname}/src/photos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `showroom`,
        path: `${__dirname}/src/showroom`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/backgrounds`,
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
        icon: `src/images/rotasiz-earth-blackless.png`,
      },
    },
    `gatsby-plugin-layout`,
  ],
};
