import withFetching from './withFetching';
import LoadingTest from '../LoadingTest/LoadingTest';
import axios from 'axios';
jest.mock('axios');

let getSpy;

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
  beforeEach(() => {
    getSpy = jest.spyOn(axios, 'get');
  });

  afterEach(() => {
    getSpy.mockRestore();
  });

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
    const getSpy = jest.spyOn(axios, 'get');

    setup();

    expect(getSpy).toBeCalled();
  });

  it('passes response property to the component that is wrapped', async () => {
    const { wrapper } = setup();

    const getPromise = getSpy.mock.results.pop().value;

    getPromise.then(() => {
      expect(wrapper.state().response).toMatchObject({
        test: 'hello'
      });

      expect(getSpy).toHaveBeenCalledTimes(1);
    });
  });

  it('has null error property after successful API call', async () => {
    const { wrapper } = setup();

    const getPromise = getSpy.mock.results.pop().value;

    getPromise.then(() => {
      expect(wrapper.state().error).toEqual(null);
      expect(getSpy).toHaveBeenCalledTimes(1);
    });
  });

  it('sets isLoading to false when API call has finished', async () => {
    const { wrapper } = setup();

    const getPromise = getSpy.mock.results.pop().value;

    getPromise.then(() => {
      expect(wrapper.state().isLoading).toEqual(false);
      expect(getSpy).toHaveBeenCalledTimes(1);
    });
  });
});
