import styles from './HomePage.module.css';



export const HomePage = () => {
  return (
    <article>

      <section className={styles.frontPage}>
        

      </section>


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
            empresas y emprendimientos hacía el nuevo paradigma de la consciencia
            digital, y de esa manera logren sus propósitos. Fortalecemos líderes
            resilientes inspirados en la sabiduría ancestral de sus propios
            orígenes y desarrollando sus propios pilares para que encuentren el
            camino que los hombres quieren hacia la libertad integral
          </p>
        </div>
      </section>
      <section>
        <div class={styles.guidingPrinciples}>
          <h2 className={styles.title}>Nuestra Guía y Principios</h2>
          <p className={styles.description} >Construimos sociedad a través de un modelo de transformación , Mental, Física, Espiritual y Tecnológica, que construye al hombre, en un ser libre, amorosos, bondadoso, exitoso y abundante.</p>

        </div>

        <div>

        </div>




      </section>


    </article>

  );
};
