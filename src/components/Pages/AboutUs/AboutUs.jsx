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

      <Container className={styles.aboutUsContainer2}>
        <Row>
          <Col xs={12} md={6} className={styles.textColum}>
            <h2 className={styles.hascundeTitle}>¿ Por qué HASCUNDE?</h2>
            <p className={styles.paragraph}>
              El nombre 'Hascunde' proviene del euskera 'Hazkunde', que
              significa 'crecimiento' o 'desarrollo'. Este concepto es esencial
              para la misión de la empresa, que busca fomentar el crecimiento
              personal y profesional en hombres que desean una vida equilibrada
              y significativa. <br />
              <br />
              Las raíces vascas y gallegas de la cultura paisa aportan una
              herencia rica en tradiciones de trabajo duro, comunidad y
              resiliencia. Estas influencias se reflejan en el carácter de los
              líderes modernos que buscan equilibrio y fortaleza en su vida
              personal y profesional.
              <br />
              <br />
              En esencia, Hascunde representa el descubrimiento de nuestro
              máximo potencial: un proceso para liberarnos de las limitaciones y
              abrazar la auténtica libertad. Se trata de cultivar la disciplina,
              la consciencia y la resiliencia necesarias para afrontar las
              complejidades de la vida con gracia y propósito, lo que nos lleva
              a una existencia equilibrada y plena.{' '}
            </p>
            <Button variant="secondary" className={styles.hascundeButton}>
              Explora Nuestros Valores Fundamentales
            </Button>
          </Col>
          <Col xs={12} md={6} className={styles.imageColum}>
            <img
              src={Cafeteros}
              alt="Cafeteros cosechando"
              className={styles.hascundeImage}
            />
          </Col>
        </Row>
      </Container>
      <Container className={styles.aboutUsContainer3}>
        <Row>
          <Col xs={12} md={6}>
            <h2 className={styles.powerTitle}>El Poder del Autoconocimiento</h2>
            <p className={styles.textColum}>
              El autoconocimiento se refiere a la comprensión profunda de uno
              mismo, incluyendo emociones, motivaciones, valores y
              comportamientos. Esta capacidad de reflexión permite a las
              personas evaluar sus habilidades y limitaciones, facilitando el
              crecimiento personal y profesional.
            </p>
          </Col>
          <Col xs={12} md={6} className={styles.imageColum}>
            <img
              src={Autoconfianza}
              alt="Imagen Autoconfianza"
              className={styles.powerImage}
            />
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="g-4">
          {/* Card 1 */}
          <Col xs={12} md={6} className="mb-4">
            <Card className={`${styles.cards} h-100`}>
              <Card.Body>
                <Card.Title className={styles.cardsH3}>
                  Evaluación de Fortalezas CliftonStrenght
                </Card.Title>
                <Card.Text className={styles.cardsP}>
                  Tus informes y guías personalizados de CliftonStrengths te
                  brindarán un momento revelador a medida que experimentas
                  nuevas formas de comprender lo que te hace tan único.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={12} md={6} className="mb-4">
            <Card className={`${styles.cards} h-100`}>
              <Card.Body>
                <Card.Title className={styles.cardsH3}>
                  Gestor de conocimiento
                </Card.Title>
                <Card.Text className={styles.cardsP}>
                  Cómo organizar nuestras ideas, pensamiento y notas? Entrarás a
                  un nuevo concepto de Cerebro Digital, para que puedas
                  capturar, procesar, aprender y compartir información, para que
                  lo conviertas en tu legado
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col xs={12} md={6} className="mb-4">
            <Card className={`${styles.cards} h-100`}>
              <Card.Body>
                <Card.Title className={styles.cardsH3}>Poder Físico</Card.Title>
                <Card.Text className={styles.cardsP}>
                  Libertad de movimiento para disfrutar de la vida plenamente,
                  conectando la mente con el cuerpo, aprendiéndolo a dominar en
                  aspectos como fuerza, movilidad, flexibilidad, estabilidad,
                  potencia, velocidad y resistencia.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col xs={12} md={6} className="mb-4">
            <Card className={`${styles.cards} h-100`}>
              <Card.Body>
                <Card.Title className={styles.cardsH3}>
                  Cosmovisión y Espiritualidad
                </Card.Title>
                <Card.Text className={styles.cardsP}>
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

      <Container>
        <h2 className={styles.guidingVoicesTitle}>Voces Guía</h2>
        <p className={styles.guidingVoicesDescription}>
          Conoce a las personas dedicadas que impulsan la visión de Hascunde
        </p>
      </Container>

      <TeamMembers />

      <Container className={styles.legacyContainer}>
        <Row>
          <Col xs={12} md={12}>
            <h3 className={styles.legacyTitle}>Quieres dejar un Legado?</h3>
            <p className={styles.legacyText}>
              Hascunde es más que un programa; es un compromiso de por vida con
              el crecimiento. Únete a una hermandad de hombres que forjan
              caminos más sólidos.
            </p>
            <GreenButton text={'Connect With Us Today'} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
