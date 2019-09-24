import React, { Component } from 'react';

export class List extends Component {
  state = {
    showFruits: true,
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

  render() {
    return (
      <>
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
                return <div key={item.name}>{item.name}</div>;
              }

              return item.type !== 'fruit'
                ? <div key={item.name}>{item.name}</div>
                : null;
            }
          )}
        </div>
      </>
    );
  }
}

export default List;
