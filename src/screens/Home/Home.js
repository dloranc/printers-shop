import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import  { Helmet } from 'react-helmet';

class ScreensHome extends Component {
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
          </div>
        </>
      );
    }

    return <Redirect to="/shop"></Redirect>;
  }
}

const mapStateToProps = (state) => {
  return {
      isAuthenticated: state.user.isAuthenticated,
  }
};

export default connect(mapStateToProps)(ScreensHome);
