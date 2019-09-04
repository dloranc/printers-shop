import React from 'react';
import { Redirect } from 'react-router-dom';

import { store } from './../../store';

import ProductListContainer from './../../components/Product/List/Container/Container';

class ScreensShop extends React.Component {
    render() {
        if (store.getState().isAuthenticated) {
            return <ProductListContainer></ProductListContainer>;
        }

        return <Redirect to="/"></Redirect>;
    }
}

export default ScreensShop;
