var express = require('express');
var router = require('express').Router();
let passport = require('passport');
let recipe = require('../models/recipe');

router.post('/recipes/:id/comments', function create(req, res) {
    recipe.findById(req.params.id, function(err, recipe) {
        recipe.comments.push(req.body);
        recipe.save(function(err) {
        res.redirect(`/recipes/${recipe.id}`);
        });
    });
});


module.exports = router;