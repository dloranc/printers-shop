import React from 'react';
import { withRouter } from 'react-router';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { connect } from 'react-redux';

import { authenticate, setRole } from './../../../../store/user/action-creators';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const schema = yup.object({
    email: yup.string().email('Email must be a valid email').required('Email is required'),
    firstName: yup.string().required('First name is a required field'),
    lastName: yup.string().required('Last name is a required field'),
    company: yup.string().required('Select a company'),
    password: yup.string().min(6, 'The password must be at least 6 characters').required('Password is required'),
    confirmPassword: yup.string().required('You have to confirm password').oneOf(
        [yup.ref('password')],
        `Passwords don't match`
    ),
});

class SignUpForm extends React.Component {
    // TODO: remove duplicated code (it's almost the same as in the SignIn/Form/Form.js)
    handleFormSubmit = (values, actions) => {
        axios.get('http://localhost:4000/users')
            .then(response => {
                const users = response.data;

                const user = users.filter(
                    user => user.email === values.email && user.password === values.password
                );

                if (user.length === 0) {
                    this.authenticate();
                } else {
                    actions.setErrors({
                        email: 'The user with this email exists in the database.',
                    });

                    actions.setSubmitting(false);
                }
            }).catch(() => {
                actions.setErrors({
                    email: 'Something went wrong.',
                });

                actions.setSubmitting(false);
            });
    }

    authenticate() {
        this.props.authenticate();
        this.props.setRole('user');

        window.sessionStorage.setItem('is-authenticated', 'true');
        window.sessionStorage.setItem('role', 'user');

        this.props.history.push('/shop');
    }

    render() {
        return (
            <Formik
                initialValues={{
                    email: '',
                    firstName: '',
                    lastName: '',
                    company: '',
                    password: '',
                    confirmPassword: '',
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
                        handleBlur,
                        isValid,
                        touched,
                    }
                ) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <h2>Sign Up</h2>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>

                            <Form.Control
                                type="email"
                                name="email"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                isInvalid={!!errors.email && touched.email}
                            />

                            <Form.Control.Feedback type="invalid">
                                {touched.email && errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="firstName">
                            <Form.Label>First name</Form.Label>

                            <Form.Control
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                isInvalid={!!errors.firstName && touched.firstName}
                            />

                            <Form.Control.Feedback type="invalid">
                                {touched.firstName && errors.firstName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="lastName">
                            <Form.Label>Last name</Form.Label>

                            <Form.Control
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                isInvalid={!!errors.lastName && touched.lastName}
                            />

                            <Form.Control.Feedback type="invalid">
                                {touched.lastName && errors.lastName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="company">
                            <Form.Label>Company</Form.Label>

                            <Form.Control
                                as="select"
                                name="company"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                isInvalid={!!errors.company && touched.company}
                            >
                                <option value="">Select a company</option>

                                {
                                    this.props.companies.map(company => {
                                        return (
                                            <option key={company.id} value={company.id}>
                                                {company.name}
                                            </option>
                                        )
                                    }
                                )}
                            </Form.Control>

                            <Form.Control.Feedback type="invalid">
                                {touched.company && errors.company}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>

                            <Form.Control
                                type="password"
                                name="password"
                                value={values.password}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                isInvalid={!!errors.password && touched.password}
                            />

                            <Form.Control.Feedback type="invalid">
                                {touched.password && errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm password</Form.Label>

                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                value={values.confirmPassword}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                isInvalid={!!errors.confirmPassword && touched.confirmPassword}
                            />

                            <Form.Control.Feedback type="invalid">
                                {touched.confirmPassword && errors.confirmPassword}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={!isValid || isSubmitting}>Sign up</Button>
                    </Form>
                )}
            />
        )
    }
}

const withRedux = connect(
    null,
    {
        authenticate,
        setRole,
    },
)(SignUpForm);

export default withRouter(withRedux);
