const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Choice = require("../models/Choice");

router.patch("/availableteams", (req, res) => {
  //const team = req.body.team (this will be a string)
  User.findByIdAndUpdate(id, { $push: { choices: team } });
  // const { title, description, tasks = [] } = req.body;
});

router.post("/pick/:round", (req, res) => {});

module.exports = router;
