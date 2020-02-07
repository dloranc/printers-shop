import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from './../../../store/user/action-creators';

import Navbar from './../NavBar';

class NavBarContainer extends React.Component {
    handleLogout = () => {
        const { logout, history: { push } } = this.props
        logout();
        push('/');
    }

    render() {
        const { logout } = this.props

        return (
            <Navbar
                logout={logout}
                onLogout={this.handleLogout}
                {...this.props}
            />
        )
    }
}

const withRedux = connect(
    null,
    { logout },
)(NavBarContainer);

export default withRouter(withRedux);
