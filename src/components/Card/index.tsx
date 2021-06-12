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
        <a href="#" className={styles.cardLink}>
          <div className={styles.cardType}>Artigo</div>
          <h2 className={styles.cardTitle} >O que é uma API REST</h2>
          <footer className={styles.cardFooter}>
            <h5>
              <i ></i>
              <span ></span>
              <i ></i>
              <span className={styles.cardDate} ></span>
            </h5>
          </footer>
        </a>
      </div>
      
    </article>
  );
}