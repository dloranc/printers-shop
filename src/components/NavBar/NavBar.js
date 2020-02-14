import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Can from '../Can/Can';
import { useAuth0 } from '../../react-auth0-spa';

const NavBar = (props) => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const isCurrentRoute = (route) => {
        return props.location.pathname === route;
    }

    const navigationLinks = () => {
        if (!isAuthenticated) {
            return <Nav.Link as={Link} onClick={() => loginWithRedirect({})}>Log in</Nav.Link>
        }

        return (
            <>
                <Nav.Link as={Link}
                    to="/cart"
                    data-cy="cart"
                    active={isCurrentRoute('/cart')}
                >
                    Cart
                </Nav.Link>

                <Nav.Link as={Link}
                    to="/orders"
                    data-cy="orders"
                    active={isCurrentRoute('/orders')}
                >
                    Orders
                </Nav.Link>

                {adminLinks()}

                <Nav.Link
                    onClick={() => logout()}
                    data-cy="logout"
                >
                    Log out
                </Nav.Link>
            </>
        )
    }

    const adminLinks = () => {
        return (
            <Nav.Link as={Link}
                to="/inventory"
                data-cy="inventory"
                active={isCurrentRoute('/inventory')}
            >
                Inventory
            </Nav.Link>
        )
    }

    const brandLink = route => {
        return <Navbar.Brand
            as={Link}
            to={route}
            data-cy="brand"
        >
            Printers &amp; Faxes Shop
        </Navbar.Brand>
    }

    return (
        <>
            <Navbar fixed="top" bg="primary" variant="dark">
                <Container>
                    <Can
                        perform="shop-page:visit"
                        yes={() => brandLink('/shop')}
                        no={() => brandLink('/')}
                    />

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" role="navigation">
                            {navigationLinks()}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

Navbar.propTypes = {
    location: PropTypes.object.isRequired,
}

export default NavBar;
