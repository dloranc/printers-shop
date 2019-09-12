import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addToCart } from './../../../store/cart/action-creators';

const ProductCard = styled.div`
    width: 100%;
    padding: 1em;
    background: #fefefe;
    color: #333;
    box-shadow: 0 0 0.4em #ccc;
`;

const Title = styled.h2`
    font-weight: lighter;
    margin-bottom: 0.5em;
`;

const ProductRow = styled.div`
    color: #666;
`;

const ProductLabel = styled.span`
    color: black;
    font-weight: bold;
`;

const AmountLabel = styled(ProductLabel)`
    margin-top: 2em;
`;

export const AmountInput = styled.input`
    margin: 0.3em 0;
    padding: 0.3em 0.5em;
    width: 100%;
`;

export const AddToCartButton = styled.button`
    display: block;
    margin: 0 auto;
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

export class Product extends Component {
    state = {
        amount: 1,
    }

    inStock = () => {
        const inStock = this.props.inStock;

        if (inStock > 100) {
            return 'full supply';
        }

        if (inStock > 10) {
            return 'medium supply';
        }

        if (inStock > 0) {
            return 'last pieces';
        }

        return 'not available';
    }

    addToCart = () => {
        if (this.state.amount > this.props.inStock) {
            window.alert('Sorry, but your requested amount of this product exceeds our supply!');
        } else {
            if (this.state.amount > 0) {
                this.props.addToCart({
                    id: this.props.id,
                    name: this.props.name,
                    type: this.props.type,
                    price: this.props.price,
                    amount: this.state.amount,
                });

                window.alert('Added to cart!');
            }
        }
    }

    handleChange = event => {
        const value = event.target.value;

        if (value < 0) {
            this.setState({ amount: 0 });
        } else {
            this.setState({ amount: value });
        }
    }

    render() {
        return (
            <ProductCard>
                <Title>{this.props.type} {this.props.name}</Title>

                <ProductRow>
                    <ProductLabel>Price per unit:</ProductLabel> ${this.props.price}
                </ProductRow>

                <ProductRow>
                    <ProductLabel>In stock:</ProductLabel> {this.inStock()}
                </ProductRow>

                <AmountLabel
                    as="label"
                    htmlFor={'amount-' + this.props.id}
                >
                    Amount of items to order:
                </AmountLabel>

                <AmountInput
                    type="number"
                    name="amount"
                    id={'amount-' + this.props.id}
                    value={this.state.amount}
                    onChange={this.handleChange}
                />

                <ProductRow>
                    <ProductLabel>Price:</ProductLabel> ${this.state.amount * this.props.price}
                </ProductRow>

                <Link to={'/product/' + this.props.id}>View product</Link>
                <AddToCartButton disabled={this.state.amount === 0} onClick={this.addToCart}>Add to cart</AddToCartButton>
            </ProductCard>
        )
    }
}

export default connect(
    null,
    {
        addToCart,
    }
)(Product);
