import React, { useState } from "react";
import { Button, Navbar, Card, CardImg } from 'reactstrap';
import { Route, Link, Switch } from 'react-router-dom';

// components
import OrderForm from './components/Form.js';
import Login from './components/Login';
import Registration from './components/Registration'
import {LogoutNavbar} from './components/LogoutNavbar'


const App = () => {
  // state
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userId, setUserId] =  useState('')
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
    <Route exact path='/'>
      {/* <Card>
        <Link to={'./info'}>
          <Button color='info' style={{position: 'absolute', left: '50%', top: '50%'}}>
            Strains
          </Button>
        </Link>
      </Card> */}
    </Route>
    <Route path="/login" component={ Login } />
    <Route path="/register" component={ Registration } />
    <Route path='/info'>
      <OrderForm/>
    </Route>
    </Switch>
    </div>
  );
};
export default App;