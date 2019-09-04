import React from 'react';
import { Redirect } from 'react-router-dom';

import { store } from './../../store';

class ScreensShop extends React.Component {
    render() {
        if (store.getState()) {
            return <h1>You have access to the shop page!</h1>;
        }

        return <Redirect to="/"></Redirect>;
    }
}

export default ScreensShop;
