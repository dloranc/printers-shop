import React from 'react';
import SignUpForm from './Form';

class SignUpFormContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            companies: [],
        }
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
        return <SignUpForm companies={this.state.companies}/>
    }
}

export default SignUpFormContainer;