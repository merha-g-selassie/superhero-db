import { motion } from 'framer-motion';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import React, { useState } from 'react';
import GlobalTheme from '../components/GlobalTheme';
import './_app.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const [isDarkMode] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalTheme isDarkMode={isDarkMode}>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
          >
            {/* <Switch checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} /> */}
            <Component {...pageProps} />
          </motion.div>
        </GlobalTheme>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
