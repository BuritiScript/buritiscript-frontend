import styles from './styles.module.scss'

type CardDetails = {
  title: string;
}
export default function Card() {
  return (
    <article className={styles.cardContainer}>
      
      <div className={styles.cardHeader}>
        <img className={styles.cardImage} src="8BlueLilliesDone.gif" />
      </div>
      <div className={styles.cardBody}>
        <a href="#">
          <div className={styles.cardType}>Artigo</div>
          <h2 className={styles.cardTitle} >O que é uma API REST</h2>
          <footer className={styles.cardfooter}>
            <h5>
              <i >person_outline</i>
              <span ></span>
              <i >date_ranger</i>
              <span className={styles.cardDate} ></span>
            </h5>
          </footer>
        </a>
      </div>
      
    </article>
  );
}