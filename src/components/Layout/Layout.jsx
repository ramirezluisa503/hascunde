import styles from './Layout.module.css';
import { Footer } from '../Footer/Footer';
import { NavBar } from '../NavBar/NavBar';

export const Layout = ({ children }) => {
  console.log(children);
  return (
    <div className={styles.principal}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
