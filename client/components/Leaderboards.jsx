import React from 'react'

import { getLeaderboards } from '../apiClient'

class Leaderboards extends React.Component {
    // REQUIRED:
    constructor(props) {
        super(props)

        this.state = {
            players: []
        }
    }

    componentDidMount() {
        getLeaderboards()
            .then(players => {
                this.setState({
                    players
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Leaderboards</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Rating</th>
                            <th>KDR</th>
                            <th>Kills</th>
                            <th>WR</th>
                            <th>Wins</th>
                        </tr>

                        {
                            this.state.players.map((player, i) => {

                                        return (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{player.username}</td>
                                                <td>{player.rating}</td>
                                                <td>{player.kdr}</td>
                                                <td>{player.total_kills}</td>
                                                <td>{player.win_ratio}</td>
                                                <td>{player.total_wins}</td>
                                            </tr>
                                        )
                                    })
                                
                        }


                    </tbody>
                </table>
            </React.Fragment>
        )
    }

}

export default Leaderboards