import cartReducer from './reducer';
import * as types from './constants';

const product1 = {
  id: "product-1",
  type: "Printer",
  name: "ZX3",
  price: "400",
  inStock: "30",
};

const product2 = {
  id: "product-2",
  type: "Fax",
  name: "XXL",
  price: "300",
  inStock: "10",
};

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_TO_CART when cart is empty', () => {
    expect(
      cartReducer([], {
        type: types.ADD_TO_CART,
        product: product1,
      })
    ).toEqual([
      product1,
    ]);
  });

  it('should handle ADD_TO_CART when cart has products, a new product is added at the end', () => {
    expect(
      cartReducer(
        [
          product1,
        ],
        {
          type: types.ADD_TO_CART,
          product: product2,
        }
      )
    ).toEqual(
      [
        product1,
        product2,
      ]
    );
  });

  it('should handle REMOVE_FROM_CART when cart is empty', () => {
    expect(
      cartReducer(
        [],
        {
          type: types.REMOVE_FROM_CART,
          product: product1,
        }
      ),
    ).toEqual([]);
  });

  it('should handle REMOVE_FROM_CART', () => {
    const result = cartReducer(
      [
        product1,
        product2,
      ],
      {
        type: types.REMOVE_FROM_CART,
        product: product2,
      }
    );

    expect(result).toEqual(
      [
        product1,
      ]
    );
  });
});
