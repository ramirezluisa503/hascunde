import styles from './NavBar.module.css';
import { Logo } from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          Inicio
        </NavLink>
        <NavLink
          to={'/AboutUs'}
          className={({ isActive }) =>
            isActive ? styles.textNavSel : styles.textNav
          }
          onClick={() => setIsOpen(false)}
        >
          Acerca de nosotros
        </NavLink>
        <NavLink
          to={'/OurMission'}
          className={({ isActive }) =>
            isActive ? styles.textNavSel : styles.textNav
          }
          onClick={() => setIsOpen(false)}
        >
          Nuestra misión
        </NavLink>
        <NavLink
          to={'/CoreValues'}
          className={({ isActive }) =>
            isActive ? styles.textNavSel : styles.textNav
          }
          onClick={() => setIsOpen(false)}
        >
          Valores clave
        </NavLink>
        <NavLink
          to={'/ContactUs'}
          className={({ isActive }) =>
            isActive ? styles.textNavSel : styles.textNav
          }
          onClick={() => setIsOpen(false)}
        >
          Contáctanos
        </NavLink>
      </nav>
    </article>
  );
};
