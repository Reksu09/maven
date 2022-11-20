const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createCosc50 = new Schema({
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

const Cosc50 = mongoose.model("Cosc50", createCosc50);
module.exports = Cosc50;
