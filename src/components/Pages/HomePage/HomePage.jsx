import { Layout } from '../../Layout/Layout';
import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <>
      <Layout>
        <section className={styles.columText}>
          <div className={styles.colum1}>
            <h2 className={styles.greenText}>
              Nuestro Propósito de Transformación Masiva
            </h2>
            <p className={styles.italicText}>
              Libertad para los hombres que quieren encontrar tranquilidad,
              bienestar y propósito.
            </p>
          </div>

          <div className={styles.colum2}>
            <p className={styles.greyText}>
              Nuestra misión es inspirar a los nuevos lideres a revolucionar sus
              empresas y emprendimientos hacía el nuevo paradigma de la
              consciencia digital, y de esa manera logren sus propósitos.
              Fortalecemos líderes resilientes inspirados en la sabiduría
              ancestral de sus propios orígenes y desarrollando sus propios
              pilares para que encuentren el camino que los hombres quieren
              hacia la libertad integral
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};
