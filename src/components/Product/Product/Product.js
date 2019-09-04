import React, { Component } from 'react'

export class Product extends Component {
    render() {
        return (
            <div>
                <div>{this.props.type} {this.props.name}</div>
                <div>${this.props.price}</div>
                <div>Quantity: {this.props.inStock}</div>
            </div>
        )
    }
}

export default Product;
