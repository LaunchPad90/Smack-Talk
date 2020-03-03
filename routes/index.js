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
  successRedirect: '/recipes',
  failureRedirect: '/recipes'
}));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
