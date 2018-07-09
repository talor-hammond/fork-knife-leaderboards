const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)
const {generate} = require('../auth/hash')

function createUser(username, password) {
    // creating a newuser object
    const newUser = {
        username,
        hash: generate(password)
    }

    return db('users')
        .insert(newUser)
}

function userExists(username) {

    return db('users')
        .count('id as n')
        .where('username', username)
        .then(count => {
            return count[0].n > 0
        })

}

function getUserByName(username){
    return db('users')
        .where('username', username)
        .first()
}

module.exports = {
    createUser,
    userExists,
    getUserByName,
}