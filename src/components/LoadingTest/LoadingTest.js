import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withFetching from '../withFetching/withFetching';

class LoadingTest extends Component {
  static propTypes = {
    response: PropTypes.object.isRequired
  }

  render() {
    return (
      <>
        This is a LoadingTest component.
        It uses response property:{' '}
        {JSON.stringify(this.props.response, null, 2)}
      </>
    );
  }
}

export default withFetching(
  'https://jsonplaceholder.typicode.com/posts/1'
)(LoadingTest);
