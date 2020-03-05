const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('../models/user');

const commentSchema = new Schema({
    content: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})


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
    },
    comments: [commentSchema]
})


module.exports = mongoose.model('Recipe', recipeSchema);
// module.exports = mongoose.model('Comment', commentSchema);

