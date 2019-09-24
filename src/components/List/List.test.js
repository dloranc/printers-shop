import List from './List';
import toJson from 'enzyme-to-json';

// eslint-disable-next-line no-undef
const setup = buildSetup(List);

let wrapper = null;

describe('List component', () => {
  beforeEach(() => {
    wrapper = setup().wrapper;
  });

  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match snapshot after click', () => {
    wrapper.find('#toggle-fruits').simulate('click');

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render all types of plants', () => {
    expect(wrapper.text()).toContain('apples');
    expect(wrapper.text()).toContain('potatoes');
  });

  it('should have first element to be "apples"', () => {
    expect(wrapper.find('.list div:first-child').text()).toEqual('apples');
  });

  it('should render only vegetables when toggle button has been clicked',
    () => {
      wrapper.find('#toggle-fruits').simulate('click');

      expect(wrapper.text()).not.toContain('apples');
      expect(wrapper.text()).toContain('potatoes');
    }
  );
});
