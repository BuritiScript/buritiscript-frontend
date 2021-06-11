import styles from '../styles/app.module.scss';
import {Header} from '../components/Header'
import '../styles/global.scss';

import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    
    <div className={styles.wrapper}>
      <main>
        <Head>
          <link rel="icon" href="/static/images/logo/favicon.png" type="image/png" sizes="16x16" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        </Head>
        <Header />
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp
