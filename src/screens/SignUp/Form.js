import React from 'react';
import { Helmet } from 'react-helmet';
import SignUpFormContainer from '../../components/User/SignUp/Form/Container';

class ScreensSignUpForm extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Sign Up - Printers Shop</title>
                </Helmet>

                <SignUpFormContainer/>
            </>
        )
    }
}

export default ScreensSignUpForm;
