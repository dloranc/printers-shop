import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { inStock } from '../utils';
import ChangeAmount from './../ChangeAmount/ChangeAmount';
import CartAddProductButton from
  '../../../Cart/AddProductButton/AddProductButton';

export class ProductView extends Component {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
      ]),
      inStock: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
      ])
    }).isRequired
  }

  state = {
    amount: 1
  }

  handleChange = event => {
    const value = event.target.value;

    if (value < 0) {
      this.setState({ amount: 0 });
    } else {
      this.setState({ amount: value });
    }
  }

  render() {
    const { product } = this.props;

    return (
      <>
        <Helmet>
          <title>{product.type} {product.name} - Printers Shop</title>
        </Helmet>

        <h1>{product.type} {product.name}</h1>

        <div>Price per unit: ${product.price}</div>

        <div>In stock: {inStock(product.inStock)}</div>

        <ChangeAmount amount={this.state.amount} onChange={this.handleChange}/>

        <div>Price: ${this.state.amount * product.price}</div>

        <CartAddProductButton amount={this.state.amount} product={product}/>
      </>
    );
  }
}

export default ProductView;
