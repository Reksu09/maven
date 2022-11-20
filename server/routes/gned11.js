const router = require("express").Router();
const gned11 = require("../models/gned11.model.js");

router.route("/").get((req, res) => {
    gned11.find()
    .then(subjects => res.json(subjects))
    .catch(err => res.status(400).json("Error: " + err));
})

router.route("/gned11/:type").get((req, res) => {
    gned11.find({type: req.params.type})
    .then(subject => res.json(subject))
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;