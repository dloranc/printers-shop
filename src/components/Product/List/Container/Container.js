import React, { Component } from 'react'
import styled from 'styled-components';
import axios from 'axios';

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
        axios.get('http://localhost:4000/products')
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(error => console.log(error));
    }

    hasProducts = () => {
        return this.state.products.length > 0;
    }

    render() {
        return (
            <ProductList>
                { this.hasProducts() ?
                    this.state.products.map(product => <Product key={product.id} {...product}></Product>)
                    : 'No products in the store yet.'
                }
            </ProductList>
        )
    }
}

export default ProductListContainer;
