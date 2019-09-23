import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Formik } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';

import {
  authenticate,
  setRole
} from './../../../../store/user/action-creators';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const schema = yup.object({
  email: yup.string()
    .email('Email must be a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required')
});

class SignInForm extends React.Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired,
    setRole: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  handleFormSubmit = (values, actions) => {
    axios.get('http://localhost:4000/users')
      .then(response => {
        const users = response.data;

        const user = users.filter(
          user => user.email === values.email &&
          user.password === values.password
        );

        if (user.length === 1) {
          this.authenticate(user[0].role);
        } else {
          actions.setErrors({
            email: 'Invalid email or password. Try again.'
          });

          actions.setSubmitting(false);
        }
      }).catch(error => {
        console.error(error);

        actions.setErrors({
          email: 'Something went wrong.'
        });

        actions.setSubmitting(false);
      });
  }

  authenticate(role) {
    this.props.authenticate();
    this.props.setRole(role);
    window.sessionStorage.setItem('is-authenticated', 'true');
    window.sessionStorage.setItem('role', role);

    this.props.history.push('/shop');
  }

  render() {
    return (
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={schema}
        onSubmit={this.handleFormSubmit}
        render={(
          {
            handleSubmit,
            handleChange,
            values,
            errors,
            touched,
            isSubmitting,
            handleBlur,
            isValid
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
                data-cy="email"
                isInvalid={!!errors.email && touched.email}
                onBlur={handleBlur}
              />

              <Form.Control.Feedback type="invalid">
                {touched.email && errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>

              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                data-cy="password"
                isInvalid={!!errors.password && touched.password}
                onBlur={handleBlur}
              />

              <Form.Control.Feedback type="invalid">
                {touched.password && errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              disabled={!isValid || isSubmitting}
              data-cy="sign-in-button"
            >
              Sign in
            </Button>
          </Form>
        )}
      />
    );
  }
}

const withRedux = connect(
  null,
  {
    authenticate,
    setRole
  },
)(SignInForm);

export default withRouter(withRedux);
