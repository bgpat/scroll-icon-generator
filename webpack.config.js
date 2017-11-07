const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    //new MinifyPlugin(),
    //new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
  module: {
    rules: [
      {
        loader: 'vue-loader',
        test: /\.vue$/,
        options: {
          loaders: [
            'vue-style-loader',
            'css-loader',
          ],
          transformToRequire: {
            video: 'src',
            source: 'src',
            img: 'src',
            image: 'xlink:href',
          },
        },
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
      },
      {
        loader: [
          'style-loader',
          'css-loader',
        ],
        test: /\.css(\?.*)?$/,
      },
      {
        loader: 'url-loader',
        test: /\.(woff2?|ttf)(\?.*)?$/,
        options: {
          limit: 0x20000,
        },
      },
      {
        loader: 'null-loader',
        test: /\.(ttf|svg|eot)(\?.*)?$/,
      },
    ],
  },
};
