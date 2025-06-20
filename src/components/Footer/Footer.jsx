import { Logo } from '../Logo/Logo';
import twitter from '../../assets/images/twitter.webp';
import facebook from '../../assets/images/facebook.webp';
import instagram from '../../assets/images/instagram.webp';
import linkedin from '../../assets/images/linkedin.webp';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <article className={styles.footer}>
      <section className={styles.footerMain}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Logo />
          </div>
          <div className={styles.subscriptionSection}>
            <h3>Subscribe to our newsletter</h3>
            <div className={styles.emailContainer}>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.footerBottom}>
        <button className={styles.languageSelector}>English</button>
        <p className={styles.copyright}>© 2024 Hascunde.</p>
        <div className={styles.socialMedia}>
          <a href="#" aria-label="twitter">
            <img className={styles.socialImage} src={twitter} alt="twitter" />
          </a>
          <a href="#" aria-label="facebook">
            <img className={styles.socialImage} src={facebook} alt="facebook" />
          </a>
          <a href="#" aria-label="instagram">
            <img
              className={styles.socialImage}
              src={instagram}
              alt="instagram"
            />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img className={styles.socialImage} src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </section>
    </article>
  );
};
