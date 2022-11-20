const router = require("express").Router();
const gned06 = require("../models/gned06.model.js");

router.route("/").get((req, res) => {
    gned06.find()
    .then(subjects => res.json(subjects))
    .catch(err => res.status(400).json("Error: " + err));
})

router.route("/gned06/:type").get((req, res) => {
    gned06.find({type: req.params.type})
    .then(subject => res.json(subject))
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;