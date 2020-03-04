let router = require('express').Router();
let recipesCtrl = require('../controllers/recipes');
let passport = require('passport');

router.get('/all', isLoggedIn, recipesCtrl.index);
router.get('/user/index', isLoggedIn, recipesCtrl.userIndex);
router.get('/new', isLoggedIn, recipesCtrl.new);
router.post('/', isLoggedIn, recipesCtrl.create);
router.get('/:id', recipesCtrl.show);
router.get('/:id/edit', recipesCtrl.edit);
router.put('/:id', recipesCtrl.update);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}
 


module.exports = router;