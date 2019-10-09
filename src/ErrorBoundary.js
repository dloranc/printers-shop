import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ErrorBoundary.sass';

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>

          <p className="error-boundary__name">
            {this.state.error && this.state.error.toString()}
          </p>

          <p className="error-boundary__stack">
            {this.state.errorInfo.componentStack}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
