import React from 'react';
import { Link } from 'react-router-dom';

function ScreensNoMatch() {
  return (
    <div className="error-404">
      <h1>Page not found</h1>

      <p>Return to the <Link to="/">home page</Link>.</p>
    </div>
  );
}

export default ScreensNoMatch;
