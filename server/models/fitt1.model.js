const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createFitt1 = new Schema({
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

const Fitt1 = mongoose.model("Fitt1", createFitt1);
module.exports = Fitt1;
