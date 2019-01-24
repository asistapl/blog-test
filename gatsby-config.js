const theme = require('./src/styles/theme')
const { fontPreloadHeaders } = require('./src/styles/fonts')
const siteConfig = require('./siteConfig.js')

module.exports = {
  siteMetadata: siteConfig,
  plugins: [
    'gatsby-plugin-webpack-size',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: siteConfig.siteUrl,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.siteName,
        short_name: siteConfig.shortSiteName,
        start_url: siteConfig.startUrl,
        background_color: theme.colors.appScreenBackgroundColor,
        theme_color: theme.colors.themeColor,
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: theme.colors.progressBar,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: fontPreloadHeaders,
      },
    },
    // 'gatsby-plugin-layout',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
