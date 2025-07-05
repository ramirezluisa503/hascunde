import React from 'react';
import { useTranslation } from 'react-i18next'; // Importamos useTranslation
import styles from './NavBar.module.css';
import { Logo } from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(); // Inicializamos la función de traducción 't'

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className={styles.container}>
      <Logo />

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <nav className={`${styles.containerLinks} ${isOpen ? styles.open : ''}`}>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive ? styles.textNavSel : styles.textNav
          }
          onClick={() => setIsOpen(false)}
        >
          {t('nav_home')}
        </NavLink>
        <NavLink
          to={'/AboutUs'}
          className={({ isActive }) =>
            isActive ? styles.textNavSel : styles.textNav
          }
          onClick={() => setIsOpen(false)}
        >
          {t('nav_about_us')}
        </NavLink>
        <NavLink
          to={'/OurMission'}
          className={({ isActive }) =>
            isActive ? styles.textNavSel : styles.textNav
          }
          onClick={() => setIsOpen(false)}
        >
          {t('nav_our_mission')}
        </NavLink>
        <NavLink
          to={'/CoreValues'}
          className={({ isActive }) =>
            isActive ? styles.textNavSel : styles.textNav
          }
          onClick={() => setIsOpen(false)}
        >
          {t('nav_core_values')}
        </NavLink>
        <NavLink
          to={'/ContactUs'}
          className={({ isActive }) =>
            isActive ? styles.textNavSel : styles.textNav
          }
          onClick={() => setIsOpen(false)}
        >
          {t('nav_contact_us')}
        </NavLink>
      </nav>
    </article>
  );
};
