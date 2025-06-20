import styles from './NavBar.module.css';
import { Logo } from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <article className={styles.container}>
      <Logo />

      <nav className={styles.containerLinks}>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive ? styles.textNavSel : styles.textNav
          }
        >
          Homepage
        </NavLink>
        <NavLink
          to={'/AboutUs'}
          className={({ isActive }) =>
            isActive ? styles.textNavSel : styles.textNav
          }
        >
          About Us
        </NavLink>
        <NavLink
          to={'/OurMission'}
          className={({ isActive }) =>
            isActive ? styles.textNavSel : styles.textNav
          }
        >
          Our Mission
        </NavLink>
        <NavLink
          to={'/CoreValues'}
          className={({ isActive }) =>
            isActive ? styles.textNavSel : styles.textNav
          }
        >
          Core Values
        </NavLink>
        <NavLink
          to={'/ContactUs'}
          className={({ isActive }) =>
            isActive ? styles.textNavSel : styles.textNav
          }
        >
          Contact Us
        </NavLink>
      </nav>
    </article>
  );
};
