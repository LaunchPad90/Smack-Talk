const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    name: String
});


module.exports = mongoose.model('Ingredient', ingredientSchema);