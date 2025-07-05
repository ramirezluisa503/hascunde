import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo/Logo';
import twitter from '../../assets/images/twitter.webp';
import facebook from '../../assets/images/facebook.webp';
import instagram from '../../assets/images/instagram.webp';
import linkedin from '../../assets/images/linkedin.webp';
import styles from './Footer.module.css';

export const Footer = () => {
  // 1. Obtén la función 't' para traducir y la instancia 'i18n' para cambiar el idioma
  const { t, i18n } = useTranslation();

  // 2. Función para alternar el idioma entre español e inglés
  const toggleLanguage = () => {
    // Si el idioma actual es 'es' (español), cámbialo a 'en' (inglés)
    // De lo contrario, cámbialo a 'es'
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang); // Esto actualiza el idioma global de la aplicación
  };

  return (
    <article className={styles.footer}>
      <section className={styles.footerMain}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Logo />
          </div>
          <div className={styles.subscriptionSection}>
            <h3>{t('newsletter_title')}</h3>
            <div className={styles.emailContainer}>
              <input type="email" placeholder={t('email_placeholder')} />
              <button>{t('subscribe_button')}</button>{' '}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.footerBottom}>
        <button className={styles.languageSelector} onClick={toggleLanguage}>
          {t('language_button_text')}
        </button>
        <p className={styles.copyright}>{t('copyright_text')}</p>{' '}
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
