const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: String,
    course: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
    servings: Number,
    prepTime: Number,
    cookTime: Number,
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
    }],
    directions: [{
        type: Schema.Types.ObjectId,
        ref: 'Direction'
    }]
})


module.exports = mongoose.model('Recipe', recipeSchema);

