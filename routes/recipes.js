let router = require('express').Router();
let recipesCtrl = require('../controllers/recipes');

router.get('/new', recipesCtrl.new);


module.exports = router;