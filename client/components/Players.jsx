import React from 'react'

class Players extends React.Component {
    render() {
        return (
            <div>

                {/* Player One Form */}
                <div className="field">
                    <label className="label">Epic Games Username</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g cheftay" />
                    </div>
                </div>

                <div className="control">
                    <label className="label">Platform</label>
                    <div className="select">
                        <select>
                            <option>PlayStation</option>
                            <option>XBox</option>
                            <option>PC</option>
                        </select>
                    </div>
                </div>

                {/* Player Two Form */}
                <div className="field">
                    <label className="label">Epic Games Username</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="e.g cheftay" />
                    </div>
                </div>

                <div className="control">
                    <label className="label">Platform</label>
                    <div className="select">
                        <select>
                            <option>PlayStation</option>
                            <option>XBox</option>
                            <option>PC</option>
                        </select>
                    </div>
                </div>

                <div className="fight">
                    <a className="button is-large is-danger">FIGHT</a>
                </div>
            </div>
        )
    }
}

export default Players

