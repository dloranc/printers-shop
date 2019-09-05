import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductListContainer from './../../components/Product/List/Container/Container';

class ScreensShop extends React.Component {
    render() {
        if (this.props.isAuthenticated) {
            return <ProductListContainer></ProductListContainer>;
        }

        return <Redirect to="/"></Redirect>;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
    }
};

export default connect(mapStateToProps)(ScreensShop);
