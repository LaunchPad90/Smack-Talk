const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: String,
    course: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
    servings: Number,
    prepTime: [Number, ['minutes', 'hours']],
    cookTime: [Number, ['minutes', 'hours']],
    ingredients: String,
    directions: String
})


module.exports = mongoose.model('Recipe', recipeSchema);

