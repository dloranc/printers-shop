import React, { Component } from 'react';
import axios from 'axios';

const withFetching = url => WrappedComponent => {
  const name = WrappedComponent.displayName || WrappedComponent.name ;

  class withFetching extends Component {
    static displayName = `withFetching(${name})`;

    state = {
      response: null,
      error: null,
      isLoading: true
    }

    componentDidMount() {
      if (!url) {
        throw new Error('No url provided');
      }

      axios.get(
        url
      ).then(response => {
        this.setState({
          response: response,
          isLoading: false
        });
      }).catch(
        error => this.setState({
          error: error
        })
      );
    }

    render() {
      return this.state.isLoading ?
        'Loading...' :
        <WrappedComponent
          response={this.state.response}
          error={this.state.error}
          {...this.props}
        />;
    }
  }

  return withFetching;
};

export default withFetching;
