require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: ``, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layouts/Layout.jsx`),
      },
    },
  ],
};
