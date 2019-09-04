import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import { store } from '../../store';

export class ScreensInventory extends Component {
    render() {
        if (store.getState().isAuthenticated && store.getState().role === 'admin') {
            return <div>Nothing yet here</div>;
        }

        return <Redirect to="/shop"></Redirect>;
    }
}

export default ScreensInventory;
