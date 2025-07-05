import { Layout } from '../../Layout/Layout';
import styles from '../AboutUs/AboutUs.module.css';
import TeamMembers from '../../TeamMembers/TeamMembers';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import Cafeteros from '../../../assets/images/CafeterosAboutUs.webp';
import Autoconfianza from '../../../assets/images/AutoconfianzaAboutUs.webp';
import { GreenButton } from '../../GreenButton/GreenButton';

export const AboutUs = () => {
  return (
    <Layout>
      <article className={styles.mainContainer}>
        <section className={styles.frontPage}>
          <div className={styles.overlayBlur}></div>
          <div className={styles.frontContain}>
            <h1 className={styles.frontTitle}>
              Desafíos del Hombre Líder Moderno
            </h1>
            <p className={styles.frontText}>
              Vivimos en un contexto de evolución tecnológica constante que nos
              plantea retos para nuestro desarrollo personal y profesional
            </p>
            <button className={styles.frontButton}>Aprender Más</button>
          </div>
        </section>

        <Container className={`${styles.aboutUsContainer2} px-3 px-md-4`}>
          <Row className="align-items-center gy-4 gy-lg-0">
            <Col xs={12} className={`${styles.textColum} order-2 order-lg-1`}>
              <h2 className={styles.hascundeTitle}>¿ Por qué HASCUNDE?</h2>
              <p className={styles.paragraph}>
                El nombre 'Hascunde' proviene del euskera 'Hazkunde', que
                significa 'crecimiento' o 'desarrollo'. Este concepto es
                esencial para la misión de la empresa, que busca fomentar el
                crecimiento personal y profesional en hombres que desean una
                vida equilibrada y significativa.
              </p>
              <p className={styles.paragraph}>
                Las raíces vascas y gallegas de la cultura paisa aportan una
                herencia rica en tradiciones de trabajo duro, comunidad y
                resiliencia. Estas influencias se reflejan en el carácter de los
                líderes modernos que buscan equilibrio y fortaleza en su vida
                personal y profesional.
              </p>
              <p className={styles.paragraph}>
                En esencia, Hascunde representa el descubrimiento de nuestro
                máximo potencial: un proceso para liberarnos de las limitaciones
                y abrazar la auténtica libertad. Se trata de cultivar la
                disciplina, la consciencia y la resiliencia necesarias para
                afrontar las complejidades de la vida con gracia y propósito, lo
                que nos lleva a una existencia equilibrada y plena.
              </p>
              <div className="mt-3 mt-md-4">
                <Button
                  variant="secondary"
                  className={`${styles.hascundeButton} w-100 w-sm-auto`}
                >
                  Explora Nuestros Valores Fundamentales
                </Button>
              </div>
            </Col>
            <Col
              xs={12}
              lg={6}
              xl={5}
              className={`${styles.imageColum} order-1 order-lg-2 text-center`}
            >
              <img
                src={Cafeteros}
                alt="Cafeteros cosechando"
                className={`${styles.hascundeImage} img-fluid`}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Col>
          </Row>
        </Container>

        {/* Sección Poder del Autoconocimiento - Mejorada responsividad */}
        <Container className={`${styles.aboutUsContainer3} px-3 px-md-4`}>
          <Row className="align-items-center gy-4 gy-lg-0">
            <Col xs={12} lg={6} className="order-2 order-lg-1">
              <h2 className={styles.powerTitle}>
                El Poder del Autoconocimiento
              </h2>
              <p className={styles.textColum}>
                El autoconocimiento se refiere a la comprensión profunda de uno
                mismo, incluyendo emociones, motivaciones, valores y
                comportamientos. Esta capacidad de reflexión permite a las
                personas evaluar sus habilidades y limitaciones, facilitando el
                crecimiento personal y profesional.
              </p>
            </Col>
            <Col
              xs={12}
              lg={6}
              className={`${styles.imageColum} order-1 order-lg-2 text-center`}
            >
              <img
                src={Autoconfianza}
                alt="Imagen Autoconfianza"
                className={`${styles.powerImage} img-fluid`}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Col>
          </Row>
        </Container>

        {/* Sección de Cards - Significativamente mejorada */}
        <Container className="my-4 my-md-5 px-3 px-md-4">
          <Row className="g-3 g-md-4">
            {/* Card 1 */}
            <Col xs={12} sm={6} lg={6} xl={6}>
              <Card className={`${styles.cards} h-100 shadow-sm`}>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className={`${styles.cardsH3} mb-3`}>
                    Evaluación de Fortalezas CliftonStrenght
                  </Card.Title>
                  <Card.Text className={`${styles.cardsP} flex-grow-1`}>
                    Tus informes y guías personalizados de CliftonStrengths te
                    brindarán un momento revelador a medida que experimentas
                    nuevas formas de comprender lo que te hace tan único.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col xs={12} sm={6} lg={6} xl={6}>
              <Card className={`${styles.cards} h-100 shadow-sm`}>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className={`${styles.cardsH3} mb-3`}>
                    Gestor de conocimiento
                  </Card.Title>
                  <Card.Text className={`${styles.cardsP} flex-grow-1`}>
                    Cómo organizar nuestras ideas, pensamiento y notas? Entrarás
                    a un nuevo concepto de Cerebro Digital, para que puedas
                    capturar, procesar, aprender y compartir información, para
                    que lo conviertas en tu legado
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col xs={12} sm={6} lg={6} xl={6}>
              <Card className={`${styles.cards} h-100 shadow-sm`}>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className={`${styles.cardsH3} mb-3`}>
                    Poder Físico
                  </Card.Title>
                  <Card.Text className={`${styles.cardsP} flex-grow-1`}>
                    Libertad de movimiento para disfrutar de la vida plenamente,
                    conectando la mente con el cuerpo, aprendiéndolo a dominar
                    en aspectos como fuerza, movilidad, flexibilidad,
                    estabilidad, potencia, velocidad y resistencia.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 4 */}
            <Col xs={12} sm={6} lg={6} xl={6}>
              <Card className={`${styles.cards} h-100 shadow-sm`}>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className={`${styles.cardsH3} mb-3`}>
                    Cosmovisión y Espiritualidad
                  </Card.Title>
                  <Card.Text className={`${styles.cardsP} flex-grow-1`}>
                    Compartiremos las distintas cosmovisiones y te mostraremos
                    algunas de las guías y pensamientos de grandes hombres de la
                    historia, que te ayudaran a transitar el camino del
                    autoconocimiento e individuación necesario para crecer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Sección Voces Guía - Mejorada */}
        <Container className="px-3 px-md-4">
          <Row>
            <Col xs={12} className="text-center mt-md-5">
              <h2 className={styles.guidingVoicesTitle}>Voces Guía</h2>
              <p
                className={`${styles.guidingVoicesDescription} mx-auto`}
                style={{ maxWidth: '600px' }}
              >
                Conoce a las personas dedicadas que impulsan la visión de
                Hascunde
              </p>
            </Col>
          </Row>
        </Container>

        <TeamMembers />

        {/* Sección Legacy - Call to Action final */}
        <Container className={`${styles.legacyContainer} px-3 px-md-4`}>
          <Row>
            <Col xs={12} className="text-center py-4 py-md-5">
              <h3 className={`${styles.legacyTitle} mb-3 mb-md-4`}>
                Quieres dejar un Legado?
              </h3>
              <p
                className={`${styles.legacyText} mx-auto mb-4`}
                style={{ maxWidth: '700px' }}
              >
                Hascunde es más que un programa; es un compromiso de por vida
                con el crecimiento. Únete a una hermandad de hombres que forjan
                caminos más sólidos.
              </p>
              <GreenButton text={'Connect With Us Today'} />
            </Col>
          </Row>
        </Container>
      </article>
    </Layout>
  );
};
