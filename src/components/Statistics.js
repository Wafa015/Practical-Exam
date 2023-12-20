import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Image } from 'react-bootstrap';
import img1 from '../assets/images/MetaMask_Fox 1.png';
import img2 from '../assets/images/Group 62.png';
import img3 from '../assets/images/Group 64 (1).png';
import img4 from '../assets/images/moralis_33564_logo 1.png';
import img5 from '../assets/images/Mask group (1).png';
import img6 from '../assets/images/Group 63 (1).png';
import img7 from '../assets/images/#36 2 (2).png';

const containerStyle = {
  background: 'linear-gradient(to right, black, blue)',
  height: '30vh',
};

const cardStyle = {
  backgroundImage: `url(${img7})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '200px',
};

const circleImageStyle = {
  width: '120px',
  height: '120px',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '10px', // Add margin for spacing
};

const Statistics = () => {
  return (
    <Container style={containerStyle}>
      <Row className="justify-content-md-center align-items-center">
        <Col lg={6} md={12} sm={12}>
          <div className="card-body text-center">
            <h1 className="card-title mb-3 text-white">The Future of Web3 NoCode</h1>
            <h5 className="card-text text-white">
              Web3Makr allows you to incorporate top-ranked blockchain platforms into your work through the drag and drop feature.
            </h5>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div className="card" style={cardStyle}>
            <Row>
              <Col xs={4} className="text-center mb-3">
                <Image src={img1} roundedCircle style={circleImageStyle} />
                <p className="text-white">Metamask Support</p>
              </Col>
              <Col xs={4} className="text-center mb-3">
                <Image src={img2} roundedCircle style={circleImageStyle} />
                <p className="text-white">NFT Search</p>
              </Col>
              <Col xs={4} className="text-center mb-3">
                <Image src={img3} roundedCircle style={circleImageStyle} />
                <p className="text-white">Moralis Integration</p>
              </Col>
            </Row>
            <Row>
              <Col xs={4} className="text-center mb-3">
                <Image src={img4} roundedCircle style={circleImageStyle} />
                <p className="text-white">Soladity</p>
              </Col>
              <Col xs={4} className="text-center mb-3">
                <Image src={img5} roundedCircle style={circleImageStyle} />
                <p className="text-white">Ether.js</p>
              </Col>
              <Col xs={4} className="text-center mb-3">
                <Image src={img6} roundedCircle style={circleImageStyle} />
                <p className="text-white">Hardhat</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Statistics;
