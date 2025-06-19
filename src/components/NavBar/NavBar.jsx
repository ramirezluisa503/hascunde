import styles from './NavBar.module.css';
import { Logo } from '../Logo/Logo';

export const NavBar = () => {
  return (
    <article className={styles.container}>
      <Logo />

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
