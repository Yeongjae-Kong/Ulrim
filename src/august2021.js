import InstagramIcon from '@material-ui/icons/Instagram';
import {List, Divider} from '@material-ui/core';
import clothes1Front from './image/clothes1Front.png';
import project1size from './image/project1size.jpg';
import clothes1back from './image/clothes1Back.png';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function finish() {
  alert('판매 종료 되었습니다.');
}

function August2021() {
  return (
  <div className="container" style={{padding:'100px 50px'}}>
  <div className="row">
    <div className="col-md-6">
      <img src={clothes1Front} width="100%" alt='' />
    </div>

    <Fade> 
    <div className="col-md-6 mt-4" style={{padding:'50px 0px 0px 0px'}}>
      <h4 className="pt-5">ULRIM Project 1</h4>
      <h6>Design by Jieun Kim</h6>
      <p>37500 KRW</p>
      <button className="btn btn-danger" onClick={() => finish()}>Pre-order</button>
    </div>
    </Fade>
    <div className="container2">
      <img src={require('./image/jieunProfile.jpg').default} width='90%'/>
      <img src ={project1size} width="100%" alt=''>
      </img>
      <div className='container3'>
      <Fade> 
      <img src={require('./image/ulrimmodel.jpg').default} width="90%"/>
      </Fade>
      </div>
      <div className='container3'>
      <img src ={clothes1Front} width = '100%' alt=''></img>
      </div>
      <div className='container3'>
      <img src ={clothes1back} width = '100%' alt=''></img>
      </div>
      <List
            sx={{
            width: '100%',
            maxWidth: 300,
            bgcolor: 'background.paper',
          }}>
            <div className = 'location'>
              <p style={{fontSize:'24px'}}>ULRIM 서포터즈 모델 착용 이미지</p>
            </div>
        </List>
        <Divider style={{padding:'1px'}}/>
        <div className='instatext' style={{padding:'2rem 0rem 0rem 0rem'}}>
          <a style ={{color:'black', textDecoration:'none'}}
                href="https://www.instagram.com/98.03.05/?hl=ko"
                target="_blank"
                rel="noopener noreferrer">
          <p>{<InstagramIcon/> }98.03.05</p>
          </a>
        </div>
        <img src={require('./image/p1model1.png').default} width='90%' style={{padding:'2rem 1rem'}}/>
        
        
        <div className='instatext' style={{padding:'2rem 0rem 0rem 0rem'}}>
          <a style ={{color:'black', textDecoration:'none'}}
                href="https://www.instagram.com/p/CTSEtwQFRek/"
                target="_blank"
                rel="noopener noreferrer">
          <p>{<InstagramIcon/> }chae_dahaee</p>
          </a>
        </div>
        <img src={require('./image/p1model2.png').default} width='90%' style={{padding:'2rem 1rem'}}/>
        
        
        <div className='instatext' style={{padding:'2rem 0rem 0rem 0rem'}}>
          <a style ={{color:'black', textDecoration:'none'}}
                href="https://www.instagram.com/p/CTRTKBQBbHZ/"
                target="_blank"
                rel="noopener noreferrer">
          <p>{<InstagramIcon/> }do__ki</p>
          </a>
        </div>
        <img src={require('./image/p1model3.png').default} width='90%' style={{padding:'2rem 1rem'}}/>
        
        
        <div className='instatext' style={{padding:'2rem 0rem 0rem 0rem'}}>
          <a style ={{color:'black', textDecoration:'none'}}
                href="https://www.instagram.com/hyejeong__u/"
                target="_blank"
                rel="noopener noreferrer">
          <p>{<InstagramIcon/> }hyejeong__u</p>
          </a>
        </div>
        <img src={require('./image/p1model4.png').default} width='90%' style={{padding:'2rem 1rem'}}/>
        
        <img src={require('./image/p1model5.png').default} width='90%' style={{padding:'2rem 1rem'}}/>
        
        
        <div className='instatext' style={{padding:'2rem 0rem 0rem 0rem'}}>
          <a style ={{color:'black', textDecoration:'none'}}
                href="https://www.instagram.com/y0x_x0n/"
                target="_blank"
                rel="noopener noreferrer">
          <p>{<InstagramIcon/> }y0x_x0n</p>
          </a>
        </div>
        <img src={require('./image/p1model6.png').default} width='90%' style={{padding:'2rem 1rem'}}/>
        
        
        <div className='instatext' style={{padding:'2rem 0rem 0rem 0rem'}}>
          <a style ={{color:'black', textDecoration:'none'}}
                href="https://www.instagram.com/p/CTPMeaRv5a2/"
                target="_blank"
                rel="noopener noreferrer">
          <p>{<InstagramIcon/> }gundododo</p>
          </a>
        </div>
        <img src={require('./image/p1model7.png').default} width='90%' style={{padding:'2rem 1rem'}}/>
        
        
        <div className='instatext' style={{padding:'2rem 0rem 0rem 0rem'}}>
          <a style ={{color:'black', textDecoration:'none'}}
                href="https://www.instagram.com/p/CTO3HANFIqz/"
                target="_blank"
                rel="noopener noreferrer">
          <p>{<InstagramIcon/> }olerror__</p>
          </a>
        </div>
        <img src={require('./image/p1model8.png').default} width='90%' style={{padding:'2rem 1rem'}}/>


    </div>
  </div>
</div>);
}

export default August2021;
