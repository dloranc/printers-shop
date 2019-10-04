import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Plant extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
  }

  handleClick = () => {
    const { name, onClick } = this.props;

    onClick(name);
  }

  handleRemove = () => {
    const { name, onRemove } = this.props;

    onRemove(name);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="plant">
        <div
          className="plant__name"
          key={name}
          onClick={this.handleClick}
          style={{ display: 'inline-block' }}
        >
          {name}
        </div>

        <button className="plant__remove" onClick={this.handleRemove}>
          Remove
        </button>
      </div>
    );
  }
}

export default Plant;
