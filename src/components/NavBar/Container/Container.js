import React from 'react';
import { withRouter } from 'react-router';

import Navbar from './../NavBar';

class NavBarContainer extends React.Component {
    render() {
        return (
            <Navbar {...this.props} />
        )
    }
}

export default withRouter(NavBarContainer);
