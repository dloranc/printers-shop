import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from './../../../store/user/action-creators';

import Navbar from './../NavBar';

class NavBarContainer extends React.Component {
    handleLogout = () => {
        window.sessionStorage.setItem('is-authenticated', 'false');
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <Navbar
                isAuthenticated={this.props.isAuthenticated}
                role={this.props.role}
                logout={this.props.logout}
                onLogout={this.handleLogout}
                {...this.props}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.user.isAuthenticated,
        role: state.user.role,
    }
};

const withRedux = connect(
    mapStateToProps,
    { logout },
)(NavBarContainer);

export default withRouter(withRedux);
