const passport = require('passport');
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
    function(acessToken, refreshToken, profile, cb) {
        User.findOne({ 'googleId': profile.id}, function(err, user) {
            if (err) return cb(err);
            if (user) {
                if (!user.avatar) {
                    user.avatar = profile.photos[0].value;
                    user.save(function(err) {
                        return cb(null, user);
                    })
                } else {
                    return cb(null, user);
                }
            }else {
                let newUser = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
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
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });