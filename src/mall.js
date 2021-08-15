import React, {useState} from 'react'
import clothes1Front from './image/clothes1Front.png';
import project1size from './image/project1size.jpg';
import clothes1back from './image/clothes1Back.png';

export default function Mall() {
    return (
    <div className="container" style={{padding:'150px 100px'}}>
    <div className="row">
      <div className="col-md-6">
      <img src={clothes1Front} width="70%" alt='' />
      </div>

      <div className="col-md-6 mt-4">
      <h4 className="pt-5">ULRIM Project 1</h4>
      <h6>Design by Jieun Kim</h6>
      <p>37500 KRW</p>
      <button className="btn btn-danger">Pre-order</button>
      </div>
      <div className="container2" style={{padding:'50px 50px'}}>
      <img src ={project1size} width="80%" alt=''>
      </img>
      <img src ={clothes1Front} width = '80%' alt='' style={{padding:'100px 0px 100px 0px'}}></img>
      <img src ={clothes1back} width = '80%' alt='' style={{padding:'100px 0px 100px 0px'}}></img>
      </div>
    </div>
  </div>);
}