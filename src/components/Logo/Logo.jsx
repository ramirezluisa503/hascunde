import hascundeLogo from '../../assets/images/hascunde-logo.webp';
import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <section className={styles.logoContainer}>
      <img
        className={styles.logoImage}
        src={hascundeLogo}
        alt="hascunde-logo"
      />
      <h2>Hascunde</h2>
    </section>
  );
};
