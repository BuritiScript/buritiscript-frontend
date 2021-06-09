import styles from '../styles/app.module.scss';
import {Header} from '../components/Header'
import '../styles/global.scss';

import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        
      </main>
    </div>
  );
}

export default MyApp
