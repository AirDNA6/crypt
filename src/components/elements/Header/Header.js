import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Typical from 'react-typical'


import './Header.css'

const Header = () => {
  return (
    <div>

        {/* <Link to="/">
          <img src="./images/logo.png" alt="crypt-logo" className="rmdb-logo" />
        </Link> */}

        {/* <Nav  className="navPosition">
      <Link to="/" className="navLink">Home</Link>
      <Link to="about" className="navLink">About</Link>
      <Link to="contact" className="navLink">Contact</Link>
    </Nav> */}


    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Link to="/">
          <img src="./images/logo.png" alt="crypt-logo" className="rmdb-logo" />
        </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse pse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Link to="/" className="navLink">HOME</Link>
    <Link to="about" className="navLink">ABOUT</Link>
      <Link to="contact" className="navLink">CONTACT</Link>
      <Link to="faq" className="navLink">FAQ</Link>

    
    </Nav>
    

    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown" className="navLink">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}

    {/* <Nav className="navLink">
    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav> */}

    <Nav>
      <a target="_blank" href="http://www.themoviedb.org"><img src="./images/tmdb.png" alt="tmdb-logo" className="rmdb-tmdb-logo"></img></a>
    </Nav>
  </Navbar.Collapse>
</Navbar>


<Nav className="justify-content-center fontQuanticoHeader" style={{ backgroundColor: "#21d192", color: "#343A40"}}>
  
    <Typical 
        steps={[
          'WELCOME TO CINEMA', 1000,
           'CRYPT', 500,
           'FIND US AT', 500,
           'VOJVODE STEPE 68', 2000
          ]}
        loop={Infinity}
        wrapper="h1"
      />
  </Nav>


      </div>

  )
}

export default Header