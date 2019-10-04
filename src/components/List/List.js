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
          {this.state.list.map(
            item => {
              if (this.state.showFruits) {
                return <Plant
                  name={item.name}
                  onClick={this.handleClick}
                  key={item.name}
                />;
              }

              return item.type !== 'fruit'
                ? <Plant
                  name={item.name}
                  onClick={this.handleClick}
                  key={item.name}
                />
                : null;
            }
          )}
        </div>
      </>
    );
  }
}

export default List;
