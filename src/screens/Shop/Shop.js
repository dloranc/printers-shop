import React from 'react';
import { Redirect } from 'react-router-dom';

class ScreensShop extends React.Component {
    render() {
        if (window.localStorage.getItem('is-authenticated')) {
            return <h1>You have access to the shop page!</h1>;
        }

        return <Redirect to="/"></Redirect>;
    }
}

export default ScreensShop;
