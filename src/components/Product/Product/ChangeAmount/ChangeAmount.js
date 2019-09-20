import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductLabel } from './../ProductLabel/ProductLabel';

const AmountLabel = styled(ProductLabel)`
    margin-top: 2em;
`;

export const AmountInput = styled.input`
    margin: 0.3em 0;
    padding: 0.3em 0.5em;
    width: 100%;
`;

export class ChangeAmount extends Component {
  state = {
    amount: 1
  }

  render() {
    return (
      <div>
        <AmountLabel
          as="label"
          htmlFor={'amount'}
        >
          Amount of items to order:
        </AmountLabel>

        <AmountInput
          type="number"
          name="amount"
          id={'amount'}
          value={this.props.amount}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

export default ChangeAmount;
