import { Card, Col } from 'react-bootstrap';
import styles from './CoreValuesCard.module.css';
import { GreenButton } from '../GreenButton/GreenButton';

export const CoreValuesCard = ({ title, text, image }) => {
  return (
    <Col xs={12} sm={12} md={6} className="mt-4">
      <Card className={styles.card}>
        <div className={styles.iconWrapper}>
          <img src={image} alt="icons" className={styles.image} />
        </div>

        <Card.Title className={styles.cardTitle}>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
        <div className={styles.contentButton}>
          <GreenButton text={'Learn More'} />
        </div>
      </Card>
    </Col>
  );
};
