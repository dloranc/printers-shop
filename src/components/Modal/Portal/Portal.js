import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

let modalRoot = null;

class ModalPortal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  constructor(props) {
    super(props);

    this.el = document.createElement('div');
  }

  componentDidMount() {
    if (modalRoot === null) {
      const root = document.createElement('div');
      root.id = 'modal-root';

      document.getElementsByTagName('body')[0].appendChild(root);
      modalRoot = root;
    }

    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

export default ModalPortal;
