import styles from './Layout.module.css';
import { Footer } from '../Footer/Footer';
import { NavBar } from '../NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Layout = ({ children }) => {
  return (
    <div className={styles.principal}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
