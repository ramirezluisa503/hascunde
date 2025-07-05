import { Row } from 'react-bootstrap';
import star from '../../assets/images/star.svg';
import styles from './HelpYouCard.module.css';

export const HelpYouCard = ({ title, text }) => {
  return (
    <article className={styles.container}>
      <section className={styles.starContain}>
        <img src={star} alt="star" className={styles.star} />
        <h3 className={styles.starTitle}>{title}</h3>
      </section>
      <div className={styles.starTextContain}>
        <p className={styles.starText}>{text}</p>
      </div>
    </article>
  );
};
