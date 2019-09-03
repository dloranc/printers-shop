import React from 'react';
import { withRouter } from 'react-router';
import { Formik } from 'formik';
import * as yup from 'yup';

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
    constructor(props) {
        super(props);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(values, actions) {
        if (values.email !== 'test@test.com') {
            window.localStorage.setItem('is-authenticated', true);

            this.props.history.push('/shop');
        }

        // TODO: handle a case when the email exists
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
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="firstName">
                            <Form.Label>First name</Form.Label>

                            <Form.Control
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                isInvalid={!!errors.firstName}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.firstName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="lastName">
                            <Form.Label>Last name</Form.Label>

                            <Form.Control
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                isInvalid={!!errors.lastName}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.lastName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="company">
                            <Form.Label>Company</Form.Label>

                            <Form.Control
                                as="select"
                                name="company"
                                onChange={handleChange}
                                isInvalid={!!errors.company}
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
                                {errors.company}
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

                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm password</Form.Label>

                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                isInvalid={!!errors.confirmPassword}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.confirmPassword}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={isSubmitting}>Sign up</Button>
                    </Form>
                )}
            />
        )
    }
}

export default withRouter(SignUpForm);
