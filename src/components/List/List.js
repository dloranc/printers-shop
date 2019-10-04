import React, { PureComponent } from 'react';
import Plant from './Plant/Plant';

export class List extends PureComponent {
  state = {
    showFruits: true,
    name: '',
    list: [
      { name: 'apples', type: 'fruit'},
      { name: 'bananas', type: 'fruit'},
      { name: 'potatoes', type: 'vegetable'},
      { name: 'strawberries', type: 'fruit'}
    ]
  }

  toggleFruits = () => {
    this.setState({
      showFruits: !this.state.showFruits
    });
  }

  handleClick = name => {
    this.setState({
      item: name
    });
  }

  handleRemove = name => {
    this.setState({
      list: [...this.state.list.filter(item => name !== item.name)]
    });
  }

  render() {
    return (
      <>
        {
          this.state.item
            ? `You like ${this.state.item}!`
            : 'Click on plant you like.'
        }

        <button
          id="toggle-fruits"
          onClick={this.toggleFruits}
        >
          {this.toggleFruits ? 'Hide fruits' : 'Show fruits'}
        </button>

        <div className="list">
          {this.state.list.length > 0 && this.state.list.map(
            item => {
              if (this.state.showFruits) {
                return this._renderPlant(item);
              }

              return item.type !== 'fruit'
                ? this._renderPlant(item)
                : null;
            }
          )}

          {this.state.list.length === 0 && <p>The list is empty.</p>}
        </div>
      </>
    );
  }

  _renderPlant = item => {
    return (
      <Plant
        name={item.name}
        onClick={this.handleClick}
        onRemove={this.handleRemove}
        key={item.name}
      />
    );
  }
}

export default List;
