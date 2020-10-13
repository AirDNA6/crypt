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


    <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
    <Link to="/">
          <img src="./images/logo.png" alt="crypt-logo" className="rmdb-logo" />
        </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse pse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Link to="/" className="navLink mt-2">HOME</Link>
    <Link to="nowplaying" className="navLink mt-2">NOW PLAYING</Link>
    <NavDropdown title="SPECIAL EVENTS" id="basic-nav-dropdown" className="navLink">

        <NavDropdown.Item>
        <Link to="mx4d2000">2000s Movies MX4D</Link>

        </NavDropdown.Item>

        <NavDropdown.Item>
        <Link to="halltwo">Marvel Night</Link>

        </NavDropdown.Item>

        <NavDropdown.Item>
        <Link to="hallthree">DC Night</Link>

        </NavDropdown.Item>
        </NavDropdown>
       
    <Link to="halls" className="navLink mt-2">HALL INFO</Link>
    <Link to="about" className="navLink mt-2">ABOUT</Link>
      <Link to="contact" className="navLink mt-2">CONTACT US</Link>
      <Link to="faq" className="navLink mt-2">FAQ</Link>

      <NavDropdown title="HALLS" id="basic-nav-dropdown" className="navLink">

        <NavDropdown.Item>
        <Link to="hallone">HALL 1</Link>

        </NavDropdown.Item>

        <NavDropdown.Item>
        <Link to="halltwo">HALL 2</Link>

        </NavDropdown.Item>

        <NavDropdown.Item>
        <Link to="hallthree">HALL 3</Link>

        </NavDropdown.Item>

        <NavDropdown.Item>
        <Link to="hallfour">HALL 4</Link>

        </NavDropdown.Item>

        <NavDropdown.Item>
        <Link to="hallfive">HALL 5</Link>

        </NavDropdown.Item>

        <NavDropdown.Item>
        <Link to="hallsix">HALL 6</Link>

        </NavDropdown.Item>

        {/* <NavDropdown.Item href="#action/3.3">
        <Link to="contact">Hall 2</Link>
        </NavDropdown.Item> */}

        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>      
    </Nav>

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