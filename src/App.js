import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import SignUpFormScreen from './screens/SignUp/Form';
import Home from './screens/Home';
import NoMatch from './screens/NoMatch';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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

                <Container>
                    <Row>
                        <Col>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/sign-up" exact component={SignUpFormScreen}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </>
    );
}

export default App;
