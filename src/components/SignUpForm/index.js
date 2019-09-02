import React from 'react';

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
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={event => this.setState({ email: event.target.value })}/>

                <label htmlFor="first-name">First name</label>
                <input type="text" name="first-name" id="first-name" onChange={event => this.setState({ firstName: event.target.value })}/>

                <label htmlFor="last-name">Last name</label>
                <input type="text" name="last-name" id="last-name" onChange={event => this.setState({ lastName: event.target.value })}/>

                <label htmlFor="company">Company</label>
                <select name="company" id="company">
                    {
                        this.state.companies.map(company => {
                            return (
                                <option defaultValue={company.id} key={company.id}>
                                    {company.name}
                                </option>
                            )
                        }
                    )}
                </select>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={event => this.setState({ password: event.target.value })}/>

                <label htmlFor="confirm-password">Confirm password</label>
                <input type="password" name="confirm-password" id="confirm-password" onChange={event => this.setState({ confirmPassword: event.target.value })}/>

                <button>Sign up</button>
            </form>
        )
    }
}
