import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ScreensHome extends Component {
  render() {
    if (!this.props.isAuthenticated) {
      return (
        <div className="home">
          <h1>Home</h1>

          <p>Please, sign up or log in to see our products.</p>
        </div>
      );
    }

    return <Redirect to="/shop"></Redirect>;
  }
}

const mapStateToProps = (state) => {
  return {
      isAuthenticated: state.isAuthenticated,
  }
};

export default connect(mapStateToProps)(ScreensHome);
