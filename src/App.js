import React, {useState} from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {Grid, Box} from '@material-ui/core'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ulrimLogo from './image/ulrimLogo.png';
import Data from './data.js';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import SimpleBottomNavigation from './navigate.js';
import Aboutus from './aboutus.js';
import Artists from './Artists.js';
import Account from './account.js';
import August2021 from './august2021.js';
import November2021 from './november2021.js';
import KakaoLogin from './kakaologin.js';
import Login from './login.js';
import Info from './info.js';
import socialLogin from './socialLogin.js';
import {List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, useTheme, useMediaQuery} from '@material-ui/core';


function App() {
  let [clothes, clothesChange] = useState([Data]);
  
//media query
const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    
    <BrowserRouter> 

    <div className="App">
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src ={ulrimLogo} height='50px' width='50px' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
              <p>경기</p>
              <p style={{fontSize:'15px'}}>October, 2021</p>
            </div>

            <Divider style={{padding:'1px'}}/>

            <div className="container" style = {{padding:'30px 0px 0px 0px'}}>
            <div className="row">
            <div className="col-md-4" style={{cursor: 'pointer'}} style = {{padding:'0px 0px 50px 0px'}}>
              <a href="https://mimesisartmuseum.co.kr/%ED%98%84%EC%9E%AC%EC%A0%84%EC%8B%9CCurrent"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/ggexhib1.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}} ></img>
              </a>
              <h4>흐릿한 풍경</h4>
              <p>21.09.16 ~ 21.10.17, 민병헌</p>
           </div>

           <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
            <a href="http://www.komacon.kr/comicsmuseum/show/plan_view.asp?eh_no=121/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/ggexhib2.gif').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>새로운 연결: 다르게 바라보다</h4>
              <p>21.09.04 ~ 21.10.10</p>
           </div>

           <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
            <a href="https://www.gcf.or.kr/modules/rent/event_fest_view.html?mc_code=1013&db_id=1116&page_type=info_list&hole=&state=exp&p=1&page_detail_type=exhibit"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/ggexhib3.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>평평-팽팽</h4>
              <p>21.09.02 ~ 21.11.07</p>

            </div>
            
            <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
              <a href="https://www.gcf.or.kr/modules/rent/event_fest_view.html?mc_code=1013&db_id=1123&page_type=info_list&hole=&state=ing&p=1&page_detail_type=exhibit"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/ggexhib4.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
              </a>
              <h4>보구곶, 情을 엮다</h4>
              <p>21.09.07 ~ 21.10.16</p>
           </div>
           
           <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
            <a href="https://www.ayac.or.kr/base/ayac/performance/read?performanceNo=2587&menuLevel=2&menuNo=1"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/ggexhib5.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>여행갈까요</h4>
              <p>21.09.02 ~ 21.10.10</p>
           </div>
           
           <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
            <a href="https://www.uilib.go.kr/art/board/view.do?menu_idx=79&manage_idx=73&board_idx=31256&viewPage=1"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/ggexhib6.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>연결: 의정부미술문화축제</h4>
              <p>21.07.28 ~ 21.10.27</p>
           </div>
           </div>
           </div>

            <div className = 'location'>
              <p>대구</p>
              <p style={{fontSize:'15px'}}>October, 2021</p>
            </div>

            <Divider style={{padding:'1px'}}/>

            <div className="container" style = {{padding:'30px 0px 0px 0px'}}>
            <div className="row">
            <div className="col-md-4" style={{cursor: 'pointer'}} style = {{padding:'0px 0px 50px 0px'}}>
              <a href="https://bongsanart.jung.daegu.kr/main/main.html"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/exhib1.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}} ></img>
              </a>
              <h4>봉산문화회관</h4>
              <p>21.07.26 ~ 21.10.03, 최수환</p>
           </div>

           <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
            <a href="https://daegu.museum.go.kr/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/exhib2.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>국립대구박물관</h4>
              <p>21.07.13 ~ 21.10.10</p>
           </div>

           <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
            <a href="http://www.dge.go.kr/dme/main.do"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/exhib3.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>대구교육박물관</h4>
              <p>21.06.17 ~ 21.10.17</p>

            </div>
            
            <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
              <a href="http://www.suchang.or.kr/su/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/exhib4.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
              </a>
              <h4>수창청춘맨숀</h4>
              <p>21.09.23 ~ 21.11.28</p>
           </div>
           
           <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
            <a href="http://www.daeguphoto.com/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/exhib5.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>대구사진비엔날레</h4>
              <p>21.09.10 ~ 21.11.02</p>
           </div>
           
           <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
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

            <Divider style={{padding:'1px'}}/>
           <div className="container" style = {{padding:'50px 0px 50px 0px'}}>
           <div className="row">
           <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
            <a href="https://galleryjoy.com/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/busanexhib1.png').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>유토피아, 그-행복한 동행</h4>
              <p>21.09.24 ~ 21.10.31</p>
           </div>
           
           <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
            <a href="https://www.instagram.com/deepsleepcoffee_/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/busanexhib2.png').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>Pearman Said</h4>
              <p>21.09.04 ~ 21.11.27, 조한솔</p>
           </div>

           <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
            <a href="https://www.instagram.com/p/CTl82l-vxpO/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/busanexhib3.png').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>차푸름 개인展</h4>
              <p>21.09.11 ~ 21.10.11</p>
           </div>
           
           <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
            <a href="https://www.bscc.or.kr/citizen/01_perfor/?mcode=1001010400&mode=2&no=22752&page=1"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/busanexhib4.jpg').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>부산에서 서울로</h4>
              <p>21.09.10 ~ 21.10.24</p>
           </div>
           
           <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
            <a href="https://www.instagram.com/p/CR8qH8Zpqqc/"
                target="_blank"
                rel="noopener noreferrer">
              <img src={require('./image/busanexhib5.png').default} width="90%" style={{padding:'50px 20px 50px 20px'}}/>
            </a>
              <h4>Wave: 집을 오가며 기록한 파도의 얼굴</h4>
              <p>21.07.30 ~ 21.10.03</p>
           </div>
           
           <div className="col-md-4" style = {{padding:'0px 0px 50px 0px'}}>
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

      <Route exact path="/aboutus">
        <Aboutus></Aboutus>
      </Route>

      <Route exact path="/shop">
        <August2021></August2021>
      </Route>


      <Route exact path='/artists'>
        <Artists></Artists>
      </Route>

      <Route exact path='/account'>
        <Account>
        </Account>
      </Route>

      <Route exact path='/kakaologin'>
        <KakaoLogin></KakaoLogin>
      </Route>
      
      <Route exact path='/login'>
        <Login></Login>
      </Route>
          
      <Route exact path='/info'>
        <Info></Info>
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

      <Route exact path='/november2021'>
        <November2021></November2021>
      </Route>

    </div> 
    
    </BrowserRouter>
  );
}

export default App;
