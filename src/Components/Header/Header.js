import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './bootstrap.min.css';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Ukemy</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">My courses</Nav.Link>
      <Nav.Link href="#features">Keep shopping</Nav.Link>
      <Nav.Link href="#pricing">Categories</Nav.Link>
    </Nav>
   
  </Navbar>

  

        </div>
    );
};

export default Navigation;