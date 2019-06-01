/* eslint-disable global-require */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

const express = require('express');
const webpack = require('webpack');
const history = require('connect-history-api-fallback');

const app = express();
const port = 3000;
app.use(history());

if (process.env.NODE_ENV === 'development') {
  const config = require('./webpack/webpack.dev.js');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: false,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
} else {
  app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
  });
}


app.use('/', express.static('./dist'));

// Serve the files on port 3000.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!\n`);
});
