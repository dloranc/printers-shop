import * as actions from './action-creators';
import * as types from './constants';

const product = {
  id: 'product-1',
  type: 'Printer',
  name: 'ZX3',
  price: '400',
  inStock: '30'
};

describe('actions', () => {
  it('should create an action to add a product to the cart', () => {
    const expectedAction = {
      type: types.ADD_TO_CART,
      product
    };

    const result = actions.addToCart(product);

    expect(result).toEqual(expectedAction);
  });

  it('should create an action to remove a product to the cart', () => {
    const expectedAction = {
      type: types.REMOVE_FROM_CART,
      product
    };

    const result = actions.removeFromCart(product);

    expect(result).toEqual(expectedAction);
  });
});
