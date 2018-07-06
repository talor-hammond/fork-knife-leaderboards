import React from 'react'

import Players from './Players'
import Leaderboards from './Leaderboards'

import { getLeaderboards } from '../apiClient'

import scrollToComponent from 'react-scroll-to-component'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            players: []
        }

        this.refreshLeaderboards = this.refreshLeaderboards.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.refreshLeaderboards()
    }   

    refreshLeaderboards() {
        getLeaderboards()
        .then(players => {
            this.setState({
                players
            })
        })
    }

    handleClick() {
        scrollToComponent(this.refs.appledude, {
            align: 'top',
            duration: 1500
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="bg">
                    <section className="section container">
                        <div className="columns landingColumns">
                            <div className="column is-5 landing">
                                <h1 className="title">fortnite <strong>fights</strong>
                                </h1>
                                <h2 className="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum aspernatur similique cum aperiam at,
                                    repellat incidunt enim necessitatibus ut beatae soluta, quidem dicta placeat commodi, maxime architecto
                        alias quae officia.</h2>
                                <button onClick={() => this.handleClick()} className="button is-danger">Compare players</button>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="hero is-fullheight is-dark is-bold">
                    <div className="container" ref="appledude">
                        <Players refreshLeaderboards={this.refreshLeaderboards()}/>
                        <hr />
                        <Leaderboards players={this.state.players} />
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Home