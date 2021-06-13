import { GetStaticProps } from 'next'; 

import Card from '../components/Card';
import styles from './home.module.scss';

type HomeProps = {
  
}

export default function Home(props: HomeProps) {
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
          </div>
        </div>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
 return {
   props: {

   },
   revalidate: 60 * 60 * 1,
 }
}