import React, { Component } from 'react';

export class ProductView extends Component {
  render() {
    const { product } = this.props;

    return (
      <>
        <h1>{product.type} {product.name}</h1>

        <div>Price: {product.price}</div>
      </>
    )
  }
}

export default ProductView;
