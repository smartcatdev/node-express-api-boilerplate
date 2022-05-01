var express = require('express')
var router = express.Router()

router.get('/register', (req, res, next) => {
    res.send('register')
})

router.get('/login', (req, res, next) => {
  res.json('login')
})

router.get('/reset', (req, res, next) => {
  res.send('reset')
})

module.exports = router