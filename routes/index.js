var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
    res.json('home')
})

module.exports = router