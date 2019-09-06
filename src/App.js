import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';

import NavBarContainer from './components/NavBar/Container/Container';
import ScreensRoot from './screens/Root/Root';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <NavBarContainer/>

                <ScreensRoot/>
            </Router>
        </Provider>
    );
}

export default App;
