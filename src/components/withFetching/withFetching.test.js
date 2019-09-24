import withFetching from './withFetching';
import LoadingTest from '../LoadingTest/LoadingTest';
import axiosMock from 'axios';

const WrappedComponent = withFetching(
  'https://jsonplaceholder.typicode.com/posts/1'
)(LoadingTest);

const ComponentWithoutUrl = withFetching()(LoadingTest);

const defaultProps = {};

// eslint-disable-next-line no-undef
const setup = buildSetup(WrappedComponent, defaultProps);
// eslint-disable-next-line no-undef
const setupBrokenComponent = buildSetup(ComponentWithoutUrl, defaultProps);

describe('withFetching HOC', () => {
  it('should throw because no url has been provided', () => {
    expect(() => {
      setupBrokenComponent();
    }).toThrow();
  });

  it('shows "Loading..." message during retrieving data from API', () => {
    const { wrapper } = setup();

    expect(wrapper.text()).toContain('Loading...');
  });

  it('calls to API once', async () => {
    const { wrapper } = setup();

    axiosMock.get.mockClear();
    await axiosMock.get();

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });

  it('passes response property to the component that is wrapped', async () => {
    const { wrapper } = setup();

    axiosMock.get.mockClear();
    await axiosMock.get();

    expect(wrapper.state().response).toMatchObject({
      test: 'hello'
    });
  });

  it('has null error property after successful API call', async () => {
    const { wrapper } = setup();

    axiosMock.get.mockClear();
    await axiosMock.get();

    expect(wrapper.state().error).toEqual(null);
  });

  it('sets isLoading to false when API call has finished', async () => {
    const { wrapper } = setup();

    axiosMock.get.mockClear();
    await axiosMock.get();

    expect(wrapper.state().isLoading).toEqual(false);
  });
});
