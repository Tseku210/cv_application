import React from 'react'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleLogin = () => {
        const username = document.querySelector(".loginUsername").firstChild.value.toLowerCase();
        const password = document.querySelector(".loginPassword").firstChild.value;
        let obj = {
            username: [{
                username: username,
                password: password,
                curLoggedIn: false,
            }],
            loggedIn: false
        }
        let info = document.querySelector(".loginInfo");
        if (this.props.users.length == 0) {
            info.innerHTML = "Not registered user";
        } else {
            const users = this.props.users.users;
            for (let i = 0; i < users.length; i++) {
                users[i].curLoggedIn = false;
                if (users[i].username == username) {
                    if (users[i].password == password) {
                        obj.username.curLoggedIn = true;
                        this.props.users.loggedIn = true;
                    } else {
                        info.innerHTML = "Password Incorrect";
                    }
                } else {
                    info.innerHTML = "Cannot find the user";
                }
            }
        }
    }

    render() {
        return(
            <div>
                <div className="loginWrapper">
                    <p className="loginInfo"></p>
                    <div className="loginUsername">
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="loginPassword">
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="loginRegister">
                        <button >Register?</button>
                    </div>
                    <button onclick={this.handleLogin}>Login</button>
                </div>
            </div>
        )
    }
}