import React from 'react';
import { Helmet } from 'react-helmet';
import SignInForm from '../../components/User/SignIn/Form/Form';

class ScreensSignInForm extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Sign In - Printers Shop</title>
        </Helmet>

        <SignInForm/>
      </>
    );
  }
}

export default ScreensSignInForm;
