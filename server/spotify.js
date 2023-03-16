const express = require('express');
const passport = require('passport');
const session = require('express-session');
const SpotifyStrategy = require('passport-spotify').Strategy;
// import {Request, Response} from 'express-serve-static-core';
// import {Profile, VerifyCallback} from 'passport-spotify'
const app = express();

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(
  new SpotifyStrategy(
    {
  clientID: '',
  clientSecret: '',
  callbackURL: 'http://localhost:3000/auth/callback'
},
async (
  req,
  accessToken,
  refreshToken,
  expires_in,
  profile,
  done
) => {
  const user = new User();
  await user.save();
process.nextTick(() => done(null, user))}
));

app.get(authCallbackPath,
await passport.authenticate('spotify', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
Promise((resolve) => app.listen(PORT, resolve));