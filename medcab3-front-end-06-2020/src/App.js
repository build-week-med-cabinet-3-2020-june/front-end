import React, { useState, useEffect } from "react";
import { Button, Navbar, Card, CardImg } from 'reactstrap';
import { Route, Link, Switch } from 'react-router-dom';

// components
import OrderForm from './components/Form.js';
import LoginForm from "./components/LoginForm.js";
import Registration from './components/Registration'
import PrivateRoute from './components/PrivateRoute'
import {LogoutNavbar} from './components/LogoutNavbar'

// context
import {LoginContext} from './context/LoggedIn'
import { axiosWithAuth } from "./utils/axiosWithAuth.js";



const App = () => {
  // state
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] =  useState('')
  const apiUrl = 'http://localhost:5000/api/strains/'

  const loginStatus = () => {
    localStorage.getItem('token') &&
    setIsLoggedIn(true)
  }

  useEffect(() => {
    loginStatus()
    localStorage.getItem('id') &&
    setUserId(localStorage.getItem('id'))
  }, [isLoggedIn, userId])

  const handleSubmit= (e) => {
    e.preventDefault()
    axiosWithAuth()
      .get(apiUrl)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <div className="App">
    {/* Login status will determine which header to render */}
    {
          !isLoggedIn ? 
              <Navbar color='info'>
                <h1 style={{ color:'blue' }} >Medical Marijuana</h1>
                <Link to="/">Home</Link>
                <Link to="/Register">Register</Link>
                <Link to="/Login">Login</Link>
            </Navbar> 
          :
            <LogoutNavbar
              userId={userId}
              setIsLoggedIn={setIsLoggedIn}
            />
        }
     
        {/* <Navbar color='info'>
         <h1 style={{ color: 'blue'}}>Meical Marijuana</h1>
          <Link to={'/'}>
          <Button color='info'>
            Home
          </Button>
        </Link>
      <Link to={'/login'}>
        <Button color='info'>
          Login
        </Button>
      </Link>
      </Navbar> */}
      
      
     
    
    <Switch>
    <PrivateRoute path="/protected" component={ OrderForm } handleSubmit={handleSubmit} />
    <Route exact path='/'>
      {/* <Card>
        <Link to={'./info'}>
          <Button color='info' style={{position: 'absolute', left: '50%', top: '50%'}}>
            Strains
          </Button>
        </Link>
      </Card> */}
    </Route>
    <Route path="/Register" component={ Registration } />
    <LoginContext.Provider value={{setIsLoggedIn}}>
      <Route path="/Login" component={LoginForm} setIsLoggedIn={setIsLoggedIn} />
    </LoginContext.Provider>
    
    </Switch>
    </div>
  );
};
export default App;