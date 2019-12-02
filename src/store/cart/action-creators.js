import * as constants from './constants';

const addToCart = product => {
  return {
    type: constants.ADD_TO_CART,
    product
  };
};

const removeFromCart = product => {
  return {
    type: constants.REMOVE_FROM_CART,
    product
  };
};

export {
  addToCart,
  removeFromCart
};
