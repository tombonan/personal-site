import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function TopNav() {
  return (
    <Navbar expand="lg" className="py-4">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={()=> window.open("https://github.com/tombonan", "_blank")}>
            <AiFillGithub size={28}/>
          </Nav.Link>
          <Nav.Link onClick={()=> window.open("https://www.linkedin.com/in/tombonan", "_blank")}>
            <AiFillLinkedin size={28}/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNav;
