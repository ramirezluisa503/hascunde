import { Layout } from '../../Layout/Layout';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import styles from './CoreValues.module.css';
import { GreenButton } from '../../GreenButton/GreenButton';
import { CoreValuesCard } from '../../CoreValuesCard/CoreValuesCard';
import hoja from '../../../assets/images/hoja.svg';
import cerebro from '../../../assets/images/cerebro.svg';
import user from '../../../assets/images/user.svg';
import corazon from '../../../assets/images/corazon.svg';

export const CoreValues = () => {
  return (
    <Layout>
      <section className={styles.frontPage}>
        <div className={styles.overlayBlur}></div>
        <div className={styles.frontContain}>
          <h1 className={styles.frontTitle}>
            Inspiración en la Cultura y Naturaleza del Eje Cafetero
          </h1>
          <p className={styles.frontText}>
            Los principios de la cultura del Eje Cafetero, como el pragmatismo y
            la adaptabilidad, guían a Hascunde en la capacitación de líderes..
          </p>
        </div>
      </section>

      <Container>
        <h2 className={styles.title}>Como podemos ayudarte</h2>
        <p className={styles.subTitle}>
          El público objetivo de Hascunde incluye a líderes gerentes, CEOs y
          emprendedores que buscan potenciar su liderazgo y tranquilidad, para
          llevar a cabo los retos que su propósito le propone, desarrollando su
          propio camino para lograrlo.{' '}
        </p>
      </Container>

      <Container>
        <Row>
          <CoreValuesCard
            title={'Mentoring'}
            text={
              'El mentoring se basa en una relación de desarrollo en la que un mentor experimentado guía a un menos experimentado, transmitiendo conocimientos y experiencias para su crecimiento profesional y personal.'
            }
            image={user}
          />

          <CoreValuesCard
            title={'Coaching'}
            text={
              'El coaching implica un proceso interactivo donde un coach ayuda a un individuo a alcanzar objetivos específicos mediante preguntas, retroalimentación y estrategias efectivas, potenciando su rendimiento.'
            }
            image={corazon}
          />

          <CoreValuesCard
            title={'Consultoría'}
            text={
              'La consultoría se refiere a la asesoría profesional brindada por consultores, que analizan problemas específicos de una organización y proporcionan soluciones estratégicas personalizadas.'
            }
            image={hoja}
          />

          <CoreValuesCard
            title={'Transformación Digital'}
            text={
              'Se define como la adopción y adaptación de tecnologías digitales para transformar los procesos de negocio, los modelos de negocio y la experiencia del cliente.'
            }
            image={cerebro}
          />
        </Row>
      </Container>

      <Container className={styles.catContainer}>
        <Row>
          <section>
            <div className={styles.frontContain}>
              <h1 className={styles.frontTitle}>Descubre tu Animal Sagrado</h1>
              <p className={styles.frontText}>
                El proceso de descubrir tu animal sagrado es una exploración
                personal que puede enriquecer tu vida y darte una mayor conexión
                con la naturaleza y contigo mismo
              </p>
              <GreenButton text={'Connect With Us'} />
            </div>
          </section>
        </Row>
      </Container>
    </Layout>
  );
};
