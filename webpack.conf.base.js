const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin')
  ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(styl|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { minimize: true } },
            'stylus-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name]-[hash].[ext]',
          context: 'src'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@scripts': `${__dirname}/src/scripts`,
      '@styles': `${__dirname}/src/styles`
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/images/favicon.ico',
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}
