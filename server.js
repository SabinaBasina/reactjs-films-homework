/* eslint-disable global-require */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */

const express = require('express');
const webpack = require('webpack');
const history = require('connect-history-api-fallback');
const _ = require('lodash');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
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

const users = [
  {
    id: 1,
    name: 'jonathanmh',
    password: '%2yx4',
  },
  {
    id: 2,
    name: 'test',
    password: 'test',
  },
  {
    id: 3,
    name: 'sabina98bel@mail.ru',
    password: 'Sabina123',
  },
];

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'tasmanianDevil';

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  console.log('payload received', jwt_payload);
  const user = users[_.findIndex(users, { id: jwt_payload.id })];
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

passport.use(strategy);

app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  let name;
  if (req.body.name && req.body.password) {
    name = req.body.name;
  }
  const user = users[_.findIndex(users, { name })];
  if (!user) {
    res.status(401).json({ message: 'no such user found' });
  }

  if (user.password === req.body.password) {
    const payload = { id: user.id };
    const token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({ message: 'ok', token, payload });
  } else {
    res.status(401).json({ message: 'password did not match' });
  }
});

app.get('/secret', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json('Success! You can not see this without a token');
});

// Serve the files on port 3000.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!\n`);
});
