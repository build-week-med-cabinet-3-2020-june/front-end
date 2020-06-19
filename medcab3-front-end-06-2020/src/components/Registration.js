import React from 'react'
import axios from 'axios'

class Registration extends React.Component {
    // login form state
    state = {
        creds: {
            username: "",
            password: "",
            email:""
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
    // register function
    register = e => {
        e.preventDefault();
        axios
            .post("newURL", this.state.creds)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err, err.message)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.register}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.creds.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.creds.password}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="email"
                        name="email"
                        value={this.state.creds.email}
                        onChange={this.handleChanges}
                    />
                    <button>Register</button>
                </form>
            </div>
        )
    }
}

export default Login