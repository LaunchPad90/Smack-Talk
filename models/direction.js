const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const directionSchema = new Schema({
    instructions: String,
})


module.exports = mongoose.model('Direction', directionSchema);