import styles from './styles.module.scss'

type CardDetails = {
  title: string;
}
export default function Card() {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.container}>
        <div className={styles.cardHeader}>
          <img className={styles.imageCard} src="8BlueLilliesDone.gif" />
        </div>
        <div className={styles.cardBody}>
          <a href="#">
            <div className={styles.typeCard}>Artigo</div>
            <h2 className={styles.titleCard} >O que é uma API REST</h2>
            <footer className={styles.footerCard}>
              <h5 >
                <i >person_outline</i>
                <span ></span>
                <i >date_ranger</i>
                <span className={styles.dateCard} ></span>
              </h5>
            </footer>
          </a>
        </div>
      </div>
    </article>
  );
}