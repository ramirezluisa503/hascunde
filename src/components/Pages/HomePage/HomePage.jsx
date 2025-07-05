import styles from './HomePage.module.css';
import Tibetan from '../../../assets/images/SobrePortadaHascundeHomePage.webp';
import { Layout } from '../../Layout/Layout';
import { Row, Col, Container } from 'react-bootstrap';
import front from '../../../assets/images/hascundeBlur.webp';
import { HomeCards } from '../../HomeCards/HomeCards';
import { HelpYouCard } from '../../HelpYouCard/HelpYouCard';
import { GreenButton } from '../../GreenButton/GreenButton';

export const HomePage = () => {
  return (
    <Layout>
      <section className={styles.frontPage}>
        <img src={front} alt="front" className={styles.blurImage} />
        <div className={styles.frontContain}>
          <h1 className={styles.frontTitle}>Despierta tu Libertad</h1>
          <p className={styles.frontText}>
            Familia, Tranquilidad, Bienestar y Consciencia para el Hombre Líder
            en busqueda de autoconocerse
          </p>
          <GreenButton text={'Begin Your Journey'} />
        </div>
      </section>

      <Container className="mt-3 mt-md-5 px-3 px-md-4">
        <Row className="align-items-center gy-4 gy-md-0">
          <Col xs={12} lg={6} className={styles.leftColumn}>
            <h2 className={styles.mainTitle}>
              Nuestro Propósito de <br className="d-none d-md-block" />
              Transformación Masiva
            </h2>
            <div className={styles.lineContainer}>
              <div className={styles.verticalLine}></div>
              <p className={styles.secondaryText}>
                Libertad para los hombres que quieren{' '}
                <br className="d-none d-md-block" />
                encontrar tranquilidad, bienestar y{' '}
                <br className="d-none d-md-block" />
                propósito.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={6} className={styles.rightColumn}>
            <p className={styles.mainParagraph}>
              Nuestra misión es inspirar a los nuevos lideres a revolucionar sus
              empresas y emprendimientos hacía el nuevo paradigma de la
              consciencia digital, y de esa manera logren sus propósitos.
              Fortalecemos líderes resilientes inspirados en la sabiduría
              ancestral de sus propios orígenes y desarrollando sus propios
              pilares para que encuentren el camino que los hombres quieren
              hacia la libertad integral
            </p>
          </Col>
        </Row>

        <Row className="mt-4 mt-md-5">
          <Col xs={12} className="text-center">
            <h2 className={styles.title}>Nuestra Guía y Principios</h2>
            <p
              className={`${styles.mainParagraph2} mx-auto`}
              style={{ maxWidth: '800px' }}
            >
              Construimos sociedad a través de un modelo de transformación ,
              Mental, Física, Espiritual y Tecnológica, que construye al hombre,
              en un ser libre, amorosos, bondadoso, exitoso y abundante.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="my-4 my-md-5 px-3 px-md-4">
        <Row xs={12} className="justify-content-center g-3 g-md-4">
          <HomeCards
            icon={'bi bi-person-hearts'}
            title={'Familia'}
            content={
              'Cultivar vínculos profundos y alimentar un legado de amor, respeto y apoyo duradero, reconociendo a la familia como la base de una vida equilibrada.'
            }
          />

          <HomeCards
            icon={'bi bi-heart-pulse'}
            title={'Bienestar'}
            content={
              'Priorizar la salud holística (mente, cuerpo y espíritu) a través de prácticas intencionales que fomentan la vitalidad, la resiliencia y la paz interior para una salud duradera.'
            }
          />

          <HomeCards
            icon={'bi bi-boxes'}
            title={'Tranquilidad'}
            content={
              'Alcanzar un estado de calma interior y claridad en medio de las exigencias de la vida, a través de la atención plena, la autoconciencia y la acción con propósito en cada momento.'
            }
          />

          <HomeCards
            icon={'bi bi-person-hearts'}
            title={'Consciencia'}
            content={
              'Profundizar la autoconciencia y la comprensión del propio propósito, impacto y conexión con el mundo, lo que conduce a elecciones más intencionales y satisfactorias.'
            }
          />
        </Row>
      </Container>

      {/* Sección de servicios - Mejor responsive */}
      <Container className="px-3 px-md-4">
        <Row className="gy-4 gy-lg-0">
          <Col xs={12} lg={8}>
            <h2 className={styles.greenTitle}>
              Cómo te puede ayudar Hascunde?
            </h2>

            <div className="d-flex flex-column gap-3 gap-md-4">
              <Row>
                <HelpYouCard
                  title={'Coaching: Potenciando Liderazgo'}
                  text={
                    'El coaching de Hascunde se centra en desarrollar un liderazgo consciente, gestionando cambios con tranquilidad. Los líderes fortalecen su productividad y eficiencia mientras priorizan su bienestar, aplicando principios estratégicos adaptados a su contexto personal y profesional.'
                  }
                />

                <HelpYouCard
                  title={'Mentoring: Guía Experta'}
                  text={
                    'Los programas de mentoring ofrecen guía a nuevos emprendedores y líderes. Con un enfoque en la perspectiva familiar, se fomenta el desarrollo de carreras con consciencia y se facilita una transferencia de conocimiento orientada al bienestar integral.'
                  }
                />

                <HelpYouCard
                  title={'Consultoría: Estrategias exponenciales y comerciales'}
                  text={
                    'La consultoría de Hascunde se enfoca en desarrollar estrategias con un enfoque humano, garantizando resultados sostenibles. Se abordan aspectos como la planificación estratégica de ventas consultivas y optimización de procesos, siempre priorizando el bienestar del equipo.'
                  }
                />

                <HelpYouCard
                  title={'Servicios Tecnológicos de transformación Digital'}
                  text={
                    'Asesoría en digitalización y transformación digital para emprendedores y empresas con perfiles exponenciales, también, acompañamos para la apropiación de la inteligencia artificial y el análisis de datos.'
                  }
                />
              </Row>
            </div>
          </Col>

          <Col
            xs={12}
            lg={4}
            className={`${styles.tibetanContent} d-flex flex-column align-items-center text-center`}
          >
            <div className="w-100" style={{ maxWidth: '300px' }}>
              <img
                src={Tibetan}
                alt="Samatha Tibetan Meditation Thangka"
                className={`${styles.tibetanImage} img-fluid`}
              />
              <h4 className={`${styles.starText} mt-3 mb-3`}>
                Samatha Tibetan Meditation Thangka
              </h4>
              <GreenButton text={'Discover Our Programs'} />
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        className={`${styles.brownWallContainer} mt-4 mt-md-5 px-3 px-md-4`}
      >
        <Row>
          <Col
            xs={12}
            className={`${styles.brownWall} text-center py-4 py-md-5`}
          >
            <h2 className={`${styles.brownTitle} mb-3 mb-md-4`}>
              Listo para forjar tu camino hacia el balance y la libertad?
            </h2>
            <GreenButton text={'Connect with Us Today'} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
