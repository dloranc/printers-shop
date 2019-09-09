import { Product } from './Product';

const defaultProps = {
  id: 'product-1',
  name: 'ZX3',
  type: 'Printer',
  price: 400,
  inStock: 10,
}

// eslint-disable-next-line no-undef
const setup = buildSetup(Product, defaultProps);

describe('A product compoment', () => {
  it('should contain Printer ZX3 title', () => {
    const { wrapper } = setup();

    expect(wrapper.text()).toContain('Printer ZX3');
  });

  it('should contain price per unit', () => {
    const { wrapper } = setup();

    expect(wrapper.text()).toContain('Price per unit: $400');
  });

  it('should contain how many products are in stock ("not available" if 0 products)', () => {
    const { wrapper } = setup({ inStock: 0 });

    expect(wrapper.text()).toContain('not available');
  });

  it('should contain how many products are in stock ("last pieces" if 10 products)', () => {
    const { wrapper } = setup();

    expect(wrapper.text()).toContain('last pieces');
  });

  it('should contain how many products are in stock ("medium supply" if 11 products)', () => {
    const { wrapper } = setup({ inStock: 11 });

    expect(wrapper.text()).toContain('medium supply');
  });

  it('should contain how many products are in stock ("full supply" if 101 products)', () => {
    const { wrapper } = setup({ inStock: 101 });

    expect(wrapper.text()).toContain('full supply');
  });
});
