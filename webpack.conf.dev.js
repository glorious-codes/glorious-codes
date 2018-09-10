const fs = require('fs'),
  webpack = require('webpack'),
  ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: '#eval-source-map',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    port: 7000
  }
}
