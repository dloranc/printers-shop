import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import  { Helmet } from 'react-helmet';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

class ScreensHome extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  }

  @observable timer = 0;

  render() {
    if (!this.props.isAuthenticated) {
      return (
        <>
          <Helmet>
            <title>Home - Printers Shop</title>
          </Helmet>

          <div className="home">
            <h1>Home</h1>

            <p>Please, sign up or log in to see our products.</p>

            {this.timer}
          </div>
        </>
      );
    }

    return <Redirect to="/shop"></Redirect>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
};

export default connect(mapStateToProps)(ScreensHome);
