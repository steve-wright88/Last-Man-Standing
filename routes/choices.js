const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Choice = require("../models/Choice");
const axios = require("axios");
const Round = require("../models/Round");

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
//get to that route in postman once to initialize the round
router.get("/makeRound", (req, res) => {
  Round.create({ round: 1 }).then(round => {
    res.json(round);
  });
});
//just for presentation reasons
router.put("/changeRound", (req, res) => {
  Round.findByIdAndUpdate(
    { _id: "5d9f5b9debdfa80017f2b11e" },
    { $inc: { round: 1 } },
    { new: true }
  ) //round document id
    .then(result => {
      res.json(round);
    });
});

router.get("/getRound", (req, res) => {
  Round.find().then(round => {
    res.json(round);
  });
});
router.post("/pick/:round", (req, res) => {
  const userId = req.user._id;
  const team = req.body.team;
  // check if there is a Choice for that round and user
  Round.find().then(rounds => {
    let round = rounds[0].round;
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
          User.findByIdAndUpdate(userId, { $push: { choices: id } }).then(
            () => {
              res.json({ message: "ok" });
            }
          );
        });
      } else {
        // else update the Choice
        Choice.findByIdAndUpdate(pick._id, { team: team }).then(() => {
          res.json({ message: "ok" });
        });
      }
    });
  });
});

module.exports = router;
