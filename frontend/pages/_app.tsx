import React from 'react';

import 'styles/globals.css';
import { AppProps } from 'next/app';
import Header from 'components/Header/Header';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
