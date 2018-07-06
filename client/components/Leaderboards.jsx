import React from 'react'
// import db from '../../db'

class Leaderboards extends React.Component {
    // REQUIRED:
    constructor(props) {
        super(props)

        // Starting point:
        // this.state = {
        //     players: []
        // }
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

                        <tr>
                            <td>1</td>
                            <td>Jessie</td>
                            <td>102,345</td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

}

export default Leaderboards