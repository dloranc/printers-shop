import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartAddProductButton from '../../Cart/AddProductButton/AddProductButton';
import { inStock } from './utils';
import { ProductLabel } from './ProductLabel/ProductLabel';
import { ChangeAmount } from './ChangeAmount/ChangeAmount';

const ProductCard = styled.div`
    width: 100%;
    padding: 1em;
    background: #fefefe;
    color: #333;
    box-shadow: 0 0 0.4em #ccc;
`;

const ProductTitle = styled.h2`
    font-weight: lighter;
    margin-bottom: 0.5em;
`;

const ProductRow = styled.div`
    color: #666;
`;

export class Product extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    inStock: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired
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
    return (
      <ProductCard>
        <ProductTitle>{this.props.type} {this.props.name}</ProductTitle>

        <ProductRow>
          <ProductLabel>Price per unit: </ProductLabel>
          ${this.props.price}
        </ProductRow>

        <ProductRow>
          <ProductLabel>In stock: </ProductLabel>
          {inStock(this.props.inStock)}
        </ProductRow>

        <ChangeAmount amount={this.state.amount} onChange={this.handleChange}/>

        <ProductRow>
          <ProductLabel>Price: </ProductLabel>
          ${this.state.amount * this.props.price}
        </ProductRow>

        <Link to={'/product/' + this.props.id}>View product</Link>

        <CartAddProductButton
          center
          amount={this.state.amount}
          product={
            {
              id: this.props.id,
              name: this.props.name,
              type: this.props.type,
              price: this.props.price,
              inStock: this.props.inStock
            }
          }
        />
      </ProductCard>
    );
  }
}

export default Product;
