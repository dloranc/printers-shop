import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    isAuthenticated = () => {
        return this.props.isAuthenticated;
    }

    isAdmin = () => {
        return this.props.role === 'admin';
    }

    authLinks = () => {
        return (
            <>
                <Link to="/sign-up">
                    <Nav.Link as="span">Sign up</Nav.Link>
                </Link>
                <Link to="/sign-in">
                    <Nav.Link as="span">Sign in</Nav.Link>
                </Link>
            </>
        )
    }

    navigationLinks = () => {
        return (
            <>
                <Link to="/cart">
                    <Nav.Link as="span">Cart</Nav.Link>
                </Link>

                <Link to="/orders">
                    <Nav.Link as="span">Orders</Nav.Link>
                </Link>

                {this.adminLinks()}

                <Nav.Link onClick={this.props.onLogout}>Log out</Nav.Link>
            </>
        )
    }

    adminLinks = () => {
        if (this.isAdmin()) {
            return (
                <Link to="/inventory">
                    <Nav.Link as="span">Inventory</Nav.Link>
                </Link>
            )
        }

        return null;
    }

    render() {
        return (
            <Navbar fixed="top" bg="primary" variant="dark">
                <Container>
                    <Link to={this.props.isAuthenticated ? '/shop' : '/'}>
                        <Navbar.Brand as="span" data-test="brand">
                            Printers &amp; Faxes Shop
                        </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {this.isAuthenticated() ? this.navigationLinks() : this.authLinks()}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar;
