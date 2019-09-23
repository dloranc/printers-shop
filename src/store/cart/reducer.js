import { ADD_TO_CART, REMOVE_FROM_CART } from './constants';

function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const index = state.findIndex(
        product => product.id === action.product.id
      );

      if (index !== -1) {
        const cart = [...state];
        const product = { ...cart[index] };

        product.amount += action.product.amount;
        cart[index] = product;

        return cart;
      }

      return state.concat(action.product);
    }
    case REMOVE_FROM_CART:
      return state.filter(product => product.id !== action.product.id);
    default:
      return state;
  }
}

export default cart;
