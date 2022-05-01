const mysql = require('mysql')

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: "3307"
})

con.connect(err => {
  if (err) throw err
  console.log('connected to database')
})

module.exports = con
