import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import  { Helmet } from 'react-helmet';

import { action, decorate, observable, computed } from 'mobx';
import { observer } from 'mobx-react';

class Todo {
  id = Math.random()
  title: ""
  finished = false

  changeTitle = title => {
    this.title = title;
  }

  toggleFinished = () => {
    this.finished = !this.finished;
  }

  get todoState() {
    return <>{store.title} {store.finished ? 'finished' : 'unfinished'}</>;
  }
}

decorate(Todo, {
  title: observable,
  finished: observable,
  changeTitle: action,
  toggleFinished: action,
  todoState: computed
});

const store = new Todo();

const TodoView = observer(({ store }) => (
  <>Title: {store.todoState}</>
));

class ScreensHome extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  }

  updateStore = () => {
    store.changeTitle('dupa');
  }

  render() {
    if (!this.props.isAuthenticated) {
      return (
        <>
          <Helmet>
            <title>Home - Printers Shop</title>
          </Helmet>

          <div className="home">
            <h1>Home</h1>

            <p>Please, sign up or log in to see our products.</p>

            <TodoView store={store}></TodoView>
            <button onClick={this.updateStore}>Add title</button>
            <button onClick={store.toggleFinished}>Toggle</button>
          </div>
        </>
      );
    }

    return <Redirect to="/shop"></Redirect>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
};

export default connect(mapStateToProps)(ScreensHome);
