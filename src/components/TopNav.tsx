import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

interface Props {
    navClass: string,
}

const TopNav: React.FC<Props> = ({ navClass }) => {
  return (
    <Navbar expand="lg" fixed="top" className={`py-3 ${navClass}`}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/fonts">Web Fonts</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
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
};

export default TopNav;
