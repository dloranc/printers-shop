import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUpFormScreen from './../SignUp/Form';
import SignInFormScreen from './../SignIn/Form';
import Home from './../Home';
import ShopScreen from './../Shop/Shop';
import NoMatch from './../NoMatch';

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
                            <Route path="/sign-up" exact component={SignUpFormScreen}/>
                            <Route path="/sign-in" exact component={SignInFormScreen}/>
                            <Route path="/shop" exact component={ShopScreen}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ScreensRoot;
