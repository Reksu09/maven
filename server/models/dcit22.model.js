const mongoose = require("mongoose");
const Dcit21 = require("./dcit21.model");
const Schema = mongoose.Schema;

const createDcit22 = new Schema({
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

const Dcit22 = mongoose.model("Dcit22", createDcit22);
module.exports = Dcit22;
