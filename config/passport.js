const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const user = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
    function(acessToken, refreshToken, profile, cb) {
        user.findOne({ 'googleId': profile.id}, function(err, user) {
            if (err) return cb(err);
            if (student) {
                return cb(null, user);
            } else {
                let newUser = new User({
                    name: profile.displayName,
                    email: profile.email[0].value,
                    googleId: profile.id
                });
                newUser.save(function(err) {
                    if (err) return cb(err);
                    return cb(null, user);
                });
            }
        });
    }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        user.findById(id, function(err, user) {
            done(err, user);
        });
    });