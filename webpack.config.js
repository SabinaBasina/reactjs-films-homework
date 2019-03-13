const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    'webpack/hot/only-dev-server',
    "./src/index.js"
  ],

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: '/'
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', ".css"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    // OccurrenceOrderPlugin is needed for webpack 1.x only
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // // Use NoErrorsPlugin for webpack 1.x
    // new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })

  ]
};