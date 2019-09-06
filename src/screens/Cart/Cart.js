import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ScreensCart extends React.Component {
    render() {
        if (this.props.isAuthenticated) {
            return <h1>You have access to the cart page!</h1>;
        }

        return <Redirect to="/"></Redirect>;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
    }
};

export default connect(mapStateToProps)(ScreensCart);
