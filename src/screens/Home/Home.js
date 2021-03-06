import React from 'react';
import  { Helmet } from 'react-helmet';

const ScreensHome = () => {
  return (
    <>
      <Helmet>
        <title>Home - Printers Shop</title>
      </Helmet>

      <div className="home">
        <h1>Home</h1>

        <p>Please, sign up or log in to see our products.</p>
      </div>
    </>
  );
}

export default ScreensHome;
