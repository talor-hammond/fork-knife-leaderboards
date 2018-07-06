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

  // do the stuff
  doStuff() {
    this.setState({
      usersSubmitted: true,
      playerOne: {
        name,
        kdr,
        winRatio,
        rating: 120.4 // something where we multiply kdr and winRatio to get; use to rate players 
      },
      playerTwo: {
        name,
        kdr,
        winRatio,
        rating: 110.4 // something where we multiply kdr and winRatio to get; use to rate players 
      }
    })
  }
}
 
export default App