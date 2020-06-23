import React from "react";
import { Button, Navbar, Card, CardImg } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import OrderForm from './components/Form.js'


const App = () => {
  return (
    <>
    <Navbar color='info'>
      <h1 style={{ color: 'blue'}}>Medical Marijuana</h1>
      <Link to={'/'}>
        <Button color='info'>
          Home
        </Button>
      </Link>
    </Navbar>
    <Route exact path='/'>
      <Card>
        <Link to={'./info'}>
          <Button color='info' style={{position: 'absolute', left: '50%', top: '50%'}}>
            Strains
          </Button>
        </Link>
      </Card>
    </Route>
    
    <Route path='/info'>
      <OrderForm/>
    </Route>
    
    </>
  );
};
export default App;