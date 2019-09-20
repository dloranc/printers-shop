import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from './../../../../store/cart/action-creators';

export const Button = styled.button`
    display: block;
    margin: ${props => props.center ? '0 auto' : '0'};
    margin-top: 1em;
    padding: 0.6em 1em;
    color: white;
    background: #007bff;
    border: 0;

    &[disabled] {
        background: #eee;
    }

    :hover {
        background: #118cff;
    }
`;

export class AddToCartButton extends Component {
  addToCart = () => {
    if (this.props.amount > this.props.product.inStock) {
      window.alert(
        'Sorry, but your requested amount of this product exceeds our supply!'
      );
    } else {
      if (this.props.amount > 0) {
        this.props.addToCart({
          ...this.props.product,
          amount: Number.parseInt(this.props.amount),
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
    )
  }
}

export default connect(
  null,
  {
    addToCart
  }
)(AddToCartButton);
