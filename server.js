const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require("cors")
const rateLimit = require('express-rate-limit')
const con = require('./db')
const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')

const app = express()
const PORT = process.env.PORT || 5000
// const path = require('path')
require('dotenv').config()

/**
 * Middlewares
 */
app.use(express.static('public'))
app.use(express.json())
app.use(morgan('common'))
app.use(helmet())
app.use(cors())

/**
 * Whitelist
 */
const whitelist = ['http://localhost:3000', 'http://localhost:3001']
const corsOptions = {
origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
       callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

/**
 * Rate Limiting
 */
const publicLimit = rateLimit({
  windowMs: 1 * 6 * 1000,
  max: 20
})

const authLimit = rateLimit({
  windowMs: 1 * 6 * 1000,
  max: 100
})

app.use(publicLimit)

/**
 * Routes
 */
app.use('/', indexRouter)
app.use('/auth', authRouter)

/**
 * Conenct to Database
 */
con.query('show databases', (err, res, fields) => {
  if (err) throw err
})

/**
 * Run app
 */
// app.listen(PORT, () => console.log(`Listening on ${PORT}`))

const vroom = () => {
  app.listen(PORT)
}
vroom()