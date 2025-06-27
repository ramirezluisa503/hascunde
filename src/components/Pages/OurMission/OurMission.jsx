import { Layout } from "../../Layout/Layout";
import { Row, Col, Container, Card, Button, Image } from "react-bootstrap";
import { BsCalendarCheck, BsBuilding, BsStars, BsGlobe2 } from "react-icons/bs";
import styles from "../OurMission/OurMission.module.css";
import FormulaExo from "../../../assets/images/FormulaEXO.webp";
import Chris from "../../../assets/images/Chris.webp";
import David from "../../../assets/images/David.webp";
import icono from "../../../assets/images/Icono2.webp";
import iconoBrain from "../../../assets/images/iconoBrain.webp";
import iconoStar from "../../../assets/images/iconoStar.webp";
import iconoCalendar from "../../../assets/images/iconoCalendar.webp"
import iconoFlag from "../../../assets/images/iconoFlag.webp"
import iconoHands from "../../../assets/images/iconoHands.webp"



export const OurMission = () => {
  return (
    <Layout>
      <article>
        <Container className={styles.container1}>
          <Row className={styles.row1}>
            <Col xs={12} md={6} className={styles.contentCol}>
              <h1 className={styles.title}>
                Consultoría en Estrategias para Organizaciones Exponenciales
              </h1>
              <p className={styles.description}>
                La consultoría de Hascunde se enfoca en desarrollar estrategias
                con un enfoque de propósito humano, garantizando resultados
                sostenibles. Se abordan aspectos como la planificación
                estratégica de ventas consultivas y optimización de procesos,
                siempre priorizando el propósito que impulse a esa
                organización..
              </p>

              <Button variant="secondary" className={styles.OurMissionButton}>
                Descubre Nuestro Impacto
              </Button>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={FormulaExo}
                alt="Portada Home Page"
                className={styles.image1}
              />
            </Col>
          </Row>
        </Container>
        <Container className={styles.containerCards}>
          <Row>
            <Container className="my-5">
              <h3 className={styles.titleUpCard}>
                Nuestra Estructura de Soporte
              </h3>
              <Row className="g-4 justify-content-center">
                <Col xs={12} sm={6} md={4}>
                  <Card className={styles.card}>
                    <div className={styles.iconWrapper}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40%"
                        height="40%"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                    </div>

                    <Card.Title className={styles.cardTitle}>
                      Enfoque y manejo del tiempo
                    </Card.Title>
                    <Card.Text className={styles.cardText}>
                      Maximizaremos el tiempo de tu día a día, con herramientas
                      tecnológicas que abrirán espacios en tu agenda, para que
                      los uses en tus prioridades.
                    </Card.Text>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Card className={styles.card}>
                    <div className={styles.iconWrapper}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-people"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                      </svg>
                    </div>
                    <Card.Title className={styles.cardTitle}>
                      Relacionamiento Profesional
                    </Card.Title>
                    <Card.Text className={styles.cardText}>
                      Forja vínculos más profesionales y efectivos con tus
                      colegas, colaboradores y clientes. Aprende a comunicarte
                      eficazmente y a construir redes sólidas y de apoyo.
                    </Card.Text>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Card className={styles.card}>
                    <div className={styles.iconWrapper}>
                      <img src={iconoStar} alt="icono star" />
                    </div>
                    <Card.Title className={styles.cardTitle}>
                      Acción con Propósito
                    </Card.Title>
                    <Card.Text className={styles.cardText}>
                      Alinea tu vida profesional con tus valores y visión
                      fundamentales. Afronta los retos profesionales con
                      claridad, motivación y una renovada sensación de dirección
                      y plenitud.
                    </Card.Text>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Card className={styles.card}>
                    <div className={styles.iconWrapper}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-shield-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                      </svg>
                    </div>
                    <Card.Title className={styles.cardTitle}>
                      Gobernabilidad Tecnológica
                    </Card.Title>
                    <Card.Text className={styles.cardText}>
                      Asesoramiento para crear la estrategia de gobernabilidad
                      tecnológica, garantizando el control y la eficiencia en
                      los procesos institucionales.
                    </Card.Text>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Card className={styles.card}>
                    <div className={styles.iconWrapper}>
                      <img src={iconoBrain} alt="icono cerebro" />
                    </div>
                    <Card.Title className={styles.cardTitle}>
                      Liderazgo Consciente
                    </Card.Title>
                    <Card.Text className={styles.cardText}>
                      Cultiva la autoconciencia y la toma de decisiones
                      consciente. Lidera con autenticidad e integridad,
                      inspirando a quienes te rodean con tus acciones y
                      principios.
                    </Card.Text>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Card className={styles.card}>
                    <div className={styles.iconWrapper}>
                      <img src={icono} alt="icono" />
                    </div>
                    <Card.Title className={styles.cardTitle}>
                      Creación de hábitos estratégicos
                    </Card.Title>
                    <Card.Text className={styles.cardText}>
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
            <h2 className={styles.titleCards}>
              Transformando Vidas: Lo que dicen nuestros clientes
            </h2>
            <Row className={styles.containerCards}>
              {/* Tarjeta de Testimonio 1 */}
              <Col xs={12} md={6} lg={4} className="mb-4">
                <Card className={styles.cardTestimony}>
                  <Card.Body>
                    <Card.Text className={styles.textCustomers}>
                      "Hascunde me ayudó a redescubrir mi propósito y
                      reequilibrar mi vida. El apoyo estructurado fue
                      exactamente lo que necesitaba para prosperar en mi carrera
                      y como padre."
                    </Card.Text>
                    <div className={styles.infoCustomers}>
                      <Image
                        src={Chris}
                        alt="Michael R."
                        roundedCircle
                        className={styles.imgCustomers}
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">Michael R.</h6>
                        <small className="text-muted">
                          Entrepreneur & Father
                        </small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Tarjeta de Testimonio 2 */}
              <Col xs={12} md={6} lg={4} className="mb-4">
                <Card className={styles.cardTestimony}>
                  <Card.Body>
                    <Card.Text className={styles.textCustomers}>
                      "Encontré tranquilidad en medio del caos. Los principios
                      de consciencia de Hascunde transformaron mi enfoque diario
                      para el estrés y la toma de decisiones."
                    </Card.Text>
                    <div className={styles.infoCustomers}>
                    
                      <Image
                        src={David}
                        alt="David L."
                        roundedCircle
                        className={styles.imgCustomers}
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">David L.</h6>
                        <small className="text-muted">Senior Executive</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Tarjeta de Testimonio 3 */}
              <Col xs={12} md={6} lg={4} className="mb-4">
                <Card className={styles.cardTestimony}>
                  <Card.Body>
                    <Card.Text className={styles.textCustomers}>
                      "El camino hacia la libertad parecía desalentador, pero
                      con la guía de Hascunde, he construido relaciones más
                      fuertes y he logrado metas que creía imposibles."
                    </Card.Text>
                    <div className={styles.infoCustomers}>
                      <Image
                        src={Chris}
                        alt="Chris P."
                        roundedCircle
                        className={styles.imgCustomers}
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">Chris P.</h6>
                        <small className="text-muted">Project Manager</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>
        </Container>

        <div className={styles.leadershipTransformationSection}>
          <Container>
            <h2 className={styles.titleCards1}>
              El Camino a la Transformación de tu Liderazgo
            </h2>
            <Row className="justify-content-center">
              {/* Tarjeta 1: Descubrimiento */}
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card className={styles.transformationCard}>
                  <Card.Body className={styles.cardBodyContent}>
                    
                    <div className={styles.bodyNumberTitle}>
                      <span className={styles.cardNumberCircle}>1</span>
                    
                      <div className={styles.titleIcon}>
                        <img src={iconoCalendar} alt="Icono Calendario " className={styles.cardIcon} />
                        <Card.Title className={styles.cardTitle}>
                          Descubrimiento
                        </Card.Title>
                      </div>
                      
                    </div>
                    <Card.Text className={styles.cardDescription}>
                        Comience con una evaluación integral para identificar
                        sus desafíos y aspiraciones actuales.
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Tarjeta 2: Cimientos Fuertes */}
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card className={styles.transformationCard}>
                  <Card.Body className={styles.cardBodyContent}>
                    
                    <div className={styles.bodyNumberTitle}>
                      <span className={styles.cardNumberCircle}>2</span>
                    
                      <div className={styles.titleIcon}>
                        <img src={iconoFlag} alt="Icono Flag " className={styles.cardIcon} />
                        <Card.Title className={styles.cardTitle}>
                          Cimientos Fuertes
                        </Card.Title>
                      </div>
                      
                    </div>
                    <Card.Text className={styles.cardDescription}>
                        Establecer hábitos y principios fundamentales para la claridad mental y la estabilidad emocional.
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Tarjeta 3: Estrategias */}
             <Col xs={12} md={6} lg={3} className="mb-4">
                <Card className={styles.transformationCard}>
                  <Card.Body className={styles.cardBodyContent}>
                    
                    <div className={styles.bodyNumberTitle}>
                      <span className={styles.cardNumberCircle}>3</span>
                    
                      <div className={styles.titleIcon}>
                        <img src={iconoStar} alt="Icono Star " className={styles.cardIcon} />
                        <Card.Title className={styles.cardTitle}>
                          Estrategias
                        </Card.Title>
                      </div>
                      
                    </div>
                    <Card.Text className={styles.cardDescription}>
                        Implementar estrategias avanzadas para la gestión del tiempo, la dinámica de las relaciones y el crecimiento profesional.
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              
              {/* Tarjeta 4: Libertad */}
              <Col xs={12} md={6} lg={3} className="mb-4">
                <Card className={styles.transformationCard}>
                  <Card.Body className={styles.cardBodyContent}>
                    
                    <div className={styles.bodyNumberTitle}>
                      <span className={styles.cardNumberCircle}>4</span>
                    
                      <div className={styles.titleIcon}>
                        <img src={iconoHands} alt="Icono Hands " className={styles.cardIcon} />
                        <Card.Title className={styles.cardTitle}>
                          Libertad
                        </Card.Title>
                      </div>
                      
                    </div>
                    <Card.Text className={styles.cardDescription}>
                        Consolida tu transformación, viviendo una vida equilibrada con propósito y profunda libertad.
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              
            </Row>
          </Container>
        </div>

        <Container className={styles.transformationContainer}>
          <Row>
            <Col xs={12} md={12}>
              <h2 className={styles.transformationTitle}>
                ¿Estás listo para comenzar tu transformación?
              </h2>
              <p className={styles.transformationText}>
                Da el primer paso hacia una vida de equilibrio, libertad y un
                propósito
                <br />
                profundo. Conéctate con nosotros para descubrir cómo Hascunde
                puede
                <br />
                ayudarte en tu camino.
              </p>

              <Button variant="secondary" className={styles.hascundeButton}>
                Conéctate con Hascunde
              </Button>
            </Col>
          </Row>
        </Container>
      </article>
    </Layout>
  );
};
