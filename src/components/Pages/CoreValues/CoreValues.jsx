import { Layout } from "../../Layout/Layout";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import styles from "../CoreValues/CoreValues.module.css";
import iconoUsers from "../../../assets/images/IconoUsers.webp";
import iconoHeart from "../../../assets/images/IconoHeart.webp";
import iconoBrainBig from "../../../assets/images/IconoBrainBig.webp";
import iconoLeaf from "../../../assets/images/Iconoleaf.webp";

export const CoreValues = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <h1>IMAGEN PORTADA </h1>
          </Col>
        </Row>
      </Container>
      <Container className={styles.containerHowHelpYou}>
        <Row>
          <Col md={12}>
            <h2 className={styles.title}>Como podemos ayudarte</h2>
            <p className={styles.mainParagraph2}>
              El público objetivo de Hascunde incluye a líderes gerentes, CEOs y
              emprendedores que buscan potenciar su liderazgo y tranquilidad,
              para llevar a cabo los retos que su propósito le propone,
              desarrollando su propio camino para lograrlo.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12}  md={6}>
            {/* Tarjeta  1 */}
            <Card className={styles.card}>
              <div className={styles.iconWrapper}>
                <img
                  src={iconoUsers}
                  alt="Icono Usuarios"
                  className={styles.imgIcono}
                />
              </div>
              <Card.Title className={styles.cardTitle}>
                Enfoque y manejo del tiempo
              </Card.Title>
              <Card.Text className={styles.cardText}>
                Maximizaremos el tiempo de tu día a día, con herramientas
                tecnológicas que abrirán espacios en tu agenda, para que los
                uses en tus prioridades.
              </Card.Text>
              <div className={styles.containerButton}>
                <Button className={styles.buttonCards} variant="light">
                  Aprender Más
                </Button>
              </div>
            </Card>
            {/* Tarjeta 2  */}
            <Card className={styles.card}>
              <div className={styles.iconWrapper}>
                <img
                  src={iconoLeaf}
                  alt="Icono Hoja"
                  className={styles.imgIcono}
                />
              </div>
              <Card.Title className={styles.cardTitle}>Consultoría</Card.Title>
              <Card.Text className={styles.cardText}>
                La consultoría se refiere a la asesoría profesional brindada por
                consultores, que analizan problemas específicos de una
                organización y proporcionan soluciones estratégicas
                personalizadas.
              </Card.Text>
              <div className={styles.containerButton}>
                <Button className={styles.buttonCards} variant="light">
                  Aprender Más
                </Button>
              </div>
            </Card>
          </Col>
          <Col xs={12}  md={6}>
            {/* Tarjeta 3 */}
            <Card className={styles.card}>
              <div className={styles.iconWrapper}>
                <img
                  src={iconoHeart}
                  alt="Icono Heart"
                  className={styles.imgIcono}
                />
              </div>
              <Card.Title className={styles.cardTitle}>Coaching</Card.Title>
              <Card.Text className={styles.cardText}>
                El coaching implica un proceso interactivo donde un coach ayuda
                a un individuo a alcanzar objetivos específicos mediante
                preguntas, retroalimentación y estrategias efectivas,
                potenciando su rendimiento.
              </Card.Text>
              <div className={styles.containerButton}>
                <Button className={styles.buttonCards} variant="light">
                  Aprender Más
                </Button>
              </div>
            </Card>

            {/* Tarjeta 4 */}
            <Card className={styles.card}>
              <div className={styles.iconWrapper}>
                <img
                  src={iconoBrainBig}
                  alt="Icono Brain"
                  className={styles.imgIcono}
                />
              </div>
              <Card.Title className={styles.cardTitle}>
                Transformación Digital
              </Card.Title>
              <Card.Text className={styles.cardText}>
                Se define como la adopción y adaptación de tecnologías digitales
                para transformar los procesos de negocio, los modelos de negocio
                y la experiencia del cliente.
              </Card.Text>
              <div className={styles.containerButton}>
                <Button className={styles.buttonCards} variant="light">
                  Aprender Más
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row xs={12} md={12}>
          <h1>IMAGEN FELINO </h1>
        </Row>
      </Container>
    </Layout>
  );
};
