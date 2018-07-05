import React from 'react'

// importing superagent
// import request from 'superagent'

import { getPlayersData } from '../apiClient'

// Components
import Stats from './Stats'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerOne: {},
      playerTwo: {}
    }
  }

  handleClick(e) {
    e.preventDefault()

    const input = document.getElementById('').value

    const platform = e.target.elements.platform.value
    const epicName = e.target.elements.epicName.value
    // Full URL https://api.fortnitetracker.com/v1/profile/{platform}/{epic-nickname}
    // String literal conversion *dabs* `{url/${platform}/${epicName}}`
  
    getPlayersData(playerOneName, playerOnePlatform)
      .then(playerOneData => {
        this.setState({
          playerOne: playerOneData,
          playerTwo: {}
        })
      })
}

  // componentDidMount () {

  // }

  render() {
    return (

      <React.Fragment>
        <Stats getPlayerData={this.GetPlayerData}/>
        <h1>Hello people</h1>
      </React.Fragment>

    )
  }
}

export default App
