import React, {useState} from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ulrimLogo from './image/ulrimLogo.png';
import Data from './data.js';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import SimpleBottomNavigation from './login.js';
import Commu from './community.js';
import Mall from './mall.js';
import Amplify, {API, grahqlOperation} from 'aws-amplify';
import awsconfig from './aws-exports';

<link href="http://fonts.googleapis.com/earlyaccess/kopubbatang.css" rel="stylesheet">
</link>

function App() {
  let [clothes, clothesChange] = useState([Data]);
  return (
    <div className="App">
      <Navbar bg="black" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src ={ulrimLogo} height='50px' width='50px' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">About us</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/community">Community</Nav.Link>
            <Nav.Link href="/exhibition">Ulrim the Original</Nav.Link>
            <NavDropdown title="Collection" id="basic-nav-dropdown">
              <NavDropdown.Item href="/August2021">August 2021</NavDropdown.Item>
              <NavDropdown.Item href="/September2021">September 2021</NavDropdown.Item>
              <NavDropdown.Item href="/October2021">October 2021</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <SimpleBottomNavigation class = 'float-right'></SimpleBottomNavigation>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <BrowserRouter>
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

      </BrowserRouter>

    </div> 
  );
}

export default App;
