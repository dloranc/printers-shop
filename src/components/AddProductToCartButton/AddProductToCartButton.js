import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from '../../store/cart/action-creators';

const isTomatoTheme = () => {
  const theme = window.localStorage.getItem('theme');
  return theme === 'tomato';
}

export const Button = styled.button`
  display: block;
  margin: ${props => props.center ? '0 auto' : '0'};
  margin-top: 1em;
  padding: 0.6em 1em;
  color: white;
  background: ${isTomatoTheme() ? '#FF6347' : '#007bff'};
  border: 0;

  &[disabled] {
    background: #eee;
  }

  :hover {
    background: ${isTomatoTheme() ? '#fa2600' : '#118cff'};
  }
`;

export class AddProductToCartButton extends Component {
  static propTypes = {
    amount: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    center: PropTypes.bool
  }

  addToCart = () => {
    if (this.props.amount > this.props.product.inStock) {
      window.alert(
        'Sorry, but your requested amount of this product exceeds our supply!'
      );
    } else {
      if (this.props.amount > 0) {
        this.props.addToCart({
          ...this.props.product,
          amount: Number.parseInt(this.props.amount)
        });

        window.alert('Added to cart!');
      }
    }
  }

  render() {
    return (
      <Button
        disabled={this.props.amount === 0}
        onClick={this.addToCart}
        center={this.props.center}
      >
        Add to cart
      </Button>
    );
  }
}

export default connect(
  null,
  {
    addToCart
  }
)(AddProductToCartButton);
