import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import ProductListContainer from
  './../../components/Product/List/Container/Container';

class ScreensShop extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <>
          <Helmet>
            <title>Shop - Printers Shop</title>
          </Helmet>

          <ProductListContainer></ProductListContainer>
        </>
      );
    }

    return <Redirect to="/"></Redirect>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
};

export default connect(mapStateToProps)(ScreensShop);
