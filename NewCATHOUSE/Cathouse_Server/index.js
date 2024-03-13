const express = require('express')
const cors = require('cors')

const Admin = require('./src/AdminExp/index')
const User = require('./src/UserExp/index')

const app = express()
const port = 8000

app.use(cors())
app.use(express.json())

app.use('/admin', Admin)
app.use('/', User)

app.listen(port, () => {
    return console.log(`Server run port: ${port}`)
})