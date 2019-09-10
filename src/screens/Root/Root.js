import React from 'react';
import { Switch, Route } from 'react-router-dom';

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

class ScreensRoot extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Switch>
                            <Route path="/" exact component={ScreensHome}/>
                            <Route path="/sign-up" component={ScreensSignUpForm}/>
                            <Route path="/sign-in" component={ScreensSignInForm}/>
                            <Route path="/shop" component={ScreensShop}/>
                            <Route path="/cart" component={ScreensCart}/>
                            <Route path="/orders" component={ScreensOrders}/>
                            <Route path="/inventory" component={ScreensInventory}/>
                            <Route component={ScreensNoMatch}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ScreensRoot;
