import React from 'react'

export default class Login extends React.Component {
    render() {
        return(
            <div>
                <div className="loginWrapper">
                    <div className="loginName">
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className="loginUsername">
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="loginPassword">
                        <input type="text" placeholder="Password"/>
                    </div>
                    <button onclick={this.handleRegister}>Register</button>
                </div>
            </div>
        )
    }
}