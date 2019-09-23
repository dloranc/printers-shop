import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';
import CartProductList from './Product/List/List';

export class Cart extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Cart - Printers Shop</title>
        </Helmet>


        <h1>Cart</h1>

        <CartProductList/>

        {this.props.products.length > 0 &&
          <Button variant="primary" type="submit">Order</Button>
        }
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
