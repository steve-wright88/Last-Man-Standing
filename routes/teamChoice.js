const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Choice = require("../models/Choice");

router.patch("/addteam", (req, res) => {
  //const team = req.body.team (this will be a string)
  User.findByIdAndUpdate(id, { $push: { choices: team } });
  // const { title, description, tasks = [] } = req.body;
});

router.post("/pick/:round", (req, res) => {
  const round = req.params.round;
  const userId = req.user._id;
  const team = req.body.team;
  // check if there is a Choice for that round and user
  Choice.findOne({
    round: round,
    user: userId
  }).then(pick => {
    // if no create a Choice
    if (!pick) {
      Choice.create({
        user: userId,
        round: round,
        team: team,
        status: "pending"
      }).then(newChoice => {
        const id = newChoice._id;
        User.findByIdAndUpdate(
          userId,
          { $push: { choices: id } },
          { new: true }
        ).then(() => {
          res.json({ message: "ok" });
        });
      });
    } else {
      // else update the Choice
      Choice.findByIdAndUpdate(pick._id, { team: team }).then(() => {
        res.json({ message: "ok" });
      });
    }
  });
});

module.exports = router;
