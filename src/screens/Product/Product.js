import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { gql } from 'apollo-boost';
import ProductView from '../../components/Product/Product/View/View';
import { client } from '../../utils/client';


class ScreensProduct extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    isLoading: true,
    product: null,
  }

  async componentDidMount() {
    const productId = this.props.match.params.id;

    const query = {
      query: gql`
        {
          productById(id: "${productId}") {
            id,
            type,
            name,
            price,
            inStock
          }
        }
      `
    }

    try {
      const response = await client.query(query);
      const product = response.data.productById;

      if (product) {
        this.setState({ product: response.data.productById, isLoading: false });
      } else {
        this.setState({ isLoading: false });
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { isLoading, product } = this.state

    return (
      <>
        <Helmet>
          <title>Product - Printers Shop</title>
        </Helmet>

      {!isLoading && product && <ProductView product={product}/>}
      {!isLoading && !product && <Redirect to='/404'/>}
      </>
    );
  }
}

export default ScreensProduct;
