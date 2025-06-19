import { NavBar } from './NavBar/NavBar';
import { Footer } from './Footer/Footer';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.principal}>
      <NavBar />
      <article className={styles.midContent}>Mid Content</article>
      <Footer />
    </div>
  );
}
