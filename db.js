const mysql = require('mysql')
require('dotenv').config()

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

con.connect(err => {
  if (err) throw err
  console.log('connected to database')
})

module.exports = con
