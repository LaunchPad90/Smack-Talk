const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('../models/user');

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    course: String,
    servings: Number,
    prepTime: Number,
    cookTime: Number,
    ingredients: String,
    directions: String,
    image: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})


module.exports = mongoose.model('Recipe', recipeSchema);

