let router = require('express').Router();
let recipesCtrl = require('../controllers/recipes');
let passport = require('passport');

router.get('/all', recipesCtrl.index);
router.get('/user/index', isLoggedIn, recipesCtrl.userIndex);
router.get('/new', isLoggedIn, recipesCtrl.new);
router.post('/', isLoggedIn, recipesCtrl.create);
router.get('/:id', isLoggedIn, recipesCtrl.show);
router.get('/:id/edit', isLoggedIn, recipesCtrl.edit);
router.put('/:id', isLoggedIn, recipesCtrl.update);
router.delete('/:id', isLoggedIn, recipesCtrl.delete);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}
 


module.exports = router;