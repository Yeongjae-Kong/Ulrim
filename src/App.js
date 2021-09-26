import React, {useState} from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {Grid, Box} from '@material-ui/core'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ulrimLogo from './image/ulrimLogo.png';
import Data from './data.js';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import SimpleBottomNavigation from './navigate.js';
import Commu from './community.js';
import Mall from './mall.js';
import KakaoLogin from './kakaologin.js';
import exhib1 from './image/exhib1.jpg';
import exhib2 from './image/exhib2.jpg';
import exhib3 from './image/exhib3.jpg';
import exhib4 from './image/exhib4.jpg';
import exhib5 from './image/exhib5.jpg';
import exhib6 from './image/exhib6.jpg';
import {useTheme, useMediaQuery} from '@material-ui/core';
import Amplify, {API, grahqlOperation} from 'aws-amplify';
import awsconfig from './aws-exports';


function App() {
  let [clothes, clothesChange] = useState([Data]);
  
//media query
const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    
    <BrowserRouter>

    <div className="App">
      <Navbar bg="black" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src ={ulrimLogo} height='50px' width='50px' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to='/' style ={{color:'gray', textDecoration:'none'}}>About us</Link></Nav.Link>
            <Nav.Link> <Link to='/shop' style ={{color:'gray', textDecoration:'none'}}> Shop </Link></Nav.Link>
            <Nav.Link> <Link to='/community' style ={{color:'gray', textDecoration:'none'}}>Community </Link></Nav.Link>
            <Nav.Link> <Link to='/exhibition' style ={{color:'gray', textDecoration:'none'}}>ULRIM the Original</Link></Nav.Link>
            <NavDropdown title="Collection" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/august2021" style ={{color:'gray', textDecoration:'none'}}>August 2021</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/october2021" style ={{color:'gray', textDecoration:'none'}}>October 2021</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Grid alignItems='center' justify = {matches? 'center' : 'flex-end'}>
            <SimpleBottomNavigation ></SimpleBottomNavigation>
          </Grid>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Route exact path="/"> 
        <div className = "background">
          <div>
          <p className = "content">Not us, Express you<br>
          </br>Show your own style, ULRIM</p>
          </div>
          <div className = "bg-cover">
          </div>
        </div>
        <div className="container" style = {{padding:'100px 0px 100px 0px'}}>
          <div className="row">

            <div className="col-md-4">
              <img src={exhib1} width="100%" style={{padding:'50px 20px 50px 20px'}}/>
              <h4>봉산문화회관</h4>
              <p>21.07.26 ~ 21.10.03, 최수환</p>
           </div>

           <div className="col-md-4">
              <img src={exhib2} width="100%" style={{padding:'50px 20px 50px 20px'}}/>
              <h4>국립대구박물관</h4>
              <p>21.07.13 ~ 21.10.10</p>
           </div>

           <div className="col-md-4">
              <img src={exhib3} width="100%" style={{padding:'50px 20px 50px 20px'}}/>
              <h4>대구교육박물관</h4>
              <p>21.06.17 ~ 21.10.17</p>
            </div>
            
            <div className="col-md-4">
              <img src={exhib4} width="100%" style={{padding:'50px 20px 50px 20px'}}/>
              <h4>수창청춘맨숀</h4>
              <p>21.09.23 ~ 21.11.28</p>
           </div>
           
           <div className="col-md-4">
              <img src={exhib5} width="100%" style={{padding:'50px 20px 50px 20px'}}/>
              <h4>대구사진비엔날레</h4>
              <p>21.09.10 ~ 21.11.02</p>
           </div>
           
           <div className="col-md-4">
              <img src={exhib6} width="100%" style={{padding:'50px 20px 50px 20px'}}/>
              <h4>국립해양박물관</h4>
              <p>21.05.18 ~ 21.10.10</p>
           </div>
         </div>
       </div>
      </Route>

      <Route exact path="/shop">
        <Mall></Mall>
      </Route>

      <Route exact path='/account'>
        <KakaoLogin></KakaoLogin>
      </Route>

      <Route exact path='/community'>
        <Commu></Commu>
      </Route>

      <Route exact path="/exhibition"> 
        <div className = "background2">
        <div>
          <h4 className = "content">ULRIM the Original</h4>
          <p className = 'content2'><br></br> Comming Soon</p>
          </div>
          <div className = "bg-cover">
          </div>
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
