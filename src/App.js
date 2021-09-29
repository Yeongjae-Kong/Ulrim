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
import August2021 from './august2021.js';
import KakaoLogin from './kakaologin.js';
import socialLogin from './socialLogin.js';
import {List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, useTheme, useMediaQuery} from '@material-ui/core';
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
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand className='navlink' href="/"><img src ={ulrimLogo} height='50px' width='50px' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navlink'> <Link to='/' style ={{color:'gray', textDecoration:'none'}} >About us</Link></Nav.Link>
            <Nav.Link className='navlink'> <Link to='/shop' style ={{color:'gray', textDecoration:'none'}}> Shop </Link></Nav.Link>
            <Nav.Link className='navlink'> <Link to='/community' style ={{color:'gray', textDecoration:'none'}}>Community </Link></Nav.Link>
            <Nav.Link className='navlink'> <Link to='/exhibition' style ={{color:'gray', textDecoration:'none'}}>ULRIM the Original</Link></Nav.Link>
            <NavDropdown className='navlink' title="Collection" id="basic-nav-dropdown">
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

          <List
            sx={{
            width: '100%',
            maxWidth: 300,
            bgcolor: 'background.paper',
          }}>
            <div className = 'location'>
              <p>대구</p>
              <p style={{fontSize:'15px'}}>October, 2021</p>
            </div>

            <Divider style={{padding:'1px'}}/>

            <div className="container" style = {{padding:'50px 0px 50px 0px'}}>
            <div className="row">
            <div className="col-md-4" style={{cursor: 'pointer'}}>
              <a href="https://bongsanart.jung.daegu.kr/main/main.html"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/exhib1.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}} ></img>
              </a>
              <h4>봉산문화회관</h4>
              <p>21.07.26 ~ 21.10.03, 최수환</p>
           </div>

           <div className="col-md-4">
            <a href="https://daegu.museum.go.kr/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/exhib2.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>국립대구박물관</h4>
              <p>21.07.13 ~ 21.10.10</p>
           </div>

           <div className="col-md-4">
            <a href="http://www.dge.go.kr/dme/main.do"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/exhib3.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>대구교육박물관</h4>
              <p>21.06.17 ~ 21.10.17</p>
            </div>
            
            <div className="col-md-4">
              <a href="http://www.suchang.or.kr/su/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/exhib4.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
              </a>
              <h4>수창청춘맨숀</h4>
              <p>21.09.23 ~ 21.11.28</p>
           </div>
           
           <div className="col-md-4">
            <a href="http://www.daeguphoto.com/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/exhib5.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>대구사진비엔날레</h4>
              <p>21.09.10 ~ 21.11.02</p>
           </div>
           
           <div className="col-md-4">
            <a href="https://www.knmm.or.kr/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/exhib6.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>국립해양박물관</h4>
              <p>21.05.18 ~ 21.10.10</p>
           </div>
           </div>
           </div>

           <div className = 'location'>
              <p>부산</p>
              <p style={{fontSize:'15px'}}>October, 2021</p>
            </div>

           <Divider textAlign = 'left' variant="inset" component="li" />
           <div className="container" style = {{padding:'50px 0px 50px 0px'}}>
           <div className="row"><div className="col-md-4">
            <a href="https://galleryjoy.com/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/busanexhib1.png').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>유토피아, 그-행복한 동행</h4>
              <p>21.09.24 ~ 21.10.31</p>
           </div>
           
           <div className="col-md-4">
            <a href="https://www.instagram.com/deepsleepcoffee_/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/busanexhib2.png').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>Pearman Said</h4>
              <p>21.09.04 ~ 21.11.27, 조한솔</p>
           </div>

           <div className="col-md-4">
            <a href="https://www.instagram.com/p/CTl82l-vxpO/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/busanexhib3.png').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>차푸름 개인展</h4>
              <p>21.09.11 ~ 21.10.11</p>
           </div>
           
           <div className="col-md-4">
            <a href="https://www.bscc.or.kr/citizen/01_perfor/?mcode=1001010400&mode=2&no=22752&page=1"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/busanexhib4.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>부산에서 서울로</h4>
              <p>21.09.10 ~ 21.10.24</p>
           </div>
           
           <div className="col-md-4">
            <a href="https://www.instagram.com/p/CR8qH8Zpqqc/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/busanexhib5.png').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>Wave: 집을 오가며 기록한 파도의 얼굴</h4>
              <p>21.07.30 ~ 21.10.03</p>
           </div>
           
           <div className="col-md-4">
            <a href="https://www.goeunmuseum.kr/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/busanexhib6.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>강운구: 사람의 그 때</h4>
              <p>21.09.11 ~ 21.12.26</p>
           </div>
    
           </div>
           </div>
           
           </List>
      </Route>

      <Route exact path="/shop">
        <August2021></August2021>
      </Route>

      <Route exact path='/login'>
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
        <August2021></August2021>
      </Route>

    </div> 
    
    </BrowserRouter>
  );
}

export default App;
