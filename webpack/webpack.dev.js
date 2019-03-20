/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {

  mode: 'development',

  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    'webpack/hot/only-dev-server',
<<<<<<< HEAD
    './src/index.js',
=======
    './src/index.js'
>>>>>>> origin/part2
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(
      {
<<<<<<< HEAD
        verbose: true,
      },
    ),
  ],

  devtool: 'inline-source-map',
=======
        verbose: true
      })   
  ],

  devtool: 'inline-source-map'
>>>>>>> origin/part2

});
