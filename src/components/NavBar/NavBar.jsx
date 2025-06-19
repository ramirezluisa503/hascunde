import hascundeLogo from '../../assets/images/hascunde-logo.webp';
import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    <article className={styles.container}>
      <section className={styles.logoContainer}>
        <img
          className={styles.logoImage}
          src={hascundeLogo}
          alt="hascunde-logo"
        />
        <h1>Hascunde</h1>
      </section>

      <section className={styles.containerLinks}>
        <p className={styles.textNavSel}>Homepage</p>
        <p className={styles.textNav}>About Us</p>
        <p className={styles.textNav}>Our Mission</p>
        <p className={styles.textNav}>Core Values</p>
        <p className={styles.textNav}>Contact Us</p>
      </section>
    </article>
  );
};
