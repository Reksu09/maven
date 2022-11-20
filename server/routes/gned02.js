const router = require("express").Router();
const gned02 = require("../models/gned02.model.js");

router.route("/").get((req, res) => {
    gned02.find()
    .then(subjects => res.json(subjects))
    .catch(err => res.status(400).json("Error: " + err));
})

router.route("/gned02/:type").get((req, res) => {
    gned02.find({type: req.params.type})
    .then(subject => res.json(subject))
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;