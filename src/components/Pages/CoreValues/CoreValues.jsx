import React from 'react';
import { useTranslation } from 'react-i18next'; // ¡Asegúrate de que esta línea esté presente!
import { Layout } from '../../Layout/Layout';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import styles from './CoreValues.module.css';
import { GreenButton } from '../../GreenButton/GreenButton';
import { CoreValuesCard } from '../../CoreValuesCard/CoreValuesCard';
import hoja from '../../../assets/images/hoja.svg';
import cerebro from '../../../assets/images/cerebro.svg';
import user from '../../../assets/images/user.svg';
import corazon from '../../../assets/images/corazon.svg';

export const CoreValues = () => {
  const { t } = useTranslation(); // Obtén la función 't' de useTranslation

  return (
    <Layout>
      
      <section className={styles.frontPage}>
        

        <div className={styles.overlayBlur}></div>
        <div className={styles.frontContain}>
          <h1 className={styles.frontTitle}>{t('cv_hero_title')}</h1>
          <p className={styles.frontText}>{t('cv_hero_text')}</p>
        </div>

      </section>

      <Container>
        <h2 className={styles.title}>{t('cv_how_can_we_help_title')}</h2>
        <p className={styles.subTitle}>{t('cv_how_can_we_help_paragraph')}</p>
      </Container>

      <Container>
        <Row>
          <CoreValuesCard
            // Asumo que esta es la tarjeta de "Focus and Time Management" o "Mentoring"
            title={t('cv_focus_time_management_title')}
            text={t('cv_focus_time_management_text')}
            image={user}
            imageAlt={t('cv_icon_users_alt')} // Añadida la prop imageAlt
          />

          <CoreValuesCard
            title={t('cv_coaching_title')}
            text={t('cv_coaching_text')}
            image={corazon}
            imageAlt={t('cv_icon_heart_alt')} // Añadida la prop imageAlt
          />

          <CoreValuesCard
            title={t('cv_consulting_title')}
            text={t('cv_consulting_text')}
            image={hoja}
            imageAlt={t('cv_icon_leaf_alt')} // Añadida la prop imageAlt
          />

          <CoreValuesCard
            title={t('cv_digital_transformation_title')}
            text={t('cv_digital_transformation_text')}
            image={cerebro}
            imageAlt={t('cv_icon_brain_big_alt')} // Añadida la prop imageAlt
          />
        </Row>
      </Container>

      <Container className={styles.catContainer}>
        <Row>
          <section>
            <div className={styles.frontContain}>
              <h1 className={styles.frontTitle}>
                {t('cv_discover_sacred_animal_title')}
              </h1>
              <p className={styles.frontText}>
                {t('cv_discover_sacred_animal_text')}
              </p>
              <GreenButton text={t('cv_connect_with_us_button')} />
            </div>
          </section>
        </Row>
      </Container>
    </Layout>
  );
};
