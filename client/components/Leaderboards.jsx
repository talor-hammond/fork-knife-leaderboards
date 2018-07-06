import React from 'react'
import db from '../../server/db'

class Leaderboards extends React.Component {
    // REQUIRED:
    constructor(props) {
        super(props)

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
                            db.getLeaderboards()
                                .then(players => {
                                    players.map((player, i) => {
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{player.username}</td>
                                            <td>{player.rating}</td>
                                            <td>{player.kdr}</td>
                                            <td>{player.total_kills}</td>
                                            <td>{player.win_ratio}</td>
                                            <td>{player.total_wins}</td>
                                        </tr>
                                    })
                                })
                        }


                    </tbody>
                </table>
            </React.Fragment>
        )
    }

}

export default Leaderboards