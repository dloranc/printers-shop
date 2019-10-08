import React, { Component } from 'react';
import ModalPortal from './Portal/Portal';
import PropTypes from 'prop-types';
import './Modal.sass';

export class Modal extends Component {
  static propTypes = {
    header: PropTypes.node.isRequired,
    body: PropTypes.node.isRequired,
    footer: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired
  }

  close = event => {
    event.stopPropagation();

    this.props.onClose(event);
  }

  render() {
    return (
      <ModalPortal>
        <div className="modal" onClick={this.close}>
          <div className="modal__container">
            <div className="modal__header">
              {this.props.header}
            </div>

            <div className="modal__body">
              {this.props.body}
            </div>

            <div className="modal__footer">
              {this.props.footer}
            </div>
          </div>
        </div>
      </ModalPortal>
    );
  }
}

export default Modal;
