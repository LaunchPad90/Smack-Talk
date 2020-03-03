const Recipe = require('../models/recipe');
const User = require('../models/user');


module.exports = {
    new: newRecipe,
    index,
    create
}

function newRecipe(req, res) {
    res.render('recipes/new', {title: 'Add Recipe'});
}

function index(req, res) {
    res.render('recipes/index', {
        title: 'Recipes',
        user: req.user,
        _id: req.user.googleId,
    });
}

function create(req, res) {
    const recipe = new Recipe(req.body);
    console.log('create: ', req.body);
    console.log('create123][][', req.user);
    recipe.user = req.user;
    recipe.save(function(err) {
        if (err) return res.render('recipes/new', {title: 'Add Recipe'});
        res.redirect('/recipes/all');
    });
}
