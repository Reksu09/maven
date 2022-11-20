const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createDcit21 = new Schema({
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

const Dcit21 = mongoose.model("Dcit21", createDcit21);
module.exports = Dcit21;
