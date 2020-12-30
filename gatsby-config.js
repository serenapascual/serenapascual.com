module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `serena pascual`,
        short_name: `sp`,
        start_url: `/`,
        background_color: `#fffdfb`,
        theme_color: `#358182`,
        display: `standalone`,
        icon: `static/icon.png`,
        icons: [
          {
            src: `/static/favicon_16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon_32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
