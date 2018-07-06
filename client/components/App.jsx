import React from 'react'

import { getFruits } from '../apiClient'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount () {

  // }

  render() {
    return (

      <React.Fragment>
        <h1>Hello people</h1>
      </React.Fragment>

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
