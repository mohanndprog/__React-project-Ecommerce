import React from 'react';
import './Navs.css';
import {Navbar, Nav , Container} from 'react-bootstrap';
import logo from './../../assets/img/logo.png';

const Navs = ()=>{
    return(
        <Navbar  expand="lg">
            <Container>
                <Navbar.Brand href="#home"> 
                   <img src={logo} title="logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">About</Nav.Link>
                                    <Nav.Link href="#link">explor food</Nav.Link>
                                    <Nav.Link href="#link">Review</Nav.Link>
                                    <Nav.Link href="#link">Faq</Nav.Link>
                        
                            </Nav>
                            <Nav>
                                 <Nav.Link id="lastnav">0598871102</Nav.Link>
                            </Nav>
                    </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}
export default Navs;