const fs = require('fs'),
  path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  PrerenderSPAPlugin = require('prerender-spa-plugin'),
  Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  devtool: '#source-map',
  output: {
    filename: 'bundle-[hash].js'
  },
  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: [ '/', '/about', '/contact' ],
      renderer: new Renderer({
        headless: false,
        renderAfterDocumentEvent: 'render-event'
      })
    })
  ]
}
