import React from 'react';
import { withRouter } from 'react-router';
import { Formik } from 'formik';
import * as yup from 'yup';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const schema = yup.object({
    email: yup.string().email('Email must be a valid email').required('Email is required'),
    password: yup.string().required('Password is required'),
});

class SignInForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(values, actions) {
        if (values.email === 'test@test.com' && values.password === '123456') {
            window.localStorage.setItem('is-authenticated', true);
            this.props.history.push('/shop');
        }

        // TODO: handle a case when the email doesn't exists
    }

    render() {
        return (
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={schema}
                onSubmit={this.handleFormSubmit}
                render={(
                    {
                        handleSubmit,
                        handleChange,
                        values,
                        errors,
                        isSubmitting,
                    }
                ) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <h2>Sign In</h2>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>

                            <Form.Control
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>

                            <Form.Control
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                isInvalid={!!errors.password}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={isSubmitting}>Sign in</Button>
                    </Form>
                )}
            />
        )
    }
}

export default withRouter(SignInForm);
