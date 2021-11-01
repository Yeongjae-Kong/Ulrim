import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import {List, Divider} from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import {useTheme, useMediaQuery} from '@material-ui/core';
import './shop.css';


function finish() {
  alert('판매 종료 되었습니다.');
}

function November2021() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <div>
    <div style={{padding:'50px 0px 50px 0px'}}>
    <p align="middle">

    <iframe width={matches? '90%' : '50%'} height={matches? '300' : '515'} src="https://www.youtube.com/embed/Uzx7cnBrFUM"  frameborder="0">이 브라우저는 iframe을 지원하지 않습니다</iframe>
    </p></div>
<div className="container" style={{padding:'100px 50px'}}>
<div className="row">
<Fade delay={500}>
<div className="col-md-6">
  <img src={require('./image/clothes2front.jpg').default} width="100%" alt=''/>
</div>
</Fade>

<Fade delay={500}>
<div className="col-md-6 mt-4" style={{padding:'0px 0px 200px 0px'}}>
  <h4 className="pt-5">ULRIM Project 2</h4>
  <h6>Design by Sehee Moon</h6>
  <p style={{textDecoration:'line-through'}}>109,000 KRW</p>
  <p>20% off => 87,200 KRW</p>
  <a href="http://ulrim.shop/surl/O/13"
        target="_blank"
        rel="noopener noreferrer">
  <button className="btn btn-danger" >Pre-order</button>
  </a>
</div>
</Fade>

<div className="container2">
  <img src={require('./image/moonpage/001.jpg').default} width='100%' alt=''/>
  <img src={require('./image/moonpage/002.jpg').default} width="100%" alt=''/>
  
  <div style={{padding:'50px 0px 50px 0px'}}>
    <p align="middle">

    <iframe width={matches? '90%' : '50%'} height={matches? '300' : '515'} src="https://www.youtube.com/embed/PpBjaxKj9qw"  frameborder="0">이 브라우저는 iframe을 지원하지 않습니다</iframe>
    </p>
  </div>
  <img src={require('./image/moonpage/003.jpg').default} width="100%" alt=''/>
  <img src={require('./image/moonpage/004.jpg').default} width="100%" alt=''/>
  <img src={require('./image/moonpage/005.jpg').default} width="100%" alt=''/>
  <img src={require('./image/moonpage/006.jpg').default} width="100%" alt=''/>
  <img src={require('./image/moonpage/007.jpg').default} width="100%" alt=''/>
  <img src={require('./image/moonpage/008.jpg').default} width="100%" alt=''/>
  </div>
</div>
</div>
</div>);
}

export default November2021;