import star from '../../assets/images/star.svg';
import styles from './HelpYouCard.module.css';
import { NavLink } from 'react-router-dom';

export const HelpYouCard = ({ title, text }) => {
  return (
    <article className={styles.container}>
      <NavLink
        to={'/contactUs'}
        className={styles.starContain}
      >
        <img
          src={star}
          alt="star"
          className={styles.star}
        />
        <h3 className={styles.starTitle}>{title}</h3>
      </NavLink>
      <div className={styles.starTextContain}>
        <p className={styles.starText}>{text}</p>
      </div>
    </article>
  );
};
