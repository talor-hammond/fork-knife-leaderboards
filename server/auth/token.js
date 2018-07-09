const {getUserByName} = require('../db/users')
//import jwt from 'jsonwebtoken'
const {sign} = require('jsonwebtoken')
const secret = process.env.JWT_SECRET;

function issue(req, res) {
    getUserByName(req.body.username)
        .then(({id, username}) => {
            const token = sign({id, username}, secret, {expiresIn:'1d'})
            res.json({message:"Auth successful, son.", token})
        })    
}

module.exports = {
    issue
}

