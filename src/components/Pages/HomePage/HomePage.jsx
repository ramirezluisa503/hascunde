import styles from "./HomePage.module.css";
import SobrePortada from '../../../assets/images/SobrePortadaHascundeHomePage.webp'

export const HomePage = () => {
  return (
    <article>
      <section className={styles.frontPage}></section>
      {/*Seccion Nuestro proposito de transformacion */}
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
            pilares para que encuentren el camino que los hombres quieren hacia
            la libertad integral
          </p>
        </div>
      </section>

      {/*Seccion Nuestra Guia y Principios */}
      <section>
        <div class={styles.guidingPrinciples}>
          <h2 className={styles.title}>Nuestra Guía y Principios</h2>
          <p className={styles.description}>
            Construimos sociedad a través de un modelo de transformación ,
            Mental, Física, Espiritual y Tecnológica, que construye al hombre,
            en un ser libre, amorosos, bondadoso, exitoso y abundante.
          </p>
        </div>

        <div></div>
      </section>


      {/*Seccion como te puedo ayudar hascunde */}
      <section className={styles.row4}>
        <div>
          <h2 className={styles.greenText}>Cómo te puede ayudar Hascunde?</h2>
          <div>

            <h3>Coaching: Potenciando Liderazgo</h3>
            <p >El coaching de Hascunde se centra en desarrollar un liderazgo consciente, gestionando cambios con tranquilidad. Los líderes fortalecen su productividad y eficiencia mientras priorizan su bienestar, aplicando principios estratégicos adaptados a su contexto personal y profesional.</p>
            <h3>Mentoring: Guía Experta</h3>
            <p>Los programas de mentoring ofrecen guía a nuevos emprendedores y líderes. Con un enfoque en la perspectiva familiar, se fomenta el desarrollo de carreras con consciencia y se facilita una transferencia de conocimiento orientada al bienestar integral.</p>
            <h3>Consultoría: Estrategias exponenciales y comerciales</h3>
            <p>La consultoría de Hascunde se enfoca en desarrollar estrategias con un enfoque humano, garantizando resultados sostenibles. Se abordan aspectos como la planificación estratégica de ventas consultivas y optimización de procesos, siempre priorizando el bienestar del equipo.</p>
            <h3>Servicios Tecnológicos de transformación Digital</h3>
            <p>Asesoría en digitalización y transformación digital para emprendedores y empresas con perfiles exponenciales, también, acompañamos para la apropiación de la inteligencia artificial y el análisis de datos.</p>

          </div>

        </div>
        <div>
          <img src={SobrePortada} alt="" />
          <h4></h4>
          <button>Discover Our Programs</button>
          
        </div>

      </section>
    </article>
  );
};
