const webpack = require('webpack');
const project = require('./project.json');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 9000,
    historyApiFallback: true
  }
}
