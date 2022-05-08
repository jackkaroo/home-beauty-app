import React from 'react';

import 'styles/resetCss.scss';
import 'styles/globals.css';
import { AppProps } from 'next/app';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;
