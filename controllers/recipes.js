const Recipe = require('../models/recipe');
const User = require('../models/user');


module.exports = {
    new: newRecipe,
    index,
    create,
    show,
    userIndex,
    edit,
    update,
    delete: deleteRecipe
}

function newRecipe(req, res) {
    res.render('recipes/new', {title: 'Add Recipe'});
}

function index(req, res) {
    console.log(req.user);
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
    recipe.user = req.user.id;
    recipe.save(function(err) {
        if (err) return res.render('recipes/new', {title: 'Add Recipe'});
        res.redirect('/recipes/all');
    });
}

function show(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        res.render('recipes/show', {
            title: `${recipe.title}`,
            id: req.params.id,
            recipe
        });
    })
    
}

function userIndex(req, res) {
    Recipe.find({user: req.user.id}, function(err, recipes) {
        res.render('recipes/index', {
            title: 'Recipes',
            id: req.user.id,
            recipes
        });
    })
}

function edit(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        if (!recipe.user.equals(req.user.id)) return res.redirect('/recipes/all')
        res.render('recipes/edit', {title: 'Edit Recipe', recipe});
    })
}

function update(req, res) {
    Recipe.findByIdAndUpdate(req.params.id, req.body, function(err, recipe) {
        res.redirect(`/recipes/${recipe.id}`);
    })
}

function deleteRecipe(req, res) {
    Recipe.findById(req.params.id, function(err, recipe){

        if (!recipe.user.equals(req.user.id)) return res.redirect('/recipes/all')
        
        Recipe.findByIdAndRemove(req.params.id, function(err, recipe){
            res.redirect('/recipes/all')
        })
    })
}