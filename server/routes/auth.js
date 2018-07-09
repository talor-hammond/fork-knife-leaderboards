const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { userExists, createUser } = require('../db/users')
const token = require('../auth/token')

router.use(bodyParser.json());

router.post('/register', register, token.issue)

function register (req, res, next) {
    const {username, password} = req.body
    
    userExists(username)
        .then( exists => {
            if (exists) {
                return /*need if we have an else?*/res.status(400).send({message:'Username exists already'})
                //problem was sendStatus not send
            } else { //is this redundant?
                createUser(username, password)
                .then(()=> next())
                //console.log("Created user successfully")
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        })
    
     

    
}

//////////////////////////////

router.get('/username', token.decode, (req, res) =>{
    res.json({username: req.user.username})
})

//////////////////////////////

module.exports = router