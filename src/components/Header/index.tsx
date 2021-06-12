import {Button} from '../Button'

import styles from './styles.module.scss';

export function Header(){
  
    return (
     
        <header className={styles.headerContainer}> 
          <div className={styles.container}>
          <a href="#"><h1 className={styles.headerLogo}>BuritiScript</h1></a>

            <nav>
              <Button title="Login"/>
              
            </nav>
          </div>
        </header>
       
    );
}