import React from 'react'
import Login from './Login'
import Edit from './Edit'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [{
                username: "test@test.com",
                password: "abc",
                curLoggedIn: false,
            }],
            loggedIn: false
        }
    }

    handleLogin = (newState) => {
        this.setState(prev => ({
            ...prev,
            users: [...prev.users, newState.users],
            loggedIn: newState.loggedIn
        }))
    }

    render() {
        return (
            <div>
                {this.state.loggedIn ? (<Login users={this.state}/>):(<Edit />)}
            </div>
        )
    }
}