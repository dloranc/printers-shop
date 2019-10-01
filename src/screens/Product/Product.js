import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Fetcher } from '../../components/Fetcher/Fetcher';
import ProductView from '../../components/Product/Product/View/View';

class ScreensProduct extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired
  }

  render() {
    if (this.props.isAuthenticated) {
      const productId = this.props.match.params.id;

      const url = `http://localhost:4000/products/${productId}`;

      return (
        <>
          <Helmet>
            <title>Product - Printers Shop</title>
          </Helmet>

          <Fetcher url={url}>
            {({ data, isLoading, error }) => {
              if (isLoading) {
                return <p>Loading...</p>;
              }

              if (error) {
                if (error.response.status === 404) {
                  return <Redirect to='/404'/>;
                }

                return <p>{error.message}</p>;
              }

              if (!isLoading) {
                return <ProductView product={data}/>;
              }
            }}
          </Fetcher>
        </>
      );
    }

    return <Redirect to="/"></Redirect>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(ScreensProduct);
