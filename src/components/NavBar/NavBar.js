import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar fixed="top" bg="primary" variant="dark">
                <Container>
                    <Link to="/">
                        <Navbar.Brand as="span">
                            Printers &amp; Faxes Shop
                        </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/sign-up">
                                <Nav.Link as="span">Sign up</Nav.Link>
                            </Link>
                            <Link to="/sign-in">
                                <Nav.Link as="span">Sign in</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar;
