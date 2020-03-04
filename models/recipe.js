const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    course: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
    servings: Number,
    prepTime: Number,
    cookTime: Number,
    ingredients: String,
    directions: String,
    image: String
})


module.exports = mongoose.model('Recipe', recipeSchema);

