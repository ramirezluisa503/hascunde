import { Layout } from "../../Layout/Layout";
import { Row, Col, Container, Button, Card } from "react-bootstrap";

export const CoreValues = () => {
  return (
    <Layout>
      <article>
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <h1>IMAGEN PORTADA </h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <h2 className="text-center mb-5">Como podemos ayudarte</h2>
          <p className="text-center mb-5">
            El público objetivo de Hascunde incluye a líderes gerentes, CEOs y
            emprendedores que buscan potenciar su liderazgo y tranquilidad, para
            llevar a cabo los retos que su propósito le propone, desarrollando
            su propio camino para lograrlo.{" "}
          </p>
        </Container>
        <Container>
          <Row>
            <Container className="my-5">
              <Row className="g-4">
                {" "}
                {/* g-4 adds gutter space between columns */}
                {/* Card 1: Mentoring */}
                <Col xs={12} md={6}>
                  <Card className="h-100 shadow-sm rounded">
                    <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                      <Card.Title as="h5" className="fw-bold mb-3">
                        Mentoring
                      </Card.Title>
                      <Card.Text className="text-muted flex-grow-1">
                        El mentoring se basa en una relación de desarrollo en la
                        que un mentor experimentado guía a un menos
                        experimentado, transmitiendo conocimientos y
                        experiencias para su crecimiento profesional y personal.
                      </Card.Text>
                      <Button variant="outline-success" className="mt-auto">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                {/* Card 2: Coaching */}
                <Col xs={12} md={6}>
                  <Card className="h-100 shadow-sm rounded">
                    <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                      <Card.Title as="h5" className="fw-bold mb-3">
                        Coaching
                      </Card.Title>
                      <Card.Text className="text-muted flex-grow-1">
                        El coaching implica un proceso interactivo donde un
                        coach ayuda a un individuo a alcanzar objetivos
                        específicos mediante preguntas, retroalimentación y
                        estrategias efectivas, potenciando su rendimiento.
                      </Card.Text>
                      <Button variant="outline-success" className="mt-auto">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                {/* Card 3: Consultoría */}
                <Col xs={12} md={6}>
                  <Card className="h-100 shadow-sm rounded">
                    <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                      <Card.Title as="h5" className="fw-bold mb-3">
                        Consultoría
                      </Card.Title>
                      <Card.Text className="text-muted flex-grow-1">
                        La consultoría se refiere a la asesoría profesional
                        brindada por consultores, que analizan problemas
                        específicos de una organización y proporcionan
                        soluciones estratégicas personalizadas.
                      </Card.Text>
                      <Button variant="outline-success" className="mt-auto">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                {/* Card 4: Transformación Digital */}
                <Col xs={12} md={6}>
                  <Card className="h-100 shadow-sm rounded">
                    <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                      <Card.Title as="h5" className="fw-bold mb-3">
                        Transformación Digital
                      </Card.Title>
                      <Card.Text className="text-muted flex-grow-1">
                        Se define como la adopción y adaptación de tecnologías
                        digitales para transformar los procesos de negocio, los
                        modelos de negocio y la experiencia del cliente.
                      </Card.Text>
                      <Button variant="outline-success" className="mt-auto">
                        Learn More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>

        <Container>
          <Row>
            <h1>IMAGEN FELINO </h1>
          </Row>

        </Container>












      </article>
    </Layout>
  );
};
