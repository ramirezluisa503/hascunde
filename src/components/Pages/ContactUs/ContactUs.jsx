import { useTranslation } from 'react-i18next';
import { Layout } from '../../Layout/Layout';
import styles from './ContactUs.module.css';
import email from '../../../assets/images/email.svg';
import location from '../../../assets/images/location.svg';
import phone from '../../../assets/images/phone.svg';
import { Container, Row, Col, Accordion, Form } from 'react-bootstrap';
import { useState } from 'react';
import { GreenButton } from '../../GreenButton/GreenButton';

export const ContactUs = () => {
  const { t } = useTranslation(); // Inicializa useTranslation

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setFormData({ name: '', email: '', message: '' });
  };

  const faqData = [
    {
      id: 0,
      question: 'cu_faq0_question',
      answer: 'cu_faq0_answer',
    },
    {
      id: 1,
      question: 'cu_faq1_question',
      answer: 'cu_faq1_answer',
    },
    {
      id: 2,
      question: 'cu_faq2_question',
      answer: 'cu_faq2_answer',
    },
    {
      id: 3,
      question: 'cu_faq3_question',
      answer: 'cu_faq3_answer',
    },
  ];

  return (
    <Layout>
      <Container className={styles.container}>
        <Row>
          <section className={styles.frontPage}>
            <div className={styles.overlayBlur}></div>
            <div className={styles.frontContain}>
              <h1 className={styles.frontTitle}>{t('cu_hero_title')}</h1>
              <p className={styles.frontText}>{t('cu_hero_subtitle')}</p>
              <div className={styles.contactContainer}>
                <div className={styles.iconContainer}>
                  <img
                    src={location}
                    alt={t('cu_location_icon_alt')}
                    className={styles.icon}
                  />
                  <p>{t('cu_location_address')}</p>
                </div>

                <div className={styles.iconContainer}>
                  <img
                    src={email}
                    alt={t('cu_email_icon_alt')}
                    className={styles.icon}
                  />
                  <p>{t('cu_email_address')}</p>
                </div>

                <div className={styles.iconContainer}>
                  <img
                    src={phone}
                    alt={t('cu_phone_icon_alt')}
                    className={styles.icon}
                  />
                  <p>{t('cu_phone_numbers')}</p>
                </div>
              </div>
            </div>
          </section>
        </Row>
      </Container>

      <section className={styles.contactFaqSection}>
        <Container>
          <Row className={styles.contactContain}>
            {/* Contact Form */}
            <Col
              lg={6}
              className={styles.contactColumn}
            >
              <h2 className={styles.sectionTitle}>
                {t('cu_contact_form_title')}
              </h2>

              <Form
                className={styles.contactForm}
                onSubmit={handleSubmit}
              >
                <Form.Group className={styles.formGroup}>
                  <Form.Label className={styles.formLabel}>
                    {t('cu_form_name_label')}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder={t('cu_form_name_placeholder')}
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </Form.Group>
                <Form.Group className={styles.formGroup}>
                  <Form.Label className={styles.formLabel}>
                    {t('cu_form_email_label')}
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder={t('cu_form_email_placeholder')}
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </Form.Group>
                <Form.Group className={styles.formGroup}>
                  <Form.Label className={styles.formLabel}>
                    {t('cu_form_message_label')}
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder={t('cu_form_message_placeholder')}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    required
                  />
                </Form.Group>
                <GreenButton
                  text={t('cu_send_message_button')}
                  onClick={handleSubmit}
                />{' '}
              </Form>
            </Col>

            {/* FAQ Section */}
            <Col
              lg={6}
              className={styles.faqColumn}
            >
              <h2 className={styles.sectionTitle}>{t('cu_faq_title')}</h2>

              <Accordion
                defaultActiveKey="0"
                className={styles.faqAccordion}
              >
                {faqData.map((faq, index) => (
                  <Accordion.Item
                    eventKey={index.toString()}
                    key={faq.id}
                    className={styles.accordionItem}
                  >
                    <Accordion.Header className={styles.accordionHeader}>
                      {t(faq.question)}{' '}
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                      {t(faq.answer)}{' '}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};
