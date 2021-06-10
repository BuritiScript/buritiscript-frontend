import styles from './styles.module.scss';

type Button = {
  title: string;
}

export function Button(props: Button) {
  return (
    <button className={styles.buttonContainer}>{props.title}</button>
  );
}