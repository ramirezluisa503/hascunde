import { Layout } from '../../Layout/Layout';
import { Row, Col, Container, Card, Button, Image } from 'react-bootstrap';
import { BsCalendarCheck, BsBuilding, BsStars, BsGlobe2 } from 'react-icons/bs';
import FormulaExo from '../../../assets/images/LaFormulaExo.webp';
import Chris from '../../../assets/images/Chris.webp';
import David from '../../../assets/images/David.webp';

export const OurMission = () => {
  return (
    <Layout>
      <article>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h1>
                Consultoría en Estrategias para Organizaciones Exponenciales
              </h1>
              <p>
                La consultoría de Hascunde se enfoca en desarrollar estrategias
                con un enfoque de propósito humano, garantizando resultados
                sostenibles. Se abordan aspectos como la planificación
                estratégica de ventas consultivas y optimización de procesos,
                siempre priorizando el propósito que impulse a esa
                organización..
              </p>
              <Button variant="success">Discover Our Impact</Button>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={FormulaExo}
                alt="Portada Home Page"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Container className="my-5">
              <h2 className="text-center mb-4">
                Nuestra Estructura de Soporte
              </h2>
              <Row className="g-4 justify-content-center">
                <Col xs={12} sm={6} md={4}>
                  <Card className="h-100 text-center p-3">
                    <div
                      className="mb-3"
                      style={{ fontSize: '3rem', color: '#007bff' }}
                    >
                      {' '}
                      {/* Estilo para el ícono. Puedes reemplazar el emoji con un SVG importado o un ícono de librería. */}
                      ⏱️ {/* Placeholder de ícono */}
                    </div>
                    <Card.Title className="mb-2">
                      Enfoque y manejo del tiempo
                    </Card.Title>
                    <Card.Text className="text-muted">
                      Maximizaremos el tiempo de tu día a día, con herramientas
                      tecnológicas que abrirán espacios en tu agenda, para que
                      los uses en tus prioridades.
                    </Card.Text>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Card className="h-100 text-center p-3">
                    <div
                      className="mb-3"
                      style={{ fontSize: '3rem', color: '#007bff' }}
                    >
                      🤝 {/* Placeholder de ícono */}
                    </div>
                    <Card.Title className="mb-2">
                      Relacionamiento Profesional
                    </Card.Title>
                    <Card.Text className="text-muted">
                      Forja vínculos más profesionales y efectivos con tus
                      colegas, colaboradores y clientes. Aprende a comunicarte
                      eficazmente y a construir redes sólidas y de apoyo.
                    </Card.Text>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Card className="h-100 text-center p-3">
                    <div
                      className="mb-3"
                      style={{ fontSize: '3rem', color: '#007bff' }}
                    >
                      ✨ {/* Placeholder de ícono */}
                    </div>
                    <Card.Title className="mb-2">
                      Acción con Propósito
                    </Card.Title>
                    <Card.Text className="text-muted">
                      Alinea tu vida profesional con tus valores y visión
                      fundamentales. Afronta los retos profesionales con
                      claridad, motivación y una renovada sensación de dirección
                      y plenitud.
                    </Card.Text>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Card className="h-100 text-center p-3">
                    <div
                      className="mb-3"
                      style={{ fontSize: '3rem', color: '#007bff' }}
                    >
                      ⚙️ {/* Placeholder de ícono */}
                    </div>
                    <Card.Title className="mb-2">
                      Gobernabilidad Tecnológica
                    </Card.Title>
                    <Card.Text className="text-muted">
                      Asesoramiento para crear la estrategia de gobernabilidad
                      tecnológica, garantizando el control y la eficiencia en
                      los procesos institucionales.
                    </Card.Text>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Card className="h-100 text-center p-3">
                    <div
                      className="mb-3"
                      style={{ fontSize: '3rem', color: '#007bff' }}
                    >
                      🧠 {/* Placeholder de ícono */}
                    </div>
                    <Card.Title className="mb-2">
                      Liderazgo Consciente
                    </Card.Title>
                    <Card.Text className="text-muted">
                      Cultiva la autoconciencia y la toma de decisiones
                      consciente. Lidera con autenticidad e integridad,
                      inspirando a quienes te rodean con tus acciones y
                      principios.
                    </Card.Text>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Card className="h-100 text-center p-3">
                    <div
                      className="mb-3"
                      style={{ fontSize: '3rem', color: '#007bff' }}
                    >
                      📈 {/* Placeholder de ícono */}
                    </div>
                    <Card.Title className="mb-2">
                      Creación de hábitos estratégicos
                    </Card.Title>
                    <Card.Text className="text-muted">
                      Implemente poderosos hábitos y rutinas diarias que se
                      intensifiquen con el tiempo y lo impulsen hacia sus
                      objetivos a largo plazo con consistencia y precisión.
                    </Card.Text>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
        <Container>
          <Row>
            <h2 className="text-center mb-5">
              Transformando Vidas: Lo que dicen nuestros clientes
            </h2>
            <Row className="justify-content-center">
              {/* Tarjeta de Testimonio 1 */}
              <Col xs={12} md={6} lg={4} className="mb-4">
                <Card className="h-100 tarjeta-testimonio">
                  <Card.Body>
                    <Card.Text>
                      "Hascunde me ayudó a redescubrir mi propósito y
                      reequilibrar mi vida. El apoyo estructurado fue
                      exactamente lo que necesitaba para prosperar en mi carrera
                      y como padre."
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex align-items-center">
                    <Image
                      src={Chris}
                      alt="Michael R."
                      roundedCircle
                      className="Michael-testimonio"
                    />
                    <div className="ms-3">
                      <h6 className="mb-0">Michael R.</h6>
                      <small className="text-muted">
                        Entrepreneur & Father
                      </small>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>

              {/* Tarjeta de Testimonio 2 */}
              <Col xs={12} md={6} lg={4} className="mb-4">
                <Card className="h-100 tarjeta-testimonio">
                  <Card.Body>
                    <Card.Text>
                      "Encontré tranquilidad en medio del caos. Los principios
                      de consciencia de Hascunde transformaron mi enfoque diario
                      para el estrés y la toma de decisiones."
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex align-items-center">
                    {/* REEMPLAZA ESTA RUTA CON LA RUTA REAL DE TU IMAGEN */}
                    <Image
                      src={David}
                      alt="David L."
                      roundedCircle
                      className="David-testimonio"
                    />
                    <div className="ms-3">
                      <h6 className="mb-0">David L.</h6>
                      <small className="text-muted">Senior Executive</small>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>

              {/* Tarjeta de Testimonio 3 */}
              <Col xs={12} md={6} lg={4} className="mb-4">
                <Card className="h-100 tarjeta-testimonio">
                  <Card.Body>
                    <Card.Text>
                      "El camino hacia la libertad parecía desalentador, pero
                      con la guía de Hascunde, he construido relaciones más
                      fuertes y he logrado metas que creía imposibles."
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="d-flex align-items-center">
                    {/* REEMPLAZA ESTA RUTA CON LA RUTA REAL DE TU IMAGEN */}
                    <Image
                      src={Chris}
                      alt="Chris P."
                      roundedCircle
                      className="Chris-testimonio"
                    />
                    <div className="ms-3">
                      <h6 className="mb-0">Chris P.</h6>
                      <small className="text-muted">Project Manager</small>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Row>
        </Container>

        <Container>
          <Row>
            <Container>
              <h2 className="text-center mb-5">
                El Camino a la Transformación de tu Liderazgo
              </h2>
              <Row className="justify-content-center">
                {/* Tarjeta 1: Descubrimiento */}
                <Col xs={12} md={6} lg={3} className="mb-4">
                  <Card className="h-100 tarjeta-liderazgo">
                    <Card.Body className="text-center d-flex flex-column align-items-center">
                      <div className="numero-icono-tarjeta d-flex align-items-center justify-content-center mb-3">
                        <span className="numero">1</span>
                        <BsCalendarCheck className="ms-2 icono-tarjeta" />{' '}
                        {/* Icono de Calendario */}
                      </div>
                      <Card.Title className="titulo-tarjeta-liderazgo">
                        Descubrimiento
                      </Card.Title>
                      <Card.Text>
                        Comience con una evaluación integral para identificar
                        sus desafíos y aspiraciones actuales.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Tarjeta 2: Cimientos Fuertes */}
                <Col xs={12} md={6} lg={3} className="mb-4">
                  <Card className="h-100 tarjeta-liderazgo">
                    <Card.Body className="text-center d-flex flex-column align-items-center">
                      <div className="numero-icono-tarjeta d-flex align-items-center justify-content-center mb-3">
                        <span className="numero">2</span>
                        <BsBuilding className="ms-2 icono-tarjeta" />{' '}
                        {/* Icono de Edificio/Cimientos */}
                      </div>
                      <Card.Title className="titulo-tarjeta-liderazgo">
                        Cimientos Fuertes
                      </Card.Title>
                      <Card.Text>
                        Establecer hábitos y principios fundamentales para la
                        claridad mental y la estabilidad emocional.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Tarjeta 3: Estrategias */}
                <Col xs={12} md={6} lg={3} className="mb-4">
                  <Card className="h-100 tarjeta-liderazgo">
                    <Card.Body className="text-center d-flex flex-column align-items-center">
                      <div className="numero-icono-tarjeta d-flex align-items-center justify-content-center mb-3">
                        <span className="numero">3</span>
                        <BsStars className="ms-2 icono-tarjeta" />{' '}
                        {/* Icono de Estrella/Brillo */}
                      </div>
                      <Card.Title className="titulo-tarjeta-liderazgo">
                        Estrategias
                      </Card.Title>
                      <Card.Text>
                        Implementar estrategias avanzadas para la gestión del
                        tiempo, la dinámica de las relaciones y el crecimiento
                        profesional.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Tarjeta 4: Libertad */}
                <Col xs={12} md={6} lg={3} className="mb-4">
                  <Card className="h-100 tarjeta-liderazgo">
                    <Card.Body className="text-center d-flex flex-column align-items-center">
                      <div className="numero-icono-tarjeta d-flex align-items-center justify-content-center mb-3">
                        <span className="numero">4</span>
                        <BsGlobe2 className="ms-2 icono-tarjeta" />{' '}
                        {/* Icono de Globo/Mundo */}
                      </div>
                      <Card.Title className="titulo-tarjeta-liderazgo">
                        Libertad
                      </Card.Title>
                      <Card.Text>
                        Consolida tu transformación, viviendo una vida
                        equilibrada con propósito y profunda libertad.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col xs={12} md={12}>
              <h2 className="text-center mb-5">
                ¿Estás listo para comenzar tu transformación?
              </h2>
              <p className="text-center mb-5">
                Da el primer paso hacia una vida de equilibrio, libertad y un
                propósito
                <br />
                profundo. Conéctate con nosotros para descubrir cómo Hascunde
                puede
                <br />
                ayudarte en tu camino.
              </p>
              <Button>Connect with Hascunde</Button>
            </Col>
          </Row>
        </Container>
      </article>
    </Layout>
  );
};
