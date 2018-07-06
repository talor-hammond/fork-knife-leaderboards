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
        scrollToComponent(this.refs.body, {
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
                                <h1 className="title">Fortnite <strong>Fights</strong>
                                </h1>
                                <p className="description">Fortnite is a <span className="subdescription">battle to be the best!</span> But what happens when you want to compare yourself to your best friend or enemy? Click 
                                <span className="subdescription"> 'Compare players'</span> to see who comes out on top! <br /><br /> 
                                <h3><span className="subdescription">What are you waiting for?</span></h3></p>
                                <br/>
                                <button onClick={() => this.handleClick()} className="button is-danger">Compare players</button>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="hero is-fullheight is-dark is-bold">
                    <div className="container" ref="body">
                        <Players refreshLeaderboards={this.refreshLeaderboards()} />
                        <hr />
                        <Leaderboards players={this.state.players} />
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Home