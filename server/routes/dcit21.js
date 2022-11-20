const router = require("express").Router();
const dcit21 = require("../models/dcit21.model.js");

router.route("/").get((req, res) => {
    dcit21.find()
    .then(subjects => res.json(subjects))
    .catch(err => res.status(400).json("Error: " + err));
})

router.route("/dcit21/:type").get((req, res) => {
    dcit21.find({type: req.params.type})
    .then(subject => res.json(subject))
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;