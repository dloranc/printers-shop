import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Fetcher } from '../../components/Fetcher/Fetcher';
import ProductView from '../../components/Product/Product/View/View';

class ScreensProduct extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render() {
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
}

export default ScreensProduct;
