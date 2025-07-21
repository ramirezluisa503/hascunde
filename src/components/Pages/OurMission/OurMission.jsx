import { useTranslation } from 'react-i18next'; // Importa useTranslation
import { Layout } from '../../Layout/Layout';
import { Row, Col, Container, Card, Image } from 'react-bootstrap';
import styles from '../OurMission/OurMission.module.css';
import FormulaExo from '../../../assets/images/FormulaEXO.webp';
import Chris from '../../../assets/images/Chris.webp';
import David from '../../../assets/images/David.webp';
import icono from '../../../assets/images/Icono2.webp';
import iconoBrain from '../../../assets/images/iconoBrain.webp';
import iconoStar from '../../../assets/images/iconoStar.webp';
import iconoCalendar from '../../../assets/images/iconoCalendar.webp';
import iconoFlag from '../../../assets/images/iconoFlag.webp';
import iconoHands from '../../../assets/images/iconoHands.webp';
import { GreenButton } from '../../GreenButton/GreenButton';

export const OurMission = () => {
  const { t, i18n } = useTranslation(); // Obtén la función 't' y el objeto 'i18n' para el idioma actual

  const supportStructureItems = [
    {
      titleKey: 'om_focus_time_management_title',
      textKey: 'om_focus_time_management_text',

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-clock"
          viewBox="0 0 16 16"
        >
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
        </svg>
      ),
    },
    {
      titleKey: 'om_professional_relationships_title',
      textKey: 'om_professional_relationships_text',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-people"
          viewBox="0 0 16 16"
        >
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
        </svg>
      ),
    },
    {
      titleKey: 'om_purposeful_action_title',
      textKey: 'om_purposeful_action_text',
      icon: (
        <Image
          src={iconoStar}
          alt={t('om_purposeful_action_title_icon_alt')}
          className="img-fluid"
        />
      ),
    },
    {
      titleKey: 'om_tech_governance_title',
      textKey: 'om_tech_governance_text',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-shield-check"
          viewBox="0 0 16 16"
        >
          <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
          <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
        </svg>
      ),
    },
    {
      titleKey: 'om_conscious_leadership_title',
      textKey: 'om_conscious_leadership_text',
      icon: (
        <Image
          src={iconoBrain}
          alt={t('om_conscious_leadership_title_icon_alt')}
          className="img-fluid"
        />
      ),
    },
    {
      titleKey: 'om_strategic_habits_title',
      textKey: 'om_strategic_habits_text',
      icon: (
        <Image
          src={icono}
          alt={t('om_strategic_habits_title_icon_alt')}
          className="img-fluid"
        />
      ),
    },
  ];

  // Datos para la sección de Testimonios
  const testimonials = [
    {
      textKey: 'om_testimonial1_text',
      nameKey: 'om_testimonial1_name',
      roleEsKey: 'om_testimonial1_role_es',
      roleEnKey: 'om_testimonial1_role_en',
      image: Chris,
      imageAltKey: 'om_testimonial1_image_alt',
    },
    {
      textKey: 'om_testimonial2_text',
      nameKey: 'om_testimonial2_name',
      roleEsKey: 'om_testimonial2_role_es',
      roleEnKey: 'om_testimonial2_role_en',
      image: David,
      imageAltKey: 'om_testimonial2_image_alt',
    },
    {
      textKey: 'om_testimonial3_text',
      nameKey: 'om_testimonial3_name',
      roleEsKey: 'om_testimonial3_role_es',
      roleEnKey: 'om_testimonial3_role_en',
      image: Chris,
      imageAltKey: 'om_testimonial3_image_alt',
    },
  ];

  // Datos para la sección "El Camino a la Transformación de tu Liderazgo"
  const transformationPath = [
    {
      titleKey: 'om_discovery_title',
      textKey: 'om_discovery_text',
      icon: iconoCalendar,
      iconAltKey: 'om_discovery_icon_alt',
    },
    {
      titleKey: 'om_strong_foundations_title',
      textKey: 'om_strong_foundations_text',
      icon: iconoFlag,
      iconAltKey: 'om_strong_foundations_icon_alt',
    },
    {
      titleKey: 'om_strategies_title',
      textKey: 'om_strategies_text',
      icon: iconoStar,
      iconAltKey: 'om_strategies_icon_alt',
    },
    {
      titleKey: 'om_freedom_title',
      textKey: 'om_freedom_text',
      icon: iconoHands,
      iconAltKey: 'om_freedom_icon_alt',
    },
  ];

  return (
    <Layout>
      {/* Sección Hero */}
      <Container
        fluid
        className={styles.container1}
      >
        <Row className={`${styles.row1} align-items-center`}>
          <Col
            xs={12}
            lg={6}
            className={`${styles.contentCol}`}
          >
            <h1 className={styles.title}>{t('om_hero_title')}</h1>
            <p className={styles.description}>{t('om_hero_description')}</p>

            <div className="d-grid d-sm-block">
              <GreenButton
                text={t('om_discover_impact_button')}
                redirect={'/contactUs'}
              />
            </div>
          </Col>
          <Col
            xs={12}
            lg={6}
            className="order-1 order-lg-2 text-center"
          >
            <img
              src={FormulaExo}
              alt={t('om_hero_image_alt')}
              className={`${styles.image1} img-fluid`}
            />
          </Col>
        </Row>
      </Container>

      {/* Sección de Cards de Soporte */}
      <Container className={styles.containerCards}>
        <Row>
          <Container className="my-5">
            <Row>
              <Col
                xs={12}
                className="text-center mb-4"
              >
                <h3 className={styles.titleUpCard}>
                  {t('om_support_structure_title')}
                </h3>
              </Col>
            </Row>

            <Row className="g-3 g-md-4 justify-content-center">
              {supportStructureItems.map((item, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm={6}
                  lg={4}
                  xl={4}
                >
                  <Card className={`${styles.card} h-100`}>
                    <div className={styles.iconWrapper}>{item.icon}</div>
                    <Card.Title className={styles.cardTitle}>
                      {t(item.titleKey)}
                    </Card.Title>
                    <Card.Text className={styles.cardText}>
                      {t(item.textKey)}
                    </Card.Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Row>
      </Container>

      {/* Sección de Testimonios */}
      <Container>
        <Row>
          <Col
            xs={12}
            className="text-center mb-4"
          >
            <h2 className={styles.titleCards}>
              {t('om_transforming_lives_title')}
            </h2>
          </Col>
        </Row>

        <Row className={`${styles.containerCards} g-3 g-md-4`}>
          {testimonials.map((testimonial, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              xl={4}
              className="mb-4"
            >
              <Card className={`${styles.cardTestimony} h-100`}>
                <Card.Body className="d-flex flex-column">
                  <Card.Text className={`${styles.textCustomers} flex-grow-1`}>
                    {t(testimonial.textKey)}
                  </Card.Text>
                  <div
                    className={`${styles.infoCustomers} d-flex align-items-center mt-auto`}
                  >
                    <Image
                      src={testimonial.image}
                      alt={t(testimonial.imageAltKey)}
                      roundedCircle
                      className={styles.imgCustomers}
                      width="50"
                      height="50"
                    />
                    <div className="ms-3">
                      <h6 className="mb-0">{t(testimonial.nameKey)}</h6>
                      {/* Lógica para seleccionar el rol basado en el idioma actual */}
                      <small className="text-muted">
                        {i18n.language === 'es'
                          ? t(testimonial.roleEsKey)
                          : t(testimonial.roleEnKey)}
                      </small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Sección de Transformación */}
      <div className={styles.leadershipTransformationSection}>
        <Container>
          <Row>
            <Col
              xs={12}
              className="text-center mb-4"
            >
              <h2 className={styles.titleCards1}>
                {t('om_path_to_leadership_transformation_title')}
              </h2>
            </Col>
          </Row>

          <Row className="justify-content-center g-3 g-md-4">
            {transformationPath.map((step, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                lg={3}
                className="mb-4"
              >
                <Card className={`${styles.transformationCard} h-100`}>
                  <Card.Body
                    className={`${styles.cardBodyContent} d-flex flex-column`}
                  >
                    <div className={styles.bodyNumberTitle}>
                      <span className={styles.cardNumberCircle}>
                        {index + 1}
                      </span>
                      <div className={styles.titleIcon}>
                        <img
                          src={step.icon}
                          alt={t(step.iconAltKey)}
                          className={`${styles.cardIcon} img-fluid`}
                        />
                        <Card.Title className={styles.cardTitle}>
                          {t(step.titleKey)}
                        </Card.Title>
                      </div>
                    </div>
                    <Card.Text
                      className={`${styles.cardDescription} flex-grow-1`}
                    >
                      {t(step.textKey)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Sección CTA Final */}
      <Container className={styles.transformationContainer}>
        <Row className="justify-content-center">
          <Col
            xs={12}
            lg={10}
            xl={8}
            className="text-center"
          >
            <h2 className={styles.transformationTitle}>
              {t('om_ready_for_transformation_title')}
            </h2>
            <p className={styles.transformationText}>
              {t('om_ready_for_transformation_text_part1')}{' '}
              {t('om_ready_for_transformation_text_part2')}
            </p>

            <div className="d-grid d-sm-block">
              <GreenButton
                text={t('om_connect_with_hascunde_button')}
                redirect={'/contactUs'}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
