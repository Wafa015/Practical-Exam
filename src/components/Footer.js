import React from 'react';
import { Nav, Button, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4">
      <Row>
        <Col lg={4} className="d-flex align-items-center justify-content-center">
          <Link to={'/'}>
            <Image src={logo} alt="" />
          </Link>
        </Col>
        <Col lg={8}>
          <Nav className="head me-auto mx-5">
            <Nav.Link className='mx-3 fw-bold' style={{ color: 'white' }}>Web3Makr</Nav.Link>
            <Nav.Link className='mx-3 fw-bold' style={{ color: 'white' }}>WhitePaper</Nav.Link>
            <Nav.Link className=' mx-3 fw-bold' style={{ color: 'white' }}>Services</Nav.Link>
            <Nav.Link className=' mx-3 fw-bold' style={{ color: 'white' }}>Tool</Nav.Link>
            <Nav.Link className=' mx-3 fw-bold' style={{ color: 'white' }}>Contacts</Nav.Link>

            <div className="ms-3">
              <Button variant="outline-info">Getstarted</Button>{' '}
            </div>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
