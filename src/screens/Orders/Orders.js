import React from 'react';
import { Redirect } from 'react-router-dom';

class ScreensOrders extends React.Component {
    render() {
        if (window.localStorage.getItem('is-authenticated')) {
            return <h1>You have access to the orders page!</h1>;
        }

        return <Redirect to="/"></Redirect>;
    }
}

export default ScreensOrders;
