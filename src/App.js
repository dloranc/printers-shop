import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/create-store';

import 'bootstrap/dist/css/bootstrap.css';

import NavBarContainer from './components/NavBar/Container/Container';
import ScreensRoot from './screens/Root/Root';
import ErrorBoundary from './ErrorBoundary';
import history from "./utils/history";
import { useAuth0 } from "./react-auth0-spa.js";

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require(
    '@welldone-software/why-did-you-render' +
    '/dist/no-classes-transpile/umd/whyDidYouRender.min.js'
  );
  whyDidYouRender(React);
}

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Provider store={store}>
      <Router history={history}>
        <NavBarContainer/>

        <ErrorBoundary>
          <ScreensRoot/>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
}

export default App;
