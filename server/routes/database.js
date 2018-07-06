const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getLeaderboards()
    .then(players => {
        console.log('firing', players)
      res.json(players)
    })
})

module.exports = router