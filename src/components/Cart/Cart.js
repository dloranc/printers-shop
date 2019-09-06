import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import CartProductList from './Product/List/List';

export class Cart extends Component {
  render() {
    return (
      <>
        <h1>Cart</h1>

        <CartProductList/>

        {this.props.products.length > 0 && <Button variant="primary" type="submit">Buy</Button>}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      products: state.cart,
  }
};

export default connect(mapStateToProps)(Cart);
