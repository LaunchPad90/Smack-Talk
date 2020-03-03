let router = require('express').Router();
let recipesCtrl = require('../controllers/recipes');
let passport = require('passport');

router.get('/', isLoggedIn, recipesCtrl.index);
router.get('/new', isLoggedIn, recipesCtrl.new);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}
 


module.exports = router;