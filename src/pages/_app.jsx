// _app.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import "../app/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Your App Title</title>
        <meta name="description" content="Your App Description" />
        {/* Add any other meta tags, links to external stylesheets or scripts here */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
