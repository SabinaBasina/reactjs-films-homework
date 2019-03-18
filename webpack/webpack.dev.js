const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

  mode: 'development',

  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  devtool: 'inline-source-map'

});
