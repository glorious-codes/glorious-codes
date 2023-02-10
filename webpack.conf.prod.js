const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin-next');
const project = require('./project.json');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

function getRoutes(){
  return [
    '/',
    '/author',
    '/cookie',
    '/crud',
    '/demo',
    '/fyzer',
    '/rasket'
  ].map(path => `${path}?analytics=disabled`)
}

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new webpack.SourceMapDevToolPlugin(),
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          compress: {
            warnings: false,
          },
          sourceMap: true
        }
      })
    ]
  },
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: `${__dirname}/${project.scripts.dist.root}`,
      routes: getRoutes(),
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
      },
      renderer: require('@prerenderer/renderer-puppeteer'),
      rendererOptions: {
        headless: true,
        args: ['–no-sandbox', '–disable-setuid-sandbox']
      }
    })
  ]
}
