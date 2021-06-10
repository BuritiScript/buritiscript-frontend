import {Button} from '../Button'

import styles from './styles.module.scss';

export function Header(){
  
    return (
     
        <header className={styles.headerContainer}> 
          <div className={styles.container}>
            <h1><a href="#">BuritiScript</a></h1>

            <nav>
              <Button title="Login"/>
              
            </nav>
          </div>
        </header>
       
    );
}