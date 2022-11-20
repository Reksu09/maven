const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createGned02 = new Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
}, {
    timestamp: true
})

const Gned02 = mongoose.model("Gned02", createGned02);
module.exports = Gned02;
