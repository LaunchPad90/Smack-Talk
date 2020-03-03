const Recipe = require('../models/recipe');
const User = require('../models/user');


module.exports = {
    new: newRecipe,
    index
}

function newRecipe(req, res) {
    res.render('recipes/new', {title: 'Add Recipe'});
}
function index(req, res) {
    res.render('users/index', {
        title: 'Blank',
        User,
        user: req.user,
        name: req.user.googleId,
    });
}