import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Plant extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  handleClick = () => {
    const { name, onClick } = this.props;

    onClick(name);
  }

  render() {
    const { name } = this.props;

    return (
      <div
        className="plant"
        key={name}
        onClick={this.handleClick}
      >
        {name}
      </div>
    );
  }
}

export default Plant;
