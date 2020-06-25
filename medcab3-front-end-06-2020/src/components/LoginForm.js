import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

import {LoginContext} from '../context/LoggedIn';

const initialState = {
    username:"username",
    password:"password"
}

export default function LoginForm() {
    const [creds, setCreds] = useState(initialState)
    const { push } = useHistory()
    const { setIsLoggedIn } = useContext(LoginContext)
    
    const handleChanges = e => {
        setCreds({            
            ...creds,
            [e.target.name]: e.target.value            
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(creds)
        axiosWithAuth()
            .post("http://localhost:5000/api/auth/login", creds)
            .then(res => {
                console.log(res)

                localStorage.setItem("token", res.data.token)
                // need to get unique ids for each user
                // currently no user id exists
                localStorage.setItem('id', res.data.id)
                setIsLoggedIn(true)
                push(`/protected/${res.data.id}`)

            })
            .catch(err => {
                console.log(err, err.message)
            })
    }

    return (
        <form onSubmit={handleLogin}>
            <p>Please sign in to coninue.:</p>
                <input
                    type="text"
                    name="username"
                    value={creds.username}
                    onChange={handleChanges}
                />
                <input
                    type="password"
                    name="password"
                    value={creds.password}
                    onChange={handleChanges}
                />
                <button>Log In</button>
        </form>
        
    )
}