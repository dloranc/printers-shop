import React, { Component } from 'react'

import Product from './../../Product/Product';

export class ProductListContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/products')
            .then(response => response.json())
            .then(products => this.setState({ products: products }));
    }

    render() {
        return (
            <div>
                {
                    this.state.products.map(product => <Product key={product.id} {...product}></Product>)
                }
            </div>
        )
    }
}

export default ProductListContainer;
