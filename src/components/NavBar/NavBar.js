import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    isCurrentRoute = (route) => {
        return this.props.location.pathname === route;
    }

    isAuthenticated = () => {
        return this.props.isAuthenticated;
    }

    isAdmin = () => {
        return this.props.role === 'admin';
    }

    authLinks = () => {
        return (
            <>
                <Nav.Link as={Link}
                    to="/sign-up"
                    data-test="sign-up"
                    active={this.isCurrentRoute('/sign-up')}
                >
                    Sign up
                </Nav.Link>

                <Nav.Link as={Link}
                    to="/sign-in"
                    data-test="sign-in"
                    active={this.isCurrentRoute('/sign-in')}
                >
                    Sign in
                </Nav.Link>
            </>
        )
    }

    navigationLinks = () => {
        return (
            <>
                <Nav.Link as={Link}
                    to="/cart"
                    data-test="cart"
                    active={this.isCurrentRoute('/cart')}
                >
                    Cart
                </Nav.Link>

                <Nav.Link as={Link}
                    to="/orders"
                    data-test="orders"
                    active={this.isCurrentRoute('/orders')}
                >
                    Orders
                </Nav.Link>

                {this.adminLinks()}

                <Nav.Link
                    onClick={this.props.onLogout}
                    data-test="logout"
                >
                    Log out
                </Nav.Link>
            </>
        )
    }

    adminLinks = () => {
        if (this.isAdmin()) {
            return (
                <Nav.Link as={Link}
                    to="/inventory"
                    data-test="inventory"
                    active={this.isCurrentRoute('/inventory')}
                >
                    Inventory
                </Nav.Link>
            )
        }

        return null;
    }

    render() {
        return (
            <Navbar fixed="top" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand
                        as={Link}
                        to={this.props.isAuthenticated ? '/shop' : '/'}
                        data-test="brand"
                    >
                        Printers &amp; Faxes Shop
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" role="navigation">
                            {this.isAuthenticated() ? this.navigationLinks() : this.authLinks()}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar;
