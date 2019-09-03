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

        this.handleInputChange = this.handleInputChange.bind(this);
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

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Form>
                <h2>Sign Up</h2>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="firstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" name="firstName" onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="lastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" name="lastName" onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="company" onChange={this.handleInputChange}>
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
                    <Form.Control type="password" name="password" onChange={this.handleInputChange}/>
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" onChange={this.handleInputChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">Sign up</Button>
            </Form>
        )
    }
}
