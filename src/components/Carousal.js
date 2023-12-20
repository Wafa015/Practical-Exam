import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS
import image from '../assets/images/Mockup.png';

function Carousal() {
  return (
    <div className='text-light'>
      <Carousel>
        <Carousel.Item style={{ backgroundColor: 'purple' }}>
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <h1 className="mb-4">Web3Makr Redefining How You Create</h1>
            <p className="card-text">Unlock the blockchain potential to create Web3 Applications</p>
            <img
              className="d-block mx-auto car"
              src={image}
              alt="First slide"
              style={{ width: '70%' }} // Adjust the width as needed
            />
          </div>
          <Carousel.Caption>
            {/* Your caption content */}
          </Carousel.Caption>
        </Carousel.Item>
      
      </Carousel>
    </div>
  );
}

export default Carousal;
