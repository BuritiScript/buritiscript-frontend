import Card from '../components/Card';
import { Header } from '../components/Header'
import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.homepage}> 
      <section className={styles.sessionCards}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
      </section>
    </div>
  )
}
