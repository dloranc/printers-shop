import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ScreensProduct extends Component {
  render() {
    if (this.props.isAuthenticated) {
      return (
        <div>
          Product { this.props.match.params.id }
        </div>
      )
    }

    return <Redirect to="/"></Redirect>;
  }
}

const mapStateToProps = (state) => {
  return {
      isAuthenticated: state.user.isAuthenticated,
  }
};

export default connect(mapStateToProps)(ScreensProduct);
