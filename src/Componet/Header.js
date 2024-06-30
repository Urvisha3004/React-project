import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import logo from '../Componet/Image/Screenshot 2024-06-04 134413.png';

function Header() {

  return (
    <>
      <Navbar expand="lg" sticky="top" className="nav_bar">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className='togg_btn' />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto nav_menu my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Link to={'/'} className='text-decoration-none pt-2 font-weight-bold text-white mr-2' style={{ fontSize: '20px' }}>Home</Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#product">Product</Nav.Link>
              <Nav.Link href="#service">Service</Nav.Link>
              <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav>
            <div className="d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center">
              <Button variant="primary" className='btn my-1 my-lg-0 mx-lg-2 w-50 w-lg-25'>
                <Link to={'/Buy'} className='btn_link'>
                  <FaRegUserCircle className='mx-1 ' style={{ fontSize: '22px' }} /> Login
                </Link>
              </Button>
              <Button variant="warning" className='btn my-1 my-lg-0 mx-lg-2 w-50 w-lg-25'>
                <Link to={'/cart'} className='btn_link'>
                  <TiShoppingCart className='mx-1' style={{ fontSize: '22px' }} /> Cart
                </Link>
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
