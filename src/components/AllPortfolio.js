import React from 'react';
import Image from 'react-bootstrap/Image';

import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';
export default function Portfolio(){
return(
    < >

<div className='portcolor '>
         <br />
         
     <div className="my-4 container  ">
     <h1 className=' skillhead fw-bold'> Portfolio</h1>
     
      <div className='row'>
        <div className=" justify-content-center text-center col-lg-4 col-md-4 col-sm-12">
         <Image className='Aimg' src={p1} alt="h22ee" />
         <p className= 'my-3 skillfont fw-bold'>Traffic Management System</p>
         <p className=' '>using semaphore technology , designed to efficiently control and regulate the flow of traffic at intersections, pedestrian crossings, and other key points on the road network.</p>
        </div>
        <div className=" justify-content-center text-center col-lg-4 col-md-4 col-sm-12">
        <Image className='Aimg' src={p2} alt="h22ee" />
        <p className='my-3 skillfont fw-bold'>Contacts Management System</p>
        <p className=''>designed to help individuals and organizations efficiently organize and access their contact information , allowing users to store, categorize, search for, and update contact details easily.</p>
        </div>
        <div className="justify-content-center text-center col-lg-4 col-md-4 col-sm-12">
        <Image className='Aimg' src={p3} alt="h22ee" />
        <p className='my-3 skillfont fw-bold'>Clothes Rental System</p>
        <p className=' my-4'> It facilitates the process of renting clothes for special occasions, events, or everyday wear. Users can browse available clothing options, select items, schedule rentals, and track the status of their orders.</p>
        
        </div>
        </div>
        </div>   
        </div>

    </>
)


}