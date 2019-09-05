import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUpFormScreen from '../SignUp/Form';
import SignInFormScreen from '../SignIn/Form';

import Home from './../Home/Home';
import ScreensShop from '../Shop/Shop';
import ScreensCart from '../Cart/Cart';
import ScreensOrders from '../Orders/Orders';
import ScreensInventory from '../Inventory/Inventory';
import NoMatch from './../NoMatch/NoMatch';

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
                            <Route path="/" exact component={Home}/>
                            <Route path="/sign-up" component={SignUpFormScreen}/>
                            <Route path="/sign-in" component={SignInFormScreen}/>
                            <Route path="/shop" component={ScreensShop}/>
                            <Route path="/cart" component={ScreensCart}/>
                            <Route path="/orders" component={ScreensOrders}/>
                            <Route path="/inventory" component={ScreensInventory}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ScreensRoot;
