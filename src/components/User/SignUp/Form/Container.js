import React from 'react';
import SignUpForm from './Form';

import axios from 'axios';

class SignUpFormContainer extends React.Component {
    state = {
        companies: [],
    }

    componentDidMount() {
        axios.get('http://localhost:4000/companies')
            .then(response => {
                this.setState(
                    {
                        companies: response.data,
                    }
                );
            });
    }

    render() {
        return <SignUpForm companies={this.state.companies}/>
    }
}

export default SignUpFormContainer;
