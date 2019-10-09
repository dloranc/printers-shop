import { AddProductToCartButton } from './AddProductToCartButton';

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
const setup = buildSetup(AddProductToCartButton, defaultProps);
let alert = null;

describe('An AddProductToCartButton compoment', () => {
  beforeEach(() => {
    alert = jest.spyOn(window, 'alert').mockImplementation();
  });

  afterEach(() => {
    alert.mockRestore();
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
});
