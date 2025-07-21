import { useTranslation } from 'react-i18next';
import styles from './HomePage.module.css';
import Tibetan from '../../../assets/images/SobrePortadaHascundeHomePage.webp';
import { Layout } from '../../Layout/Layout';
import { Row, Col, Container } from 'react-bootstrap';
import { HomeCards } from '../../HomeCards/HomeCards';
import { HelpYouCard } from '../../HelpYouCard/HelpYouCard';
import { GreenButton } from '../../GreenButton/GreenButton';
import greenBrain from '../../../assets/images/greenBrain.svg';
import mountain from '../../../assets/images/mountain.svg';
import family from '../../../assets/images/family.svg';
import bienestar from '../../../assets/images/bienestar.svg';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className={styles.frontPage}>
        <div className={styles.overlayBlur}></div>
        <div className={styles.frontContain}>
          <h1 className={styles.frontTitle}>{t('hp_front_title')}</h1>
          <p className={styles.frontText}>{t('hp_front_text')}</p>
          <GreenButton
            text={t('hp_start_journey_button')}
            redirect={'/contactUs'}
          />
        </div>
      </section>

      <Container className="mt-3 mt-md-5 px-3 px-md-4">
        <Row className="align-items-center gy-4 gy-md-0">
          <Col
            xs={12}
            lg={6}
            className={styles.leftColumn}
          >
            <h2 className={styles.mainTitle}>
              {t('hp_main_purpose_title').split('<br />')[0]}{' '}
              {/* Clave: hp_main_purpose_title */}
              <br className="d-none d-md-block" />
              {t('hp_main_purpose_title').split('<br />')[1]}
            </h2>
            <div className={styles.lineContainer}>
              <div className={styles.verticalLine}></div>
              <p className={styles.secondaryText}>
                {t('hp_secondary_text').split('<br />')[0]}{' '}
                {/* Clave: hp_secondary_text */}
                <br className="d-none d-md-block" />
                {t('hp_secondary_text').split('<br />')[1]}{' '}
                <br className="d-none d-md-block" />
                {t('hp_secondary_text').split('<br />')[2]}
              </p>
            </div>
          </Col>
          <Col
            xs={12}
            lg={6}
            className={styles.rightColumn}
          >
            <p className={styles.mainParagraph}>{t('hp_main_paragraph')}</p>
          </Col>
        </Row>

        <Row className="mt-4 mt-md-5">
          <Col
            xs={12}
            className="text-center"
          >
            <h2 className={styles.title}>{t('hp_guide_principles_title')}</h2>{' '}
            <p
              className={`${styles.mainParagraph2} mx-auto`}
              style={{ maxWidth: '800px' }}
            >
              {t('hp_guide_principles_paragraph')}{' '}
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="my-4 my-md-5 px-3 px-md-4">
        <Row
          xs={12}
          className="justify-content-center g-3 g-md-4"
        >
          <HomeCards
            icon={family}
            title={t('hp_family_title')}
            content={t('hp_family_content')}
          />

          <HomeCards
            icon={bienestar}
            title={t('hp_wellness_title')}
            content={t('hp_wellness_content')}
          />

          <HomeCards
            icon={mountain}
            title={t('hp_tranquility_title')}
            content={t('hp_tranquility_content')}
          />

          <HomeCards
            icon={greenBrain}
            title={t('hp_consciousness_title')}
            content={t('hp_consciousness_content')}
          />
        </Row>
      </Container>

      <Container className="px-3 px-md-4">
        <Row className="gy-4 gy-lg-0">
          <Col
            xs={12}
            lg={8}
          >
            <h2 className={styles.greenTitle}>
              {t('hp_how_hascunde_helps_title')}
            </h2>

            <div className="d-flex flex-column gap-3 gap-md-4">
              <Row>
                <HelpYouCard
                  title={t('hp_coaching_title')}
                  text={t('hp_coaching_text')}
                />

                <HelpYouCard
                  title={t('hp_mentoring_title')}
                  text={t('hp_mentoring_text')}
                />

                <HelpYouCard
                  title={t('hp_consulting_title')}
                  text={t('hp_consulting_text')}
                />

                <HelpYouCard
                  title={t('hp_tech_services_title')}
                  text={t('hp_tech_services_text')}
                />
              </Row>
            </div>
          </Col>

          <Col
            xs={12}
            lg={4}
            className={`${styles.tibetanContent} d-flex flex-column align-items-center text-center`}
          >
            <div
              className="w-100"
              style={{ maxWidth: '352px' }}
            >
              <img
                src={Tibetan}
                alt={t('hp_tibetan_image_alt')}
                className={`${styles.tibetanImage} img-fluid`}
              />
              <h4 className={`${styles.starText} mt-3 mb-3`}>
                {t('hp_tibetan_image_caption')}{' '}
              </h4>
              <GreenButton
                text={t('hp_discover_programs_button')}
                redirect={'/OurMission'}
              />{' '}
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        className={`${styles.brownWallContainer} mt-4 mt-md-5 px-3 px-md-4`}
      >
        <Row>
          <Col
            xs={12}
            className={`${styles.brownWall} text-center py-4 py-md-5`}
          >
            <h2 className={`${styles.brownTitle} mb-3 mb-md-4`}>
              {t('hp_ready_to_forge_path_title')}{' '}
            </h2>
            <GreenButton
              text={t('hp_contact_us_today_button')}
              redirect={'/ContactUs'}
            />{' '}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
