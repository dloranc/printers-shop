import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Fetcher } from '../../components/Fetcher/Fetcher';
import ProductView from '../../components/Product/Product/View/View';

class ScreensProduct extends Component {
  render() {
    if (this.props.isAuthenticated) {
      const productId = this.props.match.params.id;

      const url = `http://localhost:4000/products/${productId}`;

      return (
        <Fetcher url={url}>
          {({ data, isLoading, error }) => {
            if (isLoading) {
              return <p>Loading...</p>
            }

            if (error) {
              return <p>{error.message}</p>
            }

            if (!isLoading) {
              return <ProductView product={data}/>
            }
          }}
        </Fetcher>
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
