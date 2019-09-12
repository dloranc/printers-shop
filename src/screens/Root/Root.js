import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ScreensSignUpForm from '../SignUp/Form';
import ScreensSignInForm from '../SignIn/Form';

import ScreensHome from './../Home/Home';
import ScreensShop from '../Shop/Shop';
import ScreensCart from '../Cart/Cart';
import ScreensOrders from '../Orders/Orders';
import ScreensInventory from '../Inventory/Inventory';
import ScreensNoMatch from './../NoMatch/NoMatch';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './routeTransition.css';

const routes = [
    { path: '/', name: 'Home', Component: ScreensHome, exact: true },
    { path: '/sign-up', name: 'Sign up', Component: ScreensSignUpForm, exact: false },
    { path: '/sign-in', name: 'Sign in', Component: ScreensSignInForm, exact: false },
    { path: '/shop', name: 'Shop', Component: ScreensShop, exact: false },
    { path: '/cart', name: 'Cart', Component: ScreensCart, exact: false },
    { path: '/orders', name: 'Orders', Component: ScreensOrders, exact: false },
    { path: '/inventory', name: 'Inventory', Component: ScreensInventory, exact: false },
    { path: null, name: '404', Component: ScreensNoMatch, exact: false },
]

class ScreensRoot extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <TransitionGroup>
                            <CSSTransition
                                key={this.props.location.key}
                                timeout={500}
                                classNames="page"
                                mountOnEnter
                                unmountOnExit
                            >
                                <Switch location={this.props.location}>
                                    {routes.map(({ path, exact, Component }) => (
                                        <Route key={path} exact={exact} path={path}>
                                            {({ match }) => (
                                                <div className="page">
                                                    <Component />
                                                </div>
                                            )}
                                        </Route>
                                    ))}
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(ScreensRoot);
