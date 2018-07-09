const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)

function createUser(username, password) {
    // creating a newuser object
    const newUser = {
        username,
        hash: password
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

module.exports = {
    createUser,
    userExists
}