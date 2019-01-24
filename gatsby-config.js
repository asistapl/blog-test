const theme = require('./src/styles/theme')
const { fontPreloadHeaders } = require('./src/styles/fonts')
const siteConfig = require('./siteConfig.js')

module.exports = {
  siteMetadata: siteConfig,
  plugins: [
    'gatsby-plugin-webpack-size',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/uploads`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: theme.maxTextContainerWidth,
              quality: 80,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
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
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: siteConfig.siteUrl,
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
    // 'gatsby-plugin-layout',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      // make sure to keep it last in the array
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: fontPreloadHeaders,
      },
    },
  ],
}
