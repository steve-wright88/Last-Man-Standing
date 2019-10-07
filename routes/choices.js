const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Choice = require("../models/Choice");

const teams = require("../data.json").premierleague;

// GET all available teams (all the teams minus the ones that were previously picked)
router.get("/availableTeams", (req, res) => {
  const id = req.user._id;
  User.findById(id)
    .populate("choices")
    .then(user => {
      // subtract the teams in user.choices from data.json
      const selected = user.choices.map(el => {
        return el.team;
      });
      const available = teams.filter(obj => {
        // return the
        if (selected.includes(obj.team)) {
          return false;
        } else return true;
      });

      res.json(available);
    });
});

router.get("/usersChoices", (req, res) => {
  User.find()
    .populate("choices")
    .then(users => {
      res.json(users);
    });
});

router.post("/pick/:round", (req, res) => {
  const round = req.params.round;
  const userId = req.user._id;
  const team = req.body.team;
  console.log(req.body);
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
        User.findByIdAndUpdate(userId, { $push: { choices: id } }).then(() => {
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
