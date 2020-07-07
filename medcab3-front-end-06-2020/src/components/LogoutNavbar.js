import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import { Navbar } from 'reactstrap'


export const LogoutNavbar = ({userInfo, setIsLoggedIn}) => {
    console.log(userInfo)
    const { push } = useHistory();

    const handleLogout = () => {
        localStorage.clear('token');
        setIsLoggedIn(false);
        push("/login")
    }

    return (
        <Navbar color='info'>
            <h1 style={{ color:'blue' }} >Medical Marijuana</h1>
            <Link to={`/protected/${userInfo.id}`}>Home</Link>
    <Link to={`/protected/${userInfo.id}/profile`}>Profile</Link>
            <button className="button" onClick={handleLogout}>
                Logout
            </button>
        </Navbar> 
    )
}