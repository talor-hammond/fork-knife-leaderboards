import React from 'react'
import { getPlayerData } from '../apiClient'

class Players extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playerOne: {},
            playerTwo: {},
            playersCompared: false,
            winner: ''
        }

        this.getPlayersData = this.getPlayersData.bind(this)
        this.comparePlayers = this.comparePlayers.bind(this)
    }

    getPlayersData(e) {

        e.preventDefault()

        const playerOneName = document.getElementById('playerOneName').value
        const playerOnePlatform = document.getElementById('playerOnePlatform').value
        const playerTwoName = document.getElementById('playerTwoName').value
        const playerTwoPlatform = document.getElementById('playerTwoPlatform').value

        console.log(playerOnePlatform)

        Promise.all([getPlayerData(playerOneName, playerOnePlatform), getPlayerData(playerTwoName, playerTwoPlatform)])
            .then(returns => {
                const [playerOne, playerTwo] = returns

                this.setState({
                    playerOne,
                    playerTwo,
                }, () => {
                    this.comparePlayers()
                })
            })

    }

    comparePlayers() {
        console.log(this.state.playerOne.rating)

        if (this.state.playerOne.rating > this.state.playerTwo.rating) {
            this.setState({
                playersCompared: true,
                winner: this.state.playerOne.username
            }, () => {
                console.log(this.state.winner)
                console.log(this.state.playersCompared)
            })
        } else {
            this.setState({
                playersCompared: true,
                winner: this.state.playerTwo.username
            }, () => {
                console.log(this.state.winner)
                console.log(this.state.playersCompared)
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="mainPage">

                    <div className="hero">
                        <h1 className="title">Enter your players!</h1>
                    </div>

                    <div className="columns">

                        <div className="column is-4">
                            <form>
                                <div className="field">
                                    <img src="https://i.pinimg.com/originals/5b/bb/60/5bbb605bbecbd9a614b1456fe6f2f69b.png" alt="" />
                                    <label className="label">Epic Games Username</label>
                                    <div className="control">
                                        <input id="playerOneName" className="input" type="text" />
                                    </div>
                                </div>

                                <div className="control">
                                    <label className="label">Platform</label>
                                    <div className="select">
                                        <select id="playerOnePlatform">
                                            <option value="psn">PS4</option>
                                            <option value="xb1">Xbox One</option>
                                            <option value="pc">PC</option>
                                        </select>
                                    </div>
                                </div>

                                {this.state.playersCompared && (
                                    <div className="field">
                                        <ul>
                                            <li>Rating: {this.state.playerOne.rating}</li>
                                            <li>KDR: {this.state.playerOne.kdr}</li>
                                            <li>Total kills: {this.state.playerOne.total_kills}</li>
                                            <li>Total wins: {this.state.playerOne.total_wins}</li>
                                            <li>Win ratio: {this.state.playerOne.win_ratio}</li>
                                        </ul>
                                    </div>
                                )}
                            </form>
                        </div>

                        <div className="column fightButtonColumn is-4">
                            <div className="fight">
                                <button onClick={(e) => this.getPlayersData(e)} className="button is-large is-danger">FIGHT</button>
                            </div>
                        </div>

                        <div className="column is-4">

                            <form>
                                <div className="field">
                                    <img src="https://image.fnbr.co/outfit/5b335625bbe87a7e3f6aac35/icon.png" alt="" />
                                    <label className="label">Epic Games Username</label>
                                    <div className="control">
                                        <input id="playerTwoName" className="input" type="text" />
                                    </div>
                                </div>

                                <div className="control">
                                    <label className="label">Platform</label>
                                    <div className="select">
                                        <select id="playerTwoPlatform">
                                            <option value="psn">PS4</option>
                                            <option value="xb1">Xbox One</option>
                                            <option value="pc">PC</option>
                                        </select>
                                    </div>
                                </div>


                                {this.state.playersCompared && (
                                    <div className="field">
                                        <ul>
                                            <li>Rating: {this.state.playerTwo.rating}</li>
                                            <li>KDR: {this.state.playerTwo.kdr}</li>
                                            <li>Total kills: {this.state.playerTwo.total_kills}</li>
                                            <li>Total wins: {this.state.playerTwo.total_wins}</li>
                                            <li>Win ratio: {this.state.playerTwo.win_ratio}</li>
                                        </ul>
                                    </div>
                                )}

                            </form>

                        </div>




                    </div>
                    <div className="columns">
                        <div className="column is-4 is-offset-4">
                            {this.state.playersCompared && (
                                <h1 className="winner">{this.state.winner} wins!</h1>
                            )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Players

