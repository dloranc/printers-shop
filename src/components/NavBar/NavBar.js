import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor() {
        super();

        this.logout = this.logout.bind(this);
    }

    logout() {
        window.sessionStorage.setItem('is-authenticated', 'false');
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <Navbar fixed="top" bg="primary" variant="dark">
                <Container>
                    <Link to={this.props.isAuthenticated ? '/shop' : '/'}>
                        <Navbar.Brand as="span">
                            Printers &amp; Faxes Shop
                        </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {!this.props.isAuthenticated ? (
                                    <>
                                        <Link to="/sign-up">
                                            <Nav.Link as="span">Sign up</Nav.Link>
                                        </Link>
                                        <Link to="/sign-in">
                                            <Nav.Link as="span">Sign in</Nav.Link>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/cart">
                                            <Nav.Link as="span">Cart</Nav.Link>
                                        </Link>
                                        <Link to="/orders">
                                            <Nav.Link as="span">Orders</Nav.Link>
                                        </Link>
                                        {this.props.role === 'admin' ?
                                        (
                                            <Link to="/inventory">
                                                <Nav.Link as="span">Inventory</Nav.Link>
                                            </Link>
                                        ) : (<></>)}
                                        <Nav.Link onClick={this.logout}>Log out</Nav.Link>
                                    </>
                                )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar;
