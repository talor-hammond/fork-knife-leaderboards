const express = require('express')
const bodyParser = require('body-parser')

const db = require('../db')

const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getLeaderboards()
    .then(players => {
      res.json(players)
    })
})

router.post('/', (req, res) => {

  const player = req.body

  console.log('Post, req.body: ', player)
  
  db.insertPlayer(player)
    .then(res => {
      console.log(res)
    })

})

module.exports = router