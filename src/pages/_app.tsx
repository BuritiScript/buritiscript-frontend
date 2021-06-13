import styles from '../styles/app.module.scss';
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import '../styles/global.scss';

import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    
    <div className={styles.wrapper}>
      <main>
        <Head>
          <meta name="viewport" content="width=device-width" />

        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer/>
      </main>
    </div>
  );
}

export default MyApp
