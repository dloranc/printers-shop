import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import  { Helmet } from 'react-helmet';
import Modal from './../../components/Modal/Modal';

class ScreensHome extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  }

  state = {
    show: false
  }

  toggleModal = () => {
    this.setState({ show: !this.state.show });
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
          </div>

          <button onClick={this.toggleModal}>
            {this.state.show ? 'Hide' : 'Show'}
          </button>

          {this.state.show &&
            <Modal>
              <div className="modal">
                <div className="modal__container">
                  <div className="modal__header">Header</div>
                  <div className="modal__body">Body</div>
                  <div className="modal__footer">
                    <button
                      className="modal__button -close"
                      onClick={this.toggleModal}
                    >
                    OK
                    </button>
                  </div>
                </div>
              </div>
            </Modal>
          }
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
