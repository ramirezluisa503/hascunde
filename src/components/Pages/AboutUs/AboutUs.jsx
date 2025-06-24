import { Layout } from '../../Layout/Layout';
import TeamMembers from '../../TeamMembers/TeamMembers';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
// import Portada from '../../../assets/images/PortadaAboutUs1.webp';
import Campesinos from '../../../assets/images/Campesinos1.webp';
import Autoconfianza from '../../../assets/images/Autoconfianza1.webp';

export const AboutUs = () => {
  return (
    <Layout>
      <article>
        <Container>
          <Row>
            <Col>
              {/* <img src={Portada} alt="Portada About Us" className="img-fluid" /> */}
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h2>¿ Por qué HASCUNDE?</h2>
              <p>
                El nombre 'Hascunde' proviene del euskera 'Hazkunde', que
                significa 'crecimiento' o 'desarrollo'. Este concepto es
                esencial para la misión de la empresa, que busca fomentar el
                crecimiento personal y profesional en hombres que desean una
                vida equilibrada y significativa. <br />
                <br />
                Las raíces vascas y gallegas de la cultura paisa aportan una
                herencia rica en tradiciones de trabajo duro, comunidad y
                resiliencia. Estas influencias se reflejan en el carácter de los
                líderes modernos que buscan equilibrio y fortaleza en su vida
                personal y profesional.
                <br />
                <br />
                En esencia, Hascunde representa el descubrimiento de nuestro
                máximo potencial: un proceso para liberarnos de las limitaciones
                y abrazar la auténtica libertad. Se trata de cultivar la
                disciplina, la consciencia y la resiliencia necesarias para
                afrontar las complejidades de la vida con gracia y propósito, lo
                que nos lleva a una existencia equilibrada y plena.{' '}
              </p>
              <Button variant="success">Explore Our Core Values</Button>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={Campesinos}
                alt="Campesinos cosechando"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h2>El Poder del Autoconocimiento</h2>
              <p>
                El autoconocimiento se refiere a la comprensión profunda de uno
                mismo, incluyendo emociones, motivaciones, valores y
                comportamientos. Esta capacidad de reflexión permite a las
                personas evaluar sus habilidades y limitaciones, facilitando el
                crecimiento personal y profesional.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={Autoconfianza}
                alt="Imagen Autoconfianza"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="g-4">
            <Col xs={12} md={6}>
              <Col xs={12} md={8}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      Evaluación de Fortalezas CliftonStrenght
                    </Card.Title>
                    <Card.Text>
                      Tus informes y guías personalizados de CliftonStrengths te
                      brindarán un momento revelador a medida que experimentas
                      nuevas formas de comprender lo que te hace tan único.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Poder Físico</Card.Title>
                    <Card.Text>
                      Libertad de movimiento para disfrutar de la vida
                      plenamente, conectando la mente con el cuerpo,
                      aprendiéndolo a dominar en aspectos como fuerza,
                      movilidad, flexibilidad, estabilidad, potencia, velocidad
                      y resistencia.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col xs={12} md={6}>
              <Col xs={12} md={8}>
                <Card>
                  <Card.Body>
                    <Card.Title>Gestor de conocimiento</Card.Title>
                    <Card.Text>
                      Cómo organizar nuestras ideas, pensamiento y notas?
                      Entrarás a un nuevo concepto de Cerebro Digital, para que
                      puedas capturar, procesar, aprender y compartir
                      información, para que lo conviertas en tu legado
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title>Cosmovisión y Espiritualidad</Card.Title>
                    <Card.Text>
                      Compartiremos las distintas cosmovisiones y te mostraremos
                      algunas de las guías y pensamientos de grandes hombres de
                      la historia, que te ayudaran a transitar el camino del
                      autoconocimiento e individuación necesario para crecer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
          </Row>
        </Container>

        <Container>
          <h2>Guiding Voices</h2>
          <p>Meet the dedicated individuals driving the Hascunde vision</p>
        </Container>

        <TeamMembers />

        <Container>
          <Row>
            <Col xs={12} md={12}>
              <h3>Quieres dejar un Legado?</h3>
              <p>
                Hascunde es más que un programa; es un compromiso de por vida
                con el crecimiento.
                <br /> Únete a una hermandad de hombres que forjan caminos más
                sólidos.
              </p>
              <Button variant="success">Connect With Us Today</Button>
            </Col>
          </Row>
        </Container>
      </article>
    </Layout>
  );
};
