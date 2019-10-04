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

  it('should render plants', () => {
    expect(wrapper.text()).toContain('Plant');
  });

  it('should have first element to be "apples"', () => {
    expect(
      wrapper.find('.list Plant:first-child').dive().text()
    ).toContain('apples');
  });

  it('should render only vegetables when toggle button has been clicked',
    () => {
      wrapper.find('#toggle-fruits').simulate('click');

      expect(wrapper.find('.list Plant').dive().text()).not.toContain('apples');
      expect(wrapper.find('.list Plant').dive().text()).toContain('potatoes');
    }
  );

  it('should change text after click on name of the element', () => {
    wrapper
      .find('.list Plant:first-child')
      .dive()
      .find('.plant__name')
      .simulate('click');

    expect(wrapper.text()).toContain('You like apples!');
  });

  it('should remove element from list after click on the "Remove" button',
    () => {
      wrapper
        .find('.list Plant:first-child')
        .dive()
        .find('.plant__remove')
        .simulate('click');

      expect(wrapper.find('.list Plant')).toHaveLength(3);
    }
  );

  it('should contain an message when list is empty after all items removal',
    () => {
      const clickRemove = () => {
        wrapper
          .find('.list Plant:first-child')
          .dive()
          .find('.plant__remove')
          .simulate('click');
      };

      clickRemove();
      clickRemove();
      clickRemove();
      clickRemove();

      expect(wrapper.text()).toContain('The list is empty.');
    }
  );
});
