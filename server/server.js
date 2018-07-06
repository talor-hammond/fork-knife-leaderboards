const path = require('path')
const express = require('express')

const request = require('superagent')
const url = 'https://api.fortnitetracker.com/v1/profile/'
const trnKey = 'TRN-Api-Key'
const trnKeyValue = '4b44201c-db0b-4bc7-b06f-5c6753877008'

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.get('/v1/profile/:platform/:name', (req,res) => {
    const {platform, name} = req.params
    console.log(platform)
    console.log(name)
    // import request from 'superagent'
// headers, get

// API GET https://api.fortnitetracker.com/v1/profile/{platform}/{epic-nickname}
// Tay's API KEY TRN-Api-Key: 4b44201c-db0b-4bc7-b06f-5c6753877008
// Platforms: pc, xbl, psn

    // player's data:
    request
        .get(url + `${platform}/${name}`)
        .set(trnKey, trnKeyValue)
        .then(apiRes => {
            console.log(apiRes)
            res.json(apiRes.body)
        })

})

module.exports = server
