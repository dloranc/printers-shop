import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Cart from './../../components/Cart/Cart';

class ScreensCart extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Cart/>;
    }

    return <Redirect to="/"></Redirect>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
};

export default connect(mapStateToProps)(ScreensCart);
