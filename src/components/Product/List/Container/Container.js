import React, { Component } from 'react'
import styled from 'styled-components';

import Product from './../../Product/Product';

const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
`;

export class ProductListContainer extends Component {
    state = {
        products: [],
    }

    componentDidMount() {
        fetch('http://localhost:4000/products')
            .then(response => response.json())
            .then(products => this.setState({ products: products }));
    }

    render() {
        return (
            <ProductList>
                {
                    this.state.products.map(product => <Product key={product.id} {...product}></Product>)
                }
            </ProductList>
        )
    }
}

export default ProductListContainer;
