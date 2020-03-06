const Recipe = require('../models/recipe');

module.exports = [
    create,
    // update
]

function create(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        console.log(recipe);
        console.log(req.body);
        // Add the comment
        recipe.comments.push(req.body);
        recipe.save(function(err) {
        res.redirect(`/recipes/${recipe.id}`);
        });
    });
}

// function update(req, res) {
//     Recipe.findByIdAndUpdate(req.params.id, req.body, function(err, recipe) {
//         res.redirect(`/recipes/${recipe.id}`);
//     })
// }