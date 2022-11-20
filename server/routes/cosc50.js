const router = require("express").Router();
const Cosc50 = require("../models/cosc50.model.js");

router.route("/").get((req, res) => {
    Cosc50.find()
    .then(subjects => res.json(subjects))
    .catch(err => res.status(400).json("Error: " + err));
})

router.route("/cosc50/:type").get((req, res) => {
    Cosc50.find({type: req.params.type})
    .then(subject => res.json(subject))
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;