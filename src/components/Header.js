import Container from 'react-bootstrap/Container';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import logo from '../assets/images/logo3-308b1b4999411a4297e11dc8f97f4b88 1 - Copy.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar expand="lg" className="" style={{ backgroundColor: 'black' }}>
    <Container>
      <div className=" container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className='col-lg-4'>
            <Link to={'/'}>
              <Image src={logo} alt="" />
            </Link>
          </div>
          <div className='col-lg-8'>
            <Nav className="head me-auto mx-5">
              <Nav.Link className='mx-3 fw-bold' style={{ color: 'white' }}>Web3Makr</Nav.Link>
              <Nav.Link className='mx-3 fw-bold' style={{ color: 'white' }}>WhitePaper</Nav.Link>
              <Nav.Link className=' mx-3 fw-bold' style={{ color: 'white' }}> Services</Nav.Link>
              <Nav.Link className=' mx-3 fw-bold' style={{ color: 'white' }}> Tool</Nav.Link>
              <Nav.Link className=' mx-3 fw-bold' style={{ color: 'white' }}> Contacts</Nav.Link>

              <div className="ms-3">
              <Button variant="outline-info">Getstarted</Button>{' '}
              </div>
            </Nav>
          </div>
        </Navbar.Collapse>
      </div>
    </Container>
  </Navbar>
  );
};
