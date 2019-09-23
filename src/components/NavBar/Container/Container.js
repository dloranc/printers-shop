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
    isAuthenticated: PropTypes.bool.isRequired,
    role: PropTypes.string.isRequired
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
        role={this.props.role}
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
    role: state.user.role
  };
};

const withRedux = connect(
  mapStateToProps,
  { logout },
)(NavBarContainer);

export default withRouter(withRedux);
