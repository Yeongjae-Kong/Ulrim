import React, {useState} from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ulrimLogo from './image/ulrimLogo.png';
import Data from './data.js';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import SimpleBottomNavigation from './navigate.js';
import Commu from './community.js';
import Mall from './mall.js';
import Amplify, {API, grahqlOperation} from 'aws-amplify';
import awsconfig from './aws-exports';

function App() {
  let [clothes, clothesChange] = useState([Data]);
  return (
    
    <BrowserRouter>

    <div className="App">
      <Navbar bg="black" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src ={ulrimLogo} height='50px' width='50px' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to='/'>About us</Link></Nav.Link>
            <Nav.Link> <Link to='/shop'> Shop </Link></Nav.Link>
            <Nav.Link> <Link to='/community'>Community </Link></Nav.Link>
            <Nav.Link> <Link to='/exhibition'>Ulrim the Original</Link></Nav.Link>
            <NavDropdown title="Collection" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/august2021">August 2021</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/october2021">October 2021</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div style={{padding:'0px 0px 0px 110px'}}>
            <SimpleBottomNavigation class = 'float-right'></SimpleBottomNavigation>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Route exact path="/"> 
        <div className = "background">
          <div>
          <p className = "content">Not us, Express you<br>
          </br>Show your own style, Ulrim</p>
          </div>
          <div className = "bg-cover">
          </div>
        </div>
        <div>
          <br></br>
          <p className ='text1'></p>
        </div>
      </Route>

      <Route exact path="/shop">
        <Mall></Mall>
      </Route>

      <Route exact path='/community'>
        <Commu></Commu>
      </Route>

      <Route exact path="/exhibition"> 
        <div className = "background2">
        <div>
          <p className = "content">Ulrim the Original</p>
          </div>
          <div className = "bg-cover">
          </div>
        </div>
        <div>
          <br></br>
          <p className ='text1'></p>
        </div>
      </Route>

      <Route exact path='/august2021'>
        <Mall></Mall>
      </Route>

    </div> 
    
    </BrowserRouter>
  );
}

export default App;
