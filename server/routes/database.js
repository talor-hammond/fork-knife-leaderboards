const express = require('express')
const bodyParser = require('body-parser')

const leaderboards = require('../db/leaderboards')

const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req, res) => {
  leaderboards.getLeaderboards()
    .then(players => {
      res.json(players)
    })
})

router.post('/', (req, res) => {

  const player = req.body

  console.log('Post, req.body: ', player)
  
  leaderboards.insertPlayer(player)
    .then(res => {
      console.log(res)
    })

})

module.exports = router
