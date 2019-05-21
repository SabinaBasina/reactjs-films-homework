const path = require('path');

module.exports = {

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  node: { fs: 'empty' },

  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          'file-loader?name=[hash:12].[ext]&outputPath=images/',
          'image-webpack-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader/webpack',
          'babel-loader',
        ],
      },
    ],
  },
};
