import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa';

const NavbarComponent = () => {

    return (<Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container fluid>
            <Navbar.Brand>Proyecto de 2 hrs</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link>Home</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>
                        <FaShoppingCart />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default NavbarComponent;