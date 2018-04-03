module.exports = {
  siteMetadata: {
    title: 'Web and mobile apps development and design | Thinkbots',
    siteUrl: `https://thinkbots.io`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`josefin sans\:400,600,700`],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-63920907-1',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
}
