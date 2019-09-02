import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            companyId: null,
            password: '',
            confirmPassword: '',

            companies: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:4000/companies').then(response => {
            return response.json();
        }).then(response => {
            this.setState(
                {
                    companies: response
                }
            );
        });
    }

    render() {
        return (
            <Form>
                <h2>Sign Up</h2>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={event => this.setState({ email: event.target.value })}/>
                </Form.Group>

                <Form.Group controlId="first-name">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" name="first-name" onChange={event => this.setState({ firstName: event.target.value })}/>
                </Form.Group>

                <Form.Group controlId="last-name">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" name="last-name" onChange={event => this.setState({ lastName: event.target.value })}/>
                </Form.Group>

                <Form.Group controlId="company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control as="select" name="company">
                        {
                            this.state.companies.map(company => {
                                return (
                                    <option defaultValue={company.id} key={company.id}>
                                        {company.name}
                                    </option>
                                )
                            }
                        )}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={event => this.setState({ password: event.target.value })}/>
                </Form.Group>

                <Form.Group controlId="confirm-password">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" name="confirm-password" onChange={event => this.setState({ confirmPassword: event.target.value })}/>
                </Form.Group>

                <Button variant="primary" type="submit">Sign up</Button>
            </Form>
        )
    }
}
