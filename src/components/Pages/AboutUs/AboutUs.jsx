import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../Layout/Layout';
import styles from '../AboutUs/AboutUs.module.css';
import TeamMembers from '../../TeamMembers/TeamMembers';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import Cafeteros from '../../../assets/images/CafeterosAboutUs.webp';
import Autoconfianza from '../../../assets/images/AutoconfianzaAboutUs.webp';
import { GreenButton } from '../../GreenButton/GreenButton';

export const AboutUs = () => {
  // 1. Obtén la función 't' para traducir
  const { t } = useTranslation();

  return (
    <Layout>
      <article className={styles.mainContainer}>
        <section className={styles.frontPage}>
          <div className={styles.overlayBlur}></div>
          <div className={styles.frontContain}>
            <h1 className={styles.frontTitle}>{t('au_front_title')}</h1>
            <p className={styles.frontText}>{t('au_front_text')}</p>
            <button className={styles.frontButton}>
              {t('au_learn_more_button')}
            </button>
          </div>
        </section>

        <Container className={`${styles.aboutUsContainer2} px-3 px-md-4`}>
          <Row className="align-items-center gy-4 gy-lg-0">
            <Col xs={12} className={`${styles.textColum} order-2 order-lg-1`}>
              <h2 className={styles.hascundeTitle}>
                {t('au_why_hascunde_title')}
              </h2>
              <p className={styles.paragraph}>
                {t('au_hascunde_paragraph_part1')}
              </p>
              <p className={styles.paragraph}>
                {t('au_hascunde_paragraph_part2')}
              </p>
              <p className={styles.paragraph}>
                {t('au_hascunde_paragraph_part3')}
              </p>
              <div className="mt-3 mt-md-4">
                <Button
                  variant="secondary"
                  className={`${styles.hascundeButton} w-100 w-sm-auto`}
                >
                  {t('au_explore_values_button')}
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
                alt={t('au_coffe_growers_alt')}
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
                {t('au_power_of_self_knowledge_title')}
              </h2>
              <p className={styles.textColum}>
                {t('au_power_of_self_knowledge_text')}
              </p>
            </Col>
            <Col
              xs={12}
              lg={6}
              className={`${styles.imageColum} order-1 order-lg-2 text-center`}
            >
              <img
                src={Autoconfianza}
                alt={t('au_self_confidence_image_alt')}
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
                    {t('au_clifton_strength_title')}
                  </Card.Title>
                  <Card.Text className={`${styles.cardsP} flex-grow-1`}>
                    {t('au_clifton_strength_text')}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col xs={12} sm={6} lg={6} xl={6}>
              <Card className={`${styles.cards} h-100 shadow-sm`}>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className={`${styles.cardsH3} mb-3`}>
                    {t('au_knowledge_manager_title')}
                  </Card.Title>
                  <Card.Text className={`${styles.cardsP} flex-grow-1`}>
                    {t('au_knowledge_manager_text')}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col xs={12} sm={6} lg={6} xl={6}>
              <Card className={`${styles.cards} h-100 shadow-sm`}>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className={`${styles.cardsH3} mb-3`}>
                    {t('au_physical_power_title')}
                  </Card.Title>
                  <Card.Text className={`${styles.cardsP} flex-grow-1`}>
                    {t('au_physical_power_text')}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 4 */}
            <Col xs={12} sm={6} lg={6} xl={6}>
              <Card className={`${styles.cards} h-100 shadow-sm`}>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className={`${styles.cardsH3} mb-3`}>
                    {t('au_cosmovision_spirituality_title')}
                  </Card.Title>
                  <Card.Text className={`${styles.cardsP} flex-grow-1`}>
                    {t('au_cosmovision_spirituality_text')}
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
              <h2 className={styles.guidingVoicesTitle}>
                {t('au_guiding_voices_title')}
              </h2>
              <p
                className={`${styles.guidingVoicesDescription} mx-auto`}
                style={{ maxWidth: '600px' }}
              >
                {t('au_guiding_voices_description')}
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
                {t('au_want_to_leave_legacy_title')}
              </h3>
              <p
                className={`${styles.legacyText} mx-auto mb-4`}
                style={{ maxWidth: '700px' }}
              >
                {t('au_want_to_leave_legacy_text')}
              </p>
              <GreenButton text={t('cu_connect_with_us_button')} />{' '}
              {/* Usé la clave de contacto general que tienes */}
            </Col>
          </Row>
        </Container>
      </article>
    </Layout>
  );
};
