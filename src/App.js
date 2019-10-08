import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/create-store';

import 'bootstrap/dist/css/bootstrap.css';

import NavBarContainer from './components/NavBar/Container/Container';
import ScreensRoot from './screens/Root/Root';
import ErrorBoundary from './ErrorBoundary';

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender.min.js');
  whyDidYouRender(React);
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBarContainer/>

        <ErrorBoundary>
          <ScreensRoot/>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
}

export default App;
