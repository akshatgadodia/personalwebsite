import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Container} from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
            <Navbar.Brand href="#Front-Page">Akshat Gadodia</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="#About-Me-Page">Profile</Nav.Link>
                    <Nav.Link href="#Education-Page">Education</Nav.Link>
                    <Nav.Link href="#Abilities-Page">Abilities</Nav.Link>
                    <Nav.Link href="#Projects-Page">Projects</Nav.Link>
                    <Nav.Link href="#Contact-Page">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavigationBar