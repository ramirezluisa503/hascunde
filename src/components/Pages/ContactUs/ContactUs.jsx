import { Layout } from '../../Layout/Layout';
import styles from './ContactUs.module.css';
import email from '../../../assets/images/email.svg';
import location from '../../../assets/images/location.svg';
import phone from '../../../assets/images/phone.svg';
import { Container, Row, Col, Accordion, Form } from 'react-bootstrap';
import { useState } from 'react';
import { GreenButton } from '../../GreenButton/GreenButton';

export const ContactUs = () => {
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
    // Aquí puedes agregar la lógica para enviar el formulario
    setFormData({ name: '', email: '', message: '' });
  };

  const faqData = [
    {
      id: 0,
      question: "What is Hascunde's core philosophy?",
      answer:
        "Hascunde's core philosophy is centered around creating meaningful connections and delivering exceptional value to our clients through innovative solutions and personalized service.",
    },
    {
      id: 1,
      question: "How does 'Massive Transformation' work?",
      answer:
        'Massive Transformation is our comprehensive approach that combines strategic planning, innovative methodologies, and continuous support to help organizations achieve significant and lasting change.',
    },
    {
      id: 2,
      question: 'Can I book a consultation?',
      answer:
        'Yes, you can book a consultation through our contact form or by calling our office directly. We offer both initial consultations and comprehensive planning sessions.',
    },
    {
      id: 3,
      question: 'What kind of support can I expect?',
      answer:
        'You can expect 24/7 customer support, dedicated account management, regular check-ins, and access to our knowledge base and training resources.',
    },
  ];

  return (
    <Layout>
      <Container className={styles.container}>
        <Row>
          <section className={styles.frontPage}>
            <div className={styles.overlayBlur}></div>
            <div className={styles.frontContain}>
              <h1 className={styles.frontTitle}>Contacto</h1>
              <p className={styles.frontText}>Juan Onca Umbra</p>
              <div className={styles.contactContainer}>
                <div className={styles.iconContainer}>
                  <img src={location} alt="location" className={styles.icon} />
                  <p>Belen de Umbria Ris-Vereda la Selva- Finca El Bosque</p>
                </div>

                <div className={styles.iconContainer}>
                  <img src={email} alt="email" className={styles.icon} />
                  <p>Juanoncaumbra@hascunde.com</p>
                </div>

                <div className={styles.iconContainer}>
                  <img src={phone} alt="phone" className={styles.icon} />
                  <p>Col +57 310 8867847 Pe +57 932395049</p>
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
            <Col lg={6} className={styles.contactColumn}>
              <h2 className={styles.sectionTitle}>Contacto</h2>

              <Form className={styles.contactForm}>
                <Form.Group className={styles.formGroup}>
                  <Form.Label className={styles.formLabel}>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </Form.Group>

                <Form.Group className={styles.formGroup}>
                  <Form.Label className={styles.formLabel}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  />
                </Form.Group>

                <Form.Group className={styles.formGroup}>
                  <Form.Label className={styles.formLabel}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Enter your question or feedback..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    required
                  />
                </Form.Group>

                <GreenButton text={'Send Message'} />
              </Form>
            </Col>

            {/* FAQ Section */}
            <Col lg={6} className={styles.faqColumn}>
              <h2 className={styles.sectionTitle}>
                Frequently Asked Questions
              </h2>

              <Accordion defaultActiveKey="0" className={styles.faqAccordion}>
                {faqData.map((faq, index) => (
                  <Accordion.Item
                    eventKey={index.toString()}
                    key={faq.id}
                    className={styles.accordionItem}
                  >
                    <Accordion.Header className={styles.accordionHeader}>
                      {faq.question}
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                      {faq.answer}
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
