import React, { Component, } from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

class Menu extends Component{
    render(){
        return(
            <Navbar id='navabar' bg="light" expand="lg">
            <Container id='containernavbar'>
                <Link id="EZPC" to="/">EZPC</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link id="home" to="/">Home</Link>
                    <hr></hr>
                    <NavDropdown title="Component" id="basic-nav-dropdown">
                        <Link id="itemDrop" to="/Articles">Graphic Card</Link>
                        <Link id="itemDrop" to="/Articles">Mother Board</Link>
                        <Link id="itemDrop" to="/Articles">Processor</Link>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );
    }
}


export default Menu;