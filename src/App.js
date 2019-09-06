import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import NavBar from './components/NavBar/NavBar';
import ScreensRoot from './screens/Root/Root';

function App() {
    return (
        <Router>
            <NavBar/>

            <ScreensRoot/>
        </Router>
    );
}

export default App;
