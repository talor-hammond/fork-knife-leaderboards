import React from 'react'

// importing superagent
// import request from 'superagent'

import { getPlayersData } from '../apiClient'

// Components
// import Stats from './Stats'
import Leaderboards from './Leaderboards'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerOne: {},
      playerTwo: {}
    }
  }

  render() {
    return (
      <div>
        <h1>Hello people</h1>
        <Leaderboards />
      </div>

    )
  }
}

export default App
