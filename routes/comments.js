var express = require('express');
var router = require('express').Router();
let passport = require('passport');
let recipe = require('../models/recipe');
const commentCtrl = require('../controllers/comments')

// router.post('/recipes/:id/comments', function(req, res) {
//     console.log('ROUTERCOMMENTS')
//     recipe.findById(req.params.id, function create(req, res) {
//         recipe.comments.push(req.body);
//         recipe.save();
//         res.redirect(`/recipes/${recipe.id}`);
//     });
// });

// router.post('/recipes/:id/comments', commentCtrl.create);

router.post('/recipes/:id/comments', function create(req, res) {
    const recipe = new Recipe(req.body);
    recipe.user = req.user.id;
    recipe.save(function(err) {
        if (err) return res.render('recipes/new', {title: 'Add Recipe'});
        res.redirect('/recipes/all');
    });
})


module.exports = router;