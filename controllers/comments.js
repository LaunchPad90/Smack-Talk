const Recipe = require('../models/recipe');

module.exports = [
    create,
    // update
]

function create(req, res) {
    console.log('create from comments', recipe.id)
    Recipe.findById(req.params.id, function(err,recipe) {
        req.body.user = req.user.id;
        req.body.name = req.user.name;
        Recipe.comments.push(req.body);
        Recipe.save(function(err) {
            res.redirect(`/recipes/${recipe.id}`)
        });
    });
}

// function update(req, res) {
//     Recipe.findByIdAndUpdate(req.params.id, req.body, function(err, recipe) {
//         res.redirect(`/recipes/${recipe.id}`);
//     })
// }