import { Header } from '../components/Header'
import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.homepage}> 
      <Header/>
    </div>
  )
}
