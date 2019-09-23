import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table';

export class CartProductList extends Component {
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

  showProductList = () => {
    return (
      <>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price per unit</th>
              <th>Amount</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {this.props.products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>

                <td>{product.type} {product.name}</td>

                <td>
                  ${product.price}
                </td>

                <td>
                  {product.amount}
                </td>

                <td>
                  ${product.price * product.amount}
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="4" style={{ textAlign: 'right' }}>Total price:</td>
              <td>${this.showTotalPrice()}</td>
            </tr>
          </tbody>
        </Table>
      </>
    )
  }

  showCartIsEmpty = () => {
    return <p>Your cart is empty!</p>;
  }

  showTotalPrice = () => {
    return this.props.products.reduce(
      (sum, product) => sum + product.amount * product.price,
      0
    );
  }

  render() {
    return this.props.products.length > 0 ?
      this.showProductList() : this.showCartIsEmpty()
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.cart
  }
};

export default connect(mapStateToProps)(CartProductList);
