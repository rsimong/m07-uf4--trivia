const mongoose = require('mongoose');

const questionShema = mongoose.Schema({
    category: String,
    type: String,
    difficulty:  String,
    question: String,
    correct_answer: String,
    incorrect_answer: Array
});

module.exports = mongoose.model('Question', questionShema);