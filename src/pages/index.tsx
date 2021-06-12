import Card from '../components/Card';
import { Header } from '../components/Header'
import styles from './home.module.scss';

export default function Home() {
  return (
    <div className="container"> 
      <section className={styles.sessionCards}>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <Card/>
            </div>
            <div className="col-sm-4">
              <Card/>
            </div>
            <div className="col-sm-4">
              <Card/>
            </div>
            <div className="col-sm-4">
              <Card/>
            </div>
            <div className="col-sm-4">
              <Card/>
            </div>
            <div className="col-sm-4">
              <Card/>
            </div>
            <div className="col-sm-4">
              <Card/>
            </div>
            
            
          </div>
        </div>
      </section>
    </div>
  )
}
