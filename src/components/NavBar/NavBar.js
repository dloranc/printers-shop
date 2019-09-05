import React from 'react';
import { withRouter } from 'react-router';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';

import { store } from './../../store';

class NavBar extends React.Component {
    logout = () => {
        window.sessionStorage.setItem('is-authenticated', false);
        window.sessionStorage.removeItem('role');
        store.dispatch({ type: 'LOGOUT' });
        this.props.history.push('/');
    }

    isAuthenticated = () => {
        return store.getState().isAuthenticated;
    }

    isAdmin = () => {
        return store.getState().role === 'admin';
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
                {this.isAdmin() && (
                    <Link to="/inventory">
                        <Nav.Link as="span">Inventory</Nav.Link>
                    </Link>
                )}
                <Nav.Link onClick={this.logout}>Log out</Nav.Link>
            </>
        )
    }

    render() {
        return (
            <Navbar fixed="top" bg="primary" variant="dark">
                <Container>
                    <Link to={this.isAuthenticated() ? '/shop' : '/'}>
                        <Navbar.Brand as="span">
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

export default withRouter(NavBar);
