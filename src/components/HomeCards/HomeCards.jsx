import { Col, Card } from 'react-bootstrap';
import styles from './HomeCards.module.css';

export const HomeCards = ({ icon, title, content }) => {
  return (
    <Col
      xs={12}
      md={6}
      lg={3}
      className="mb-4"
    >
      <Card className={styles.card}>
        <Card.Body>
          <div className={styles.iconCircle}>
            <img
              src={icon}
              alt="icon"
              className={styles.iconSize}
            />
          </div>
          <Card.Title className={styles.cardTitle}>{title}</Card.Title>
          <Card.Text className={styles.cardText}>{content}</Card.Text>
          <div className={styles.arrowIcon}>&#8594;</div>
        </Card.Body>
      </Card>
    </Col>
  );
};
