import { Layout } from '../../Layout/Layout';
import styles from './ContactUs.module.css';

export const ContactUs = () => {
  return (
    <Layout>
      <section className={styles.frontPage}>
        <div className={styles.overlayBlur}></div>
        <div className={styles.frontContain}>
          <h1 className={styles.frontTitle}>Contacto</h1>
          <p className={styles.frontText}>Juan Onca Umbra</p>
          <div>
            <div>
              <img src="" alt="" />
              <p>Belen de Umbria Ris-Vereda la Selva- Finca El Bosque</p>
            </div>

            <div>
              <img src="" alt="" />
              <p>Juanoncaumbra@hascunde.com</p>
            </div>

            <div>
              <img src="" alt="" />
              <p>Col +57 310 8867847 Pe +57 932395049</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
