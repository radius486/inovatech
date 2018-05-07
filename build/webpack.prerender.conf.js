const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.prod.conf')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const pageRoutes = require('../src/router/routes')
const routePaths = []

pageRoutes.map(function(el) {
  routePaths.push(el.path)
})

const webpackConfig = merge(baseWebpackConfig, {
  plugins: [
    // prerender the important pages
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, '../dist'),
      routes: routePaths
    })
  ]
})

module.exports = webpackConfig
