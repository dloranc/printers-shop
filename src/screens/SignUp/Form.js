import React from 'react';
import SignUpForm from '../../components/User/SignUp/Form/Form';

class SignUpFormScreen extends React.Component {
    constructor(props) {
        super(props);

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

export default SignUpFormScreen;