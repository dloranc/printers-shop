import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';

import Product from './../../Product/Product';
import { client } from '../../../../utils/client';

const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
`;

const query = {
  query: gql`
    {
      products {
        id,
        type,
        name,
        price,
        inStock
      }
    }
  `
}

export class ProductListContainer extends Component {
    state = {
      products: []
    }

    async componentDidMount() {
      try {
        const response = await client.query(query);

        this.setState({ products: response.data.products });
      } catch (error) {
        console.error(error);
      }
    }

    hasProducts = () => {
      return this.state.products.length;
    }

    showProducts = () => {
      return this.state.products.map(
        product => <Product key={product.id} {...product}></Product>
      );
    }

    showEmptyMessage = () => {
      return 'No products in the store yet.';
    }

    render() {
      return (
        <ProductList>
          {
            this.hasProducts() ? this.showProducts() : this.showEmptyMessage()
          }
        </ProductList>
      );
    }
}

export default ProductListContainer;
