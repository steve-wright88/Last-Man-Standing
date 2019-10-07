const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/competition', (req, res, next) => {
  res.render('competition');
});

module.exports = router;
