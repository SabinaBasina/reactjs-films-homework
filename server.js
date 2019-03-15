const express = require('express');

const webpack = require('webpack');
const app = express();
if (process.env.NODE_ENV.trim() === 'development'){
  var config = require('./webpack/webpack.dev.js');
}

if (process.env.NODE_ENV.trim() === 'production'){
  var config = require('./webpack/webpack.prod.js');
}

const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, 
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler, {
  log: false,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

app.use('/dist', express.static('./dist'));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});