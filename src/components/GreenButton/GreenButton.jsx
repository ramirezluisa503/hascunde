import { NavLink } from 'react-router-dom';
import styles from './GreenButton.module.css';

export const GreenButton = ({ text, redirect }) => {
  return (
    <NavLink to={redirect}>
      <button className={styles.frontButton}>{text}</button>
    </NavLink>
  );
};
