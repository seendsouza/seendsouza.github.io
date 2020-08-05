module.exports = {
  siteMetadata: {
    title: `Sean D'Souza`,
    description: `Sean D'Souza's personal website'`,
    author: `Sean D'Souza`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/images\/.*\.svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `seendsouza`,
        short_name: `seen`,
        start_url: `/`,
        background_color: `#e7e6e3`,
        theme_color: `#111111`,
        display: `standalone`,
        icon: `src/images/seen-logo-512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
