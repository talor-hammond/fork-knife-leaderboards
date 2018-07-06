import React from 'react'
 
// importing superagent
// import request from 'superagent'
 
// import { getPlayersData } from '../apiClient'
 
// Components
import Players from './Players'
// import Leaderboards from './Leaderboards'
 
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
        <Players />
        {/* <Leaderboards /> */}
      </div>
 
    )
  }
}
 
export default App