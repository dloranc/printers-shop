import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter, Link } from 'react-router-dom';

function ScreensNoMatch({ location }) {
  return (
    <>
      <Helmet>
        <title>404 - Printers Shop</title>
      </Helmet>

      <div className="error-404">
        <h1>Page not found</h1>

        <p>
          The { location.pathname } page couldn't be found.
          Return to the <Link to="/">home page</Link>.
        </p>
      </div>
    </>
  );
}

export default withRouter(ScreensNoMatch);
