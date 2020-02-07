import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ScreensSignUpForm from '../SignUp/Form';
import ScreensSignInForm from '../SignIn/Form';

import Can from './../../components/Can/Can'
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
    { path: '/', name: 'Home', Component: ScreensHome, exact: true, rule: 'home-page:visit', redirect: '/shop' },
    { path: '/sign-up', name: 'Sign up', Component: ScreensSignUpForm, exact: false, rule: 'sign-up-page:visit', redirect: '/shop' },
    { path: '/sign-in', name: 'Sign in', Component: ScreensSignInForm, exact: false, rule: 'sign-in-page:visit', redirect: '/shop' },
    { path: '/shop', name: 'Shop', Component: ScreensShop, exact: false, rule: 'shop-page:visit', redirect: '/' },
    { path: '/cart', name: 'Cart', Component: ScreensCart, exact: false, rule: 'cart-page:visit', redirect: '/' },
    { path: '/orders', name: 'Orders', Component: ScreensOrders, exact: false, rule: 'orders-page:visit', redirect: '/' },
    { path: '/inventory', name: 'Inventory', Component: ScreensInventory, exact: false, rule: 'inventory-page:visit', redirect: '/shop' },
    { path: null, name: '404', Component: ScreensNoMatch, exact: false, rule: '404-page:visit', redirect: '/' },
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
                                    {routes.map(({ path, exact, Component, rule, redirect }) => (
                                        <Route key={path} exact={exact} path={path}>
                                            {() => (
                                                <div className="page">
                                                    <Can
                                                        perform={rule}
                                                        yes={() => <Component />}
                                                        no={() => <Redirect to={redirect}/>}
                                                    />
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
