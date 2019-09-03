import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import ScreensRoot from './screens/Root';

function App() {
    return (
        <>
            <Router>
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

                <ScreensRoot/>
            </Router>
        </>
    );
}

export default App;
