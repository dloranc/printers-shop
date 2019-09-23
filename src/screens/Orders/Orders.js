import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

class ScreensOrders extends React.Component {
    render() {
        if (this.props.isAuthenticated) {
            return (
                <>
                    <Helmet>
                        <title>Orders - Printers Shop</title>
                    </Helmet>

                    <h1>You have access to the orders page!</h1>
                </>
            );
        }

        return <Redirect to="/"></Redirect>;
    }
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
    }
};

export default connect(mapStateToProps)(ScreensOrders);
