import { NavBar } from './NavBar/NavBar';
import { Footer } from './Footer/Footer';
import styles from './App.module.css';
import { HomePage } from './Pages/HomePage/HomePage';

export const App = () => {
  return (
    <div className={styles.principal}>
      <NavBar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};
