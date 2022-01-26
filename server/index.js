const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const parkRouter = require('./routes/park-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', parkRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))