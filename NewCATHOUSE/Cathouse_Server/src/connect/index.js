const mysql = require('mysql')

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'cathouse',
    password:'3364'
})

module.exports = conn