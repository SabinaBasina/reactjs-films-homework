const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: '/'
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', ".css", ".jpg", ".png"],
  },

  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          'file-loader?name=[hash:12].[ext]&outputPath=images/',
          'image-webpack-loader'
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ]
};