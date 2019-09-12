import React, { Component } from 'react'
import { connect } from 'react-redux';

export class CartProductList extends Component {
  showProductList = () => {
    return (
      <>
        {this.props.products.map(product => (
          <div key={product.id}>{product.name}</div>
        ))}

        <div>Total price: {this.showTotalPrice()}</div>
      </>
    )
  }

  showCartIsEmpty = () => {
    return <p>Your cart is empty!</p>;
  }

  showTotalPrice = () => {
    return this.props.products.reduce((sum, product) => sum + product.amount * product.price, 0);
  }

  render() {
    return this.props.products.length > 0 ? this.showProductList() : this.showCartIsEmpty()
  }
}

const mapStateToProps = (state) => {
  return {
      products: state.cart,
  }
};

export default connect(mapStateToProps)(CartProductList);
