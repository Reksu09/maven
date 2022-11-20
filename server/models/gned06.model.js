const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createGned06 = new Schema({
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

const Gned06 = mongoose.model("Gned06", createGned06);
module.exports = Gned06;
