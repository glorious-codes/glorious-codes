const fs = require('fs'),
  path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  PrerenderSPAPlugin = require('prerender-spa-plugin'),
  project = require('./project.json'),
  Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  devtool: '#source-map',
  output: {
    filename: project.scripts.dist.filename.prod
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin(project.styles.dist.filename.prod),
    new PrerenderSPAPlugin({
      staticDir: `${__dirname}/${project.scripts.dist.root}`,
      routes: ['/', '/author', '/cookie', '/crud'],
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
      },
      renderer: new Renderer({
        headless: false,
        renderAfterDocumentEvent: 'render-event',
        args: ['–no-sandbox', '–disable-setuid-sandbox']
      })
    })
  ]
}
