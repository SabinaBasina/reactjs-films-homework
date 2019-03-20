/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {

  mode: 'production',

  entry: './src/index.js',

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  devtool: 'source-map',

});
