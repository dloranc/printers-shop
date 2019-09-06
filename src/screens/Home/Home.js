import React from 'react';
import { Redirect } from 'react-router-dom';

import { store } from './../../store';

function ScreensHome() {
  const isAuthenticated = store.getState().isAuthenticated;

  if (!isAuthenticated) {
    return (
      <div className="home">
        <h1>Home</h1>

        <p>Please, sign up or log in to see our products.</p>
      </div>
    );
  }

  return <Redirect to="/shop"></Redirect>;
}

export default ScreensHome;
