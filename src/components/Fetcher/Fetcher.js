import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Fetcher extends React.Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    axios.get(this.props.url)
      .then(result => this.setState({
        data: result.data,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }
  render() {
    return this.props.children(this.state);
  }
}

export { Fetcher };
