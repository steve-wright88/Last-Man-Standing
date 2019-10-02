const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Choice = require("../models/Choice");

router.post("/", (req, res) => {
  // const { title, description, tasks = [] } = req.body;
  const title = req.body.title;
  const description = req.body.description;
  const tasks = [];
  const owner = req.user._id;

  Project.create({
    title: title,
    description: description,
    tasks: tasks,
    owner: owner
  })
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
