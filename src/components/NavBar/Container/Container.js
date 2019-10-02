import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from './../../../store/user/action-creators';
import { isAdmin } from '../../../store/user/selectors';

import Navbar from './../NavBar';

class NavBarContainer extends React.Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired
  }

  handleLogout = () => {
    window.sessionStorage.setItem('is-authenticated', 'false');
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <Navbar
        isAuthenticated={this.props.isAuthenticated}
        isAdmin={this.props.isAdmin}
        logout={this.props.logout}
        onLogout={this.handleLogout}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    isAdmin: isAdmin(state)
  };
};

const withRedux = connect(
  mapStateToProps,
  { logout },
)(NavBarContainer);

export default withRouter(withRedux);
