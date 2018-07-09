const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { userExists, createUser } = require('../db/users')

router.use(bodyParser.json());

router.post('/register', register)

function register (req, res /*, next*/) {
    const {username, password} = req.body
    console.log("We are looking for: ", req.body)
    userExists(username)
        .then( exists => {
            if (exists) {
                return /*need if we have an else?*/res.status(400).send({message:'Username exists already'})
                //problem was sendStatus not send
            } else { //is this redundant?
                createUser(username, password)
                .then(()=> res.sendStatus(201).end())
                //console.log("Created user successfully")
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
    
     

    
}

module.exports = router