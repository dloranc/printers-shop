import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Chart from './../../components/Chart/Chart';

export class ScreensInventory extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    role: PropTypes.string.isRequired
  }

  isAuthenticatedAndHasAdminRole = () => {
    return this.props.isAuthenticated && this.props.role === 'admin';
  }

  render() {
    if (this.isAuthenticatedAndHasAdminRole()) {
      return (
        <>
          <Helmet>
            <title>Inventory - Printers Shop</title>
          </Helmet>

          <Chart/>
        </>
      );
    }

    return <Redirect to="/shop"></Redirect>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    role: state.user.role
  };
};

export default connect(mapStateToProps)(ScreensInventory);
