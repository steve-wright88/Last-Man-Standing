const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Choice = require("../models/Choice");
const axios = require('axios')

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

router.get('/updateResult', (req, res) => {
  let instance = axios.create({
    headers: {
      "X-Auth-Token": 'c89c1d5d960f4950b1dc811236714bae'
    }
  })

  instance.get('https://api.football-data.org/v2/competitions/2021/matches?season=2019&matchday=8').then(result => {

    let matchObj = result.data.matches.reduce((acc, team, i) => {
      let homeResult = team.score.fullTime.homeTeam > team.score.fullTime.awayTeam ? "winner" : "loser"

      let awayResult = team.score.fullTime.awayTeam > team.score.fullTime.homeTeam ? "winner" : "loser"

      acc[team.homeTeam.name] = homeResult
      acc[team.awayTeam.name] = awayResult
      return acc
    }, {})
    res.json({ matchObj })
  }).catch(err => res.json(err))
})

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
