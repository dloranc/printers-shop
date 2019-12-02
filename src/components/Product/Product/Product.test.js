import { Product } from './Product';
import ChangeAmount from './ChangeAmount/ChangeAmount';

const defaultProps = {
  id: 'product-1',
  name: 'ZX3',
  type: 'Printer',
  price: 400,
  inStock: 10,
  addToCart: () => {}
};

// eslint-disable-next-line no-undef
const setup = buildSetup(Product, defaultProps);

describe('A product compoment', () => {
  it('contain a "Printer ZX3" title', () => {
    const { wrapper } = setup();

    expect(wrapper.text()).toContain('Printer ZX3');
  });

  it('contain price per unit', () => {
    const { wrapper } = setup();

    expect(wrapper.text()).toContain('Price per unit: $400');
  });

  it('contain "not available" text if there are 0 products in stock', () => {
    const { wrapper } = setup({ inStock: 0 });

    expect(wrapper.text()).toContain('not available');
  });

  it('contain "last pieces" text if there are 10 products in stock', () => {
    const { wrapper } = setup();

    expect(wrapper.text()).toContain('last pieces');
  });

  it('contain "medium supply" text if there are 11 products in stock', () => {
    const { wrapper } = setup({ inStock: 11 });

    expect(wrapper.text()).toContain('medium supply');
  });

  it('contain "full supply" text if there are 101 products in stock', () => {
    const { wrapper } = setup({ inStock: 101 });

    expect(wrapper.text()).toContain('full supply');
  });

  it('increase a price when the amount of items to order increases', () => {
    const { wrapper } = setup();

    wrapper.find(ChangeAmount).simulate('change', { target: { value: 2 } });

    expect(wrapper.text()).toContain('Price: $800');
  });
});
