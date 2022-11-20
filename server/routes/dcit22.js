const router = require("express").Router();
const dcit22 = require("../models/dcit22.model.js");

router.route("/").get((req, res) => {
    dcit22.find()
    .then(subjects => res.json(subjects))
    .catch(err => res.status(400).json("Error: " + err));
})

router.route("/dcit22/:type").get((req, res) => {
    dcit22.find({type: req.params.type})
    .then(subject => res.json(subject))
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;