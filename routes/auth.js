const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");

// POST api/auth/signup
router.post("/signup", (req, res) => {
  const { username, password, firstName, lastName } = req.body;

  if (!password || password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must contain at least 8 characters" });
  }
  if (!username) {
    return res.status(400).json({ message: "Username field cannot be empty" });
  }

  User.findOne({ username: username })
    .then(found => {
      if (found) {
        return res.status(400).json({ message: "Username already exists" });
      }

      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);

      return User.create({
        username: username,
        password: hash,
        firstName: firstName,
        lastName: lastName
      }).then(dbUser => {
        // Login the user on signup
        console.log("new user created", dbUser);
        req.login(dbUser, err => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Error while attempting to login" });
          }
          res.json(dbUser);
        });
      });
    })
    .catch(err => {
      res.json(err);
    });
});

// POST /api/auth/login
router.post("/login", (req, res) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Error while authenticating" });
    }
    if (!user) {
      return res
        .status(400)
        .json({ message: "Incorrect username or password" });
    }
    req.login(user, err => {
      console.log("login", user);
      if (err) {
        return res
          .status(500)
          .json({ message: "Error while attempting to login" });
      }
      return res.json(user);
    });
  })(req, res);
});

// DELETE /api/auth/logout
router.delete("/logout", (req, res) => {
  req.logout();
  res.json({ message: "You've successfully logged out" });
});

// checks if the user has an active session
// GET /api/auth/loggedin
router.get("/loggedin", (req, res) => {
  res.json(req.user);
});

module.exports = router;
