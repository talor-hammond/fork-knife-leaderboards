const {getUserByName} = require('../db/users')
//import jwt from 'jsonwebtoken'
const {sign} = require('jsonwebtoken')
const secret = process.env.JWT_SECRET;
const verifyJwt = require('express-jwt')

function issue(req, res) {
    getUserByName(req.body.username)
        .then(({id, username}) => {
            const token = sign({id, username}, secret, {expiresIn:'1d'})
            res.json({message:"Auth successful, son.", token})
        })    
}

/////////////////

function decode(req, res, next){
    verifyJwt({
        secret:getSecret
    })(req, res, next) //verifyJot returns a function, so we feed in the same params
    
}

function getSecret(req, payload, done){
    done(null, process.env.JWT_SECRET)
}

////////////////


module.exports = {
    issue,
    decode
}

