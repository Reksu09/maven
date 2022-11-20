const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createGned11 = new Schema({
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

const Gned11 = mongoose.model("Gned11", createGned11);
module.exports = Gned11;
