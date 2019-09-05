import React from 'react';
import { Redirect } from 'react-router-dom';

import store from './../../store';

class ScreensCart extends React.Component {
    render() {
        if (store.getState().isAuthenticated) {
            return <h1>You have access to the cart page!</h1>;
        }

        return <Redirect to="/"></Redirect>;
    }
}

export default ScreensCart;
