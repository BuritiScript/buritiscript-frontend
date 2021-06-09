

import styles from './styles.module.scss';

export function Header(){
  
    return (
        <header className={styles.headerContainer}> 
          <a href="#"><h1>BuritiScript</h1></a>
        </header>
    );
}