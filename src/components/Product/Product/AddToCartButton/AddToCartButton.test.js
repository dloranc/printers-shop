import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import {
  AddToCartButton as AddToCartButtonWithoutStore
} from './AddToCartButton';
import AddToCartButton from './AddToCartButton';

import { addToCart } from '../../../../store/cart/action-creators';

const initialState = {
  user: {
    isAuthenticated: true,
    role: 'user'
  },
  cart: []
};
const mockStore = configureStore();
let store;

const defaultProps = {
  product: {
    id: 'product-1',
    name: 'ZX3',
    type: 'Printer',
    price: 400,
    inStock: 10
  },
  amount: 1,
  addToCart: () => {}
};

// eslint-disable-next-line no-undef
const setup = buildSetup(AddToCartButtonWithoutStore, defaultProps);
let alert = null;

describe('An AddToCartButton compoment', () => {
  beforeEach(() => {
    alert = jest.spyOn(window, 'alert').mockImplementation();

    store = mockStore(initialState);
  });

  afterEach(() => {
    alert.mockRestore();
    store.clearActions();
  });

  it('alerts the product has been added to the cart', () => {
    const { wrapper } = setup();

    wrapper.simulate('click');

    expect(alert.mock.calls).toHaveLength(1);
  });

  it('calls addToCart function', () => {
    const mock = jest.fn();

    const { wrapper } = setup({ addToCart: mock });

    wrapper.simulate('click');

    expect(mock).toHaveBeenCalled();
    expect(alert.mock.calls[0][0]).toContain('Added');

    mock.mockRestore();
  });

  it('alerts it\'s not possible to add a product to the cart', () => {
    const { wrapper } = setup({
      amount: 100
    });

    wrapper.simulate('click');

    expect(alert.mock.calls).toHaveLength(1);
    expect(alert.mock.calls[0][0]).toContain('exceeds our supply');
  });

  it('should do full render with mocked store', () => {
    const mounted = mount(
      <Provider store={store}>
        <AddToCartButton
          id="add-to-cart"
          amount={1}
          product={defaultProps.product}
        />
      </Provider>
    );

    expect(mounted.text()).toContain('Add to cart');
  });

  it('should dispatch addToCart action', () => {
    const mounted = mount(
      <Provider store={store}>
        <AddToCartButton
          id="add-to-cart"
          amount={1}
          product={defaultProps.product}
        />
      </Provider>
    );

    const button = mounted.find('#add-to-cart').first();

    button.simulate('click');

    const expectedPayload = addToCart(
      {
        ...defaultProps.product,
        amount: 1
      }
    );

    expect(store.getActions()).toEqual([expectedPayload]);
  });
});
