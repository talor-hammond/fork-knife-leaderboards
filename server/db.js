// File for writing functions related to db queries; returning / doing what we want:

// setting up the database:
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const db = require('knex')(config)

function getLeaderboards() {
    return db('leaderboards')
        .orderBy('rating', 'DESC')
}

function insertPlayer(player) {

    return db('leaderboards')
        .insert(player)
        
}

module.exports = {
    getLeaderboards,
    insertPlayer
}