const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.prod.conf')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

const webpackConfig = merge(baseWebpackConfig, {
  plugins: [
    // prerender the important pages
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, '../dist'),
      routes: [ '/', '/3d-printers', '/3d-pens' ]
    })
  ]
})

module.exports = webpackConfig
