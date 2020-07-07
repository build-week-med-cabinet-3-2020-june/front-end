import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

import {LoginContext} from '../context/LoggedIn';

const initialState = {
    email:"email",
    password:"password"
}

export default function LoginForm() {
    const [creds, setCreds] = useState(initialState)
    const { push } = useHistory()
    const { setIsLoggedIn, setUserInfo } = useContext(LoginContext)
    
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
            .post("https://spotify-be-ls.herokuapp.com/auth/login", creds)
            .then(res => {
                console.log("loginForm results: ", res)

                localStorage.setItem("token", res.data.token)
                setIsLoggedIn(true)
                push(`/protected/`)

            })
            .catch(err => {
                console.log(err, err.message)
            })
    }

    return (
        <form onSubmit={handleLogin}>
            <p>Please sign in to coninue.:</p>
                <input
                    type="email"
                    name="email"
                    value={creds.email}
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