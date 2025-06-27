import styles from './GreenButton.module.css';

export const GreenButton = ({ text }) => {
  return <button className={styles.frontButton}>{text}</button>;
};
