import styles from "./HomePage.module.css";
import Portada from "../../../assets/images/PortadaHomePage.webp";
import Tibetan from "../../../assets/images/SobrePortadaHascundeHomePage.webp";
import { Layout } from "../../Layout/Layout";
import { Row, Col, Container, Card, Button } from "react-bootstrap";

export const HomePage = () => {
  return (
    <Layout>
      <article>
        <Row>
          <img src={Portada} alt="Portada Home Page" className="img-fluid" />
        </Row>

        <Container className="mt-5">
          <Row className="align-items-start">
            <Col xs={12} md={6} className={styles.leftColumn}>
              <h2 className={styles.mainTitle}>
                Nuestro Propósito de <br />
                Transformación Masiva
              </h2>
              <div className={styles.lineContainer}>
                <div className={styles.verticalLine}></div>
                <p className={styles.secondaryText}>
                  Libertad para los hombres que quieren encontrar tranquilidad,
                  bienestar y propósito.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} className={styles.rightColumn}>
              <p className={styles.mainParagraph}>
                Nuestra misión es inspirar a los nuevos lideres a revolucionar
                sus empresas y emprendimientos hacía el nuevo paradigma de la
                consciencia digital, y de esa manera logren sus propósitos.
                Fortalecemos líderes resilientes inspirados en la sabiduría
                ancestral de sus propios orígenes y desarrollando sus propios
                pilares para que encuentren el camino que los hombres quieren
                hacia la libertad integral
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <row>
            <Col md={12}>
              <h2>Nuestra Guía y Principios</h2>
              <p>
                Construimos sociedad a través de un modelo de transformación ,
                Mental, Física, Espiritual y Tecnológica, que construye al
                hombre, en un ser libre, amorosos, bondadoso, exitoso y
                abundante.
              </p>
            </Col>
          </row>
        </Container>

        <Container className="my-5">
          {" "}
          {/* my-5 para margen vertical (top y bottom) */}
          <Row className="justify-content-center">
            {" "}
            {/* Centra las columnas si no ocupan el 100% */}
            {/* Tarjeta 1: Familia */}
            <Col xs={12} md={6} lg={3} className="mb-4">
              {" "}
              {/* Responsive: 1 por fila en xs, 2 en md, 4 en lg */}
              <Card className={styles.card}>
                <Card.Body className="text-center">
                  <div className={styles.iconCircle}>
                    {/* Aquí iría tu icono SVG o de react-icons, por ejemplo: <FaRegCompass className={styles.cardIcon} /> */}
                    <i className="bi bi-person-hearts"></i>{" "}
                    {/* Icono de ejemplo si usas Bootstrap Icons */}
                  </div>
                  <Card.Title className={styles.cardTitle}>Familia</Card.Title>
                  <Card.Text className={styles.cardText}>
                    Cultivar vínculos profundos y alimentar un legado de amor,
                    respeto y apoyo duradero, reconociendo a la familia como la
                    base de una vida equilibrada.
                  </Card.Text>
                  <div className={styles.arrowIcon}>&#8594;</div>{" "}
                  {/* Flecha unicode */}
                </Card.Body>
              </Card>
            </Col>
            {/* Tarjeta 2: Bienestar */}
            <Col xs={12} md={6} lg={3} className="mb-4">
              <Card className={styles.card}>
                <Card.Body className="text-center">
                  <div className={styles.iconCircle}>
                    <i className="bi bi-heart-pulse"></i>
                  </div>
                  <Card.Title className={styles.cardTitle}>
                    Bienestar
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    Priorizar la salud holística (mente, cuerpo y espíritu) a
                    través de prácticas intencionales que fomentan la vitalidad,
                    la resiliencia y la paz interior para una salud duradera.
                  </Card.Text>
                  <div className={styles.arrowIcon}>&#8594;</div>
                </Card.Body>
              </Card>
            </Col>
            {/* Tarjeta 3: Tranquilidad */}
            <Col xs={12} md={6} lg={3} className="mb-4">
              <Card className={styles.card}>
                <Card.Body className="text-center">
                  <div className={styles.iconCircle}>
                    <i className="bi bi-tree"></i>
                  </div>
                  <Card.Title className={styles.cardTitle}>
                    Tranquilidad
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    Alcanzar un estado de calma interior y claridad en medio de
                    las exigencias de la vida, a través de la atención plena, la
                    autoconciencia y la acción con propósito en cada momento.
                  </Card.Text>
                  <div className={styles.arrowIcon}>&#8594;</div>
                </Card.Body>
              </Card>
            </Col>
            {/* Tarjeta 4: Consciencia */}
            <Col xs={12} md={6} lg={3} className="mb-4">
              <Card className={styles.card}>
                <Card.Body className="text-center">
                  <div className={styles.iconCircle}>
                    <i className="bi bi-boxes"></i>
                  </div>
                  <Card.Title className={styles.cardTitle}>
                    Consciencia
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    Profundizar la autoconciencia y la comprensión del propio
                    propósito, impacto y conexión con el mundo, lo que conduce a
                    elecciones más intencionales y satisfactorias.
                  </Card.Text>
                  <div className={styles.arrowIcon}>&#8594;</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col xs={12} md={8}>
              <div>
                <h2>Cómo te puede ayudar Hascunde?</h2>
              </div>
              <div>
                <h3>Coaching: Potenciando Liderazgo</h3>
                <p>
                  El coaching de Hascunde se centra en desarrollar un liderazgo
                  consciente, gestionando cambios con tranquilidad. Los líderes
                  fortalecen su productividad y eficiencia mientras priorizan su
                  bienestar, aplicando principios estratégicos adaptados a su
                  contexto personal y profesional.
                </p>
                <br />
                <h3>Mentoring: Guía Experta</h3>
                <p>
                  Los programas de mentoring ofrecen guía a nuevos emprendedores
                  y líderes. Con un enfoque en la perspectiva familiar, se
                  fomenta el desarrollo de carreras con consciencia y se
                  facilita una transferencia de conocimiento orientada al
                  bienestar integral.
                </p>
                <br />
                <h3>Consultoría: Estrategias exponenciales y comerciales</h3>
                <p>
                  La consultoría de Hascunde se enfoca en desarrollar
                  estrategias con un enfoque humano, garantizando resultados
                  sostenibles. Se abordan aspectos como la planificación
                  estratégica de ventas consultivas y optimización de procesos,
                  siempre priorizando el bienestar del equipo.
                </p>
                <br />
                <h3>Servicios Tecnológicos de transformación Digital</h3>
                <p>
                  Asesoría en digitalización y transformación digital para
                  emprendedores y empresas con perfiles exponenciales, también,
                  acompañamos para la apropiación de la inteligencia artificial
                  y el análisis de datos.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <img src={Tibetan} alt="Samatha Tibetan Meditation Thangka" />
              <h4>Samatha Tibetan Meditation Thangka</h4>
              <Button variant="success">Discover Our Programs</Button>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col xs={12} md={12}>
            <h2>Listo para forjar tu camino hacia el balance y  la libertad?</h2>
            <Button variant="light">Connect with Us Today</Button>
            </Col>

          </Row>


        </Container>







      </article>
    </Layout>
  );
};
