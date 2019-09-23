import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';
import CartProductList from './Product/List/List';

export class Cart extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired,
      amount: PropTypes.number.isRequired
    })).isRequired
  }

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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.cart
  };
};

export default connect(mapStateToProps)(Cart);
