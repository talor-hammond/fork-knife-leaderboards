// import request from 'superagent'
const request = require('superagent')
// headers, get
// const url = 'https://api.fortnitetracker.com/v1/profile/'
const url = '/v1/profile/'
// const trnKey = 'TRN-Api-Key'
// const trnKeyValue = '4b44201c-db0b-4bc7-b06f-5c6753877008'

// API GET https://api.fortnitetracker.com/v1/profile/{platform}/{epic-nickname}
// Tay's API KEY TRN-Api-Key: 4b44201c-db0b-4bc7-b06f-5c6753877008
// Platforms: pc, xbl, psn

export function getPlayerData(name, platform) {

    // player's data:
    return request
        .get(url + `${platform}/${name}`)
        // .set(trnKey, trnKeyValue)
        .then(res => {

            // grabbing the results
            const id = res.body.accountId
            const name = res.body.epicUserHandle
            const kdr = Number(res.body.lifeTimeStats[11].value)
            const winRatio = res.body.lifeTimeStats[9].value
            const totalKills = res.body.lifeTimeStats[10].value
            const totalWins = Number(res.body.lifeTimeStats[8].value)

            const player = {
                id,
                'username': name,
                'win_ratio': winRatio,
                'total_wins': totalWins,
                kdr,
                'total_kills': totalKills,
                rating: (0.5 * Number(kdr) + 0.5 * Number(totalWins))
            }
            return player
        })

}

export function getLeaderboards() {
    return request
        .get('/api/v1')
        .then(res => {
            return res.body
        })
}