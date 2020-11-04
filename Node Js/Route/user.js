
const router = require('express').Router();

router.get('/login', (req, res) => {
  res.send('<h1>Login Router</h1>');
});

router.get('/logout', (req, res) => {
  res.send('<h1>Logout Router</h1>');
});

router.get('/signup', (req, res) => {
  res.send('<h1>Signup Router</h1>');
});

module.exports = router;
