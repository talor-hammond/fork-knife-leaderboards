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
                <h1 className="leaderboardsTitle">Leaderboards</h1>
                <table>
                    <tbody>
                        <tr>
                            <th><span className="color">Rank</span></th>
                            <th><span className="color">Username</span></th>
                            <th><span className="color">Rating</span></th>
                            <th><span className="color">KDR</span></th>
                            <th><span className="color">Kills</span></th>
                            <th><span className="color">WR</span></th>
                            <th><span className="color">Wins</span></th>
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