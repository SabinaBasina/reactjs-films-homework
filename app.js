/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */
/* eslint-disable global-require */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const app = express();
const port = 3000;

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

// app.get('/', (req, res) => res.json({ message: 'Hello World!' }));

app.post('/login', (req, res) => {
  var name; var password;
  if (req.body.name && req.body.password) {
    name = req.body.name;
    password = req.body.password;
  }
  const user = users[_.findIndex(users, { name })];
  if (!user) {
    res.status(401).json({ message: 'no such user found' });
  }

  if (user.password === req.body.password) {
    var payload = { id: user.id };
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({ message: 'ok', token });
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
