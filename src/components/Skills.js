import React from 'react';
import Image from 'react-bootstrap/Image';
import skill1 from '../assets/images/skill1.png'
import skill2 from '../assets/images/img2.png'
import skill3 from '../assets/images/img3.png'


export default function Skills(){
    return(
        < >
        <div className='skillcolor p-3'>
         <br />
         
     <h1 className=' skillhead fw-bold'> Skills</h1>
     <div className=" my-4 container-fluid ">
      <div className='row'>
        <div className="justify-content-center text-center col-lg-6 col-md-6 col-sm-6">
         <Image className='Aimg' src={skill1} alt="h22ee" />
         <p className='skillfont'>Operating Systems</p>
        </div>
        <div className="justify-content-center text-center col-lg-6 col-md-6 col-sm-6">
        <Image className='Aimg' src={skill2} alt="h22ee" />
        <p className='skillfont'>Data Strunctures</p>
        
        </div>
        </div>
        <div className='my-5 row'>
        <div className="my-4 justify-content-center text-center col-lg-6 col-md-6 col-sm-6">
         <Image className='Aimg' src={skill3} alt="h22ee" />
         <p className='skillfont'>Database</p>
        
        </div>
        <div className="justify-content-center text-center col-lg-6 col-md-6 col-sm-6">
        <Image className='Aimg' src={skill3} alt="h22ee" />
        <p className='skillfont'>Problem Solving</p>
        
        </div>
        </div>
        </div>   
        </div>
     </>)
}