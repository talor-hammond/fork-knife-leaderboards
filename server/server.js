const path = require('path')
const express = require('express')

const server = express()

const databaseRoutes = require('./public/routes/database')

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/database', databaseRoutes)

module.exports = server
