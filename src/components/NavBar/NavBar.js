import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Can from '../Can/Can';

class NavBar extends React.Component {
    static propTypes = {
        logout: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        onLogout: PropTypes.func.isRequired
    }

    isCurrentRoute = (route) => {
        return this.props.location.pathname === route;
    }

    authLinks = () => {
        return (
            <>
                <Nav.Link as={Link}
                    to="/sign-up"
                    data-cy="sign-up"
                    active={this.isCurrentRoute('/sign-up')}
                >
                    Sign up
                </Nav.Link>

                <Nav.Link as={Link}
                    to="/sign-in"
                    data-cy="sign-in"
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
                    data-cy="cart"
                    active={this.isCurrentRoute('/cart')}
                >
                    Cart
                </Nav.Link>

                <Nav.Link as={Link}
                    to="/orders"
                    data-cy="orders"
                    active={this.isCurrentRoute('/orders')}
                >
                    Orders
                </Nav.Link>

                {this.adminLinks()}

                <Nav.Link
                    onClick={this.props.onLogout}
                    data-cy="logout"
                >
                    Log out
                </Nav.Link>
            </>
        )
    }

    adminLinks = () => {
        return (
            <Nav.Link as={Link}
                to="/inventory"
                data-cy="inventory"
                active={this.isCurrentRoute('/inventory')}
            >
                Inventory
            </Nav.Link>
        )
    }

    brandLink = route => {
        return <Navbar.Brand
            as={Link}
            to={route}
            data-cy="brand"
        >
            Printers &amp; Faxes Shop
        </Navbar.Brand>
    }

    render() {
        return (
            <Navbar fixed="top" bg="primary" variant="dark">
                <Container>
                    <Can
                        perform="shop-page:visit"
                        yes={() => this.brandLink('/shop')}
                        no={() => this.brandLink('/')}
                    />

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" role="navigation">
                            <Can
                                perform="shop-page:visit"
                                yes={() => this.navigationLinks()}
                                no={() => this.authLinks()}
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar;
