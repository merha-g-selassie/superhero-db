import { AppProps } from 'next/dist/next-server/lib/router/router';
import React, { useState } from 'react';
import GlobalTheme from '../components/GlobalTheme';
import './_app.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [isDarkMode] = useState(false);

  return (
    <GlobalTheme isDarkMode={isDarkMode}>
      {/* <Switch checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} /> */}
      <Component {...pageProps} />
    </GlobalTheme>
  );
}

export default MyApp;
