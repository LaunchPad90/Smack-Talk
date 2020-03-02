var express = require('express');
var router = require('express').Router();
let passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Smack Talk' });
});

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/oauth2callback', passport.authenticate('google', {
  successRedirect: '/users',
  failureRedirect: '/users'
}));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/users');
});

module.exports = router;
