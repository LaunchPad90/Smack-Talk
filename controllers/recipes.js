const Recipe = require('../models/recipe');
const User = require('../models/user');


module.exports = {
    new: newRecipe,
    index,
    create,
    show
}

function newRecipe(req, res) {
    res.render('recipes/new', {title: 'Add Recipe'});
}

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/index', {
            title: 'Recipes',
            id: req.user.id,
            recipes
        });
    })
}

function create(req, res) {
    const recipe = new Recipe(req.body);
    recipe.user = req.user;
    recipe.save(function(err) {
        if (err) return res.render('recipes/new', {title: 'Add Recipe'});
        res.redirect('/recipes/all');
    });
}

function show(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        console.log('INDEX{}{}{}', req.params.id);
        res.render('recipes/show', {
            title: 'Edit',
            id: req.params.id,
            recipe
        });
    })
    
}