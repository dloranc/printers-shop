import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from './../../../store/user/action-creators';

import Navbar from './../NavBar';

class NavBarContainer extends React.Component {
    static propTypes = {
        logout: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
      }

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
