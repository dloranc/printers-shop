/* eslint-disable import/first */
import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Can from './../../components/Can/Can'
const ScreensHome = lazy(() => import('./../Home/Home'));
const ScreensShop = lazy(() => import('../Shop/Shop'));
const ScreensProduct = lazy(() => import('../Product/Product'));
const ScreensCart = lazy(() => import('../Cart/Cart'));
const ScreensOrders = lazy(() => import('../Orders/Orders'));
const ScreensInventory = lazy(() => import('../Inventory/Inventory'));
const ScreensNoMatch = lazy(() => import('./../NoMatch/NoMatch'));

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './routeTransition.css';

const routes = [
    { path: '/', name: 'Home', Component: ScreensHome, exact: true, rule: 'home-page:visit', redirect: '/shop' },
    { path: '/shop', name: 'Shop', Component: ScreensShop, exact: false, rule: 'shop-page:visit', redirect: '/' },
    { path: '/product/:id', name: 'Product', Component: ScreensProduct, exact: false, rule: 'product-page:visit', redirect: '/' },
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
                                <Suspense fallback={<div>Loading...</div>}>
                                    <Switch location={this.props.location}>
                                        {routes.map(({ path, exact, Component, rule, redirect }) => (
                                            <Route key={path} exact={exact} path={path}>
                                                {({ match }) => (
                                                    <div className="page">
                                                        <Can
                                                            perform={rule}
                                                            yes={() => <Component match={match}/>}
                                                            no={() => <Redirect to={redirect}/>}
                                                        />
                                                    </div>
                                                )}
                                            </Route>
                                        ))}
                                    </Switch>
                                </Suspense>
                            </CSSTransition>
                        </TransitionGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(ScreensRoot);
