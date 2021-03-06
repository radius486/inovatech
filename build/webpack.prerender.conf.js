const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.prod.conf')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const app = require('../static/json/app.json');

const routePaths = ['/', '/3d-printers', '/3d-pens', '/plastic', '/parts', '/gifts', '/services', '/not-found'];

Object.keys(app.printers.catalog).map(function(el) {
  routePaths.push('/3d-printers/' + el)
})

Object.keys(app.pens.catalog).map(function(el) {
  routePaths.push('/3d-pens/' + el)
})

Object.keys(app.plastics.catalog).map(function(el) {
  routePaths.push('/plastic/' + el)
})

Object.keys(app.parts.catalog).map(function(el) {
  routePaths.push('/parts/' + el)
})

Object.keys(app.gifts.catalog).map(function(el) {
  routePaths.push('/gifts/' + el)
})


const webpackConfig = merge(baseWebpackConfig, {
  plugins: [
    // prerender the important pages
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, '../dist'),
      routes: routePaths,
      phantomPageViewportSize: {
        width: 1242,
        height: 742
      },
      renderer: new Renderer({
        maxConcurrentRoutes: 5,
        //headless: false
      })
    })
  ]
})

module.exports = webpackConfig
