import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className="container">
			  <p>&copy; BuritiScript. Todos os direitos reservados.</p>
		  </div>
    </footer>
  );
}