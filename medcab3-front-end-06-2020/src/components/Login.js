import React, { useContext } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

import { LoginContext } from '../context/LoggedIn'

// Going to keep this and try to practice using 
// context with class components



class Login extends React.Component {
    
    // login form state
    state = {
        creds: {
            eamil: "email",
            password: "password"
        }
    };

    // handler for typing in form
    handleChanges = e => {
        this.setState({
            creds: {
                ...this.state.creds,
                [e.target.name]: e.target.value
            }
        })
    }
    // login function
    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("https://spotify-be-ls.herokuapp.com/auth/login", this.state.creds)
            .then(res => {
                console.log(res)

                localStorage.setItem("token", res.data.token)
                // need to get unique ids for each user
                // currently no user id exists
                localStorage.setItem('id', res.data.user.id)
                this.setIsLoggedIn(true)
                this.props.history.push(`/protected/${res.data.user.id}`)

            })
            .catch(err => {
                console.log(err, err.message)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                <p>Please sign in to coninue.:</p>
                    <input
                        type="email"
                        name="email"
                        value={this.state.creds.email}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.creds.password}
                        onChange={this.handleChanges}
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login