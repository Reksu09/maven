const router = require("express").Router();
const fitt1 = require("../models/fitt1.model.js");

router.route("/").get((req, res) => {
    fitt1.find()
    .then(subjects => res.json(subjects))
    .catch(err => res.status(400).json("Error: " + err));
})

router.route("/fitt1/:type").get((req, res) => {
    fitt1.find({type: req.params.type})
    .then(subject => res.json(subject))
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;