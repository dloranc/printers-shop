import React from 'react';
import { Redirect } from 'react-router-dom';

import { store } from './../../store';

class ScreensOrders extends React.Component {
    render() {
        const isAuthenticated = store.getState().isAuthenticated;

        if (isAuthenticated) {
            return <h1>You have access to the orders page!</h1>;
        }

        return <Redirect to="/"></Redirect>;
    }
}

export default ScreensOrders;
