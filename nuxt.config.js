module.exports = {
  router: {
    middleware: 'check-auth'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sail',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My blog site powered by nuxt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/github.png' }
    ]
  },
  css: [
    { src: '~/assets/less/bootstrap.less', lang: 'less' },
    { src: '~/assets/less/font.css' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  // environment
  env: {
    baseURL: 'https://api.github.com/'
  },
  plugins: [
    { src: '~/plugins/filters.js' }
  ]
}
