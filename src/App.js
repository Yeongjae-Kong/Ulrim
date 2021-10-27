import React, {useState} from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import {Grid} from '@material-ui/core'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ulrimLogo from './image/ulrimLogo.png';
import Main from './main.js'
import Data from './data.js';
import SimpleBottomNavigation from './navigate.js';
import Aboutus from './aboutus.js';
import Artists from './Artists.js';
import Exhibition from './exhibition.js';
import Account from './account.js';
import August2021 from './august2021.js';
import November2021 from './november2021.js';
import Login from './login.js';
import Info from './info.js';
import {useTheme, useMediaQuery} from '@material-ui/core';
import Fade from 'react-reveal/Fade';

function App() {
  let [clothes, clothesChange] = useState([Data]);
  
//media query
const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <BrowserRouter>
    
    <div>

      <Navbar expand="lg">
      <Container className='navcontainer'>
        <Navbar.Brand href="/"><img src ={ulrimLogo} height='50px' width='50px' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto'>
            <Nav.Link className='navlink'> <Link to='/aboutus' style ={{color:'gray', textDecoration:'none'}} >About us</Link></Nav.Link>
            <Nav.Link className='navlink'> <Link to='/shop' style ={{color:'gray', textDecoration:'none'}}> Shop </Link></Nav.Link>
            <Nav.Link className='navlink'> <Link to='/artists' style ={{color:'gray', textDecoration:'none'}}> Artists </Link></Nav.Link>
            <Nav.Link className='navlink'> <Link to='/exhibition' style ={{color:'gray', textDecoration:'none'}}>ULRIM the Original</Link></Nav.Link>
            <NavDropdown className='navlink' title="Collection" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/august2021" style ={{color:'gray', textDecoration:'none'}}>August 2021</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/november2021" style ={{color:'gray', textDecoration:'none'}}>November 2021</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Grid alignItems='center' justify = {matches? 'center' : 'flex-end'}>
            <SimpleBottomNavigation></SimpleBottomNavigation>
          </Grid>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Route exact path="/"> 
      <Main></Main>
      </Route>

      <Route exact path="/aboutus">
        <Aboutus></Aboutus>
      </Route>

      <Route exact path="/shop">
        <August2021></August2021>
      </Route>

      <Route exact path='/artists'>
        <Artists></Artists>
      </Route>

      <Route exact path="/exhibition">
        <Exhibition></Exhibition>
      </Route>

      <Route exact path='/account'>
        <Account></Account>
      </Route>
      
      <Route exact path='/login'>
        <Login></Login>
      </Route>
          
      <Route exact path='/info'>
        <Info></Info>
      </Route>

      <Route exact path='/august2021'>
        <August2021></August2021>
      </Route>

      <Route exact path='/november2021'>
        <November2021></November2021>
      </Route>

    </div> 
    </BrowserRouter>
  );
}

export default App;
