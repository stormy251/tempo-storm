import React from 'react';
import 'lib/global-styles.css'; // This will ensure that the global-styles are positioned properly in the head.

interface Props {
  Component: any;
  pageProps?: any;
}

const NextApp = ({Component, pageProps}: Props) => {
  return <Component {...pageProps} />;
};

// Default export is a requirement for nextjs to know this is the export for the page.
export default NextApp;
