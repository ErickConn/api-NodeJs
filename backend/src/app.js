const express = require('express')
const router = require('./router')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('../frontend'))

app.use(router)

module.exports = app