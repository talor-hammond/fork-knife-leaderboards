// File for writing functions related to db queries; returning / doing what we want:

// setting up the database:
const environment = 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

function getLeaderboards() {
    return db('leaderboards')
        .then(data => {
            console.log(data)
        })
}

function insertPlayer(id, username, winRatio, totalWins, kdr, totalKills, rating) {
    const newPlayer = {
        id,
        username,
        'win_ratio': winRatio,
        'total_wins': totalWins,
        kdr,
        'total_kills': totalKills,
        rating
    }

    return db('leaderboards')
        .insert(newPlayer)
        .then(returnValue => {
            returnValue
        })
}