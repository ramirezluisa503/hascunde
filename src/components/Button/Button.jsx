import styles from './Button.module.css';

export const Button = ({ text }) => {
  return <button className={styles.frontButton}>{text}</button>;
};
