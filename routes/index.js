const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('about', { active: { about: true } });
});

router.get('/portfolio', (req, res) => {
  res.render('portfolio', { active: { portfolio: true } });
});

router.get('/contact', (req, res) => {
  res.render('contact', { active: { contact: true } });
});

module.exports = router;
