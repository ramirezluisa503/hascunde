import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import styles from './TeamMembers.module.css'; 
import elijahImage from "../../assets/images/EliajThorneAboutUs.webp";
import marcusImage from '../../assets/images/MarcusStoneAboutUs.webp';
import calebImage from '../../assets/images/CalebVanceAboutUs.webp';
import liamImage from '../../assets/images/LiamHayesAboutUs.webp';

const teamMembers = [
  {
    id: 1,
    name: 'Elijah Thorne',
    title: 'Founder & Visionary',
    image: elijahImage,
  },
  {
    id: 2,
    name: 'Marcus Stone',
    title: 'Chief Growth Officer',
    image: marcusImage,
  },
  {
    id: 3,
    name: 'Caleb Vance',
    title: 'Head of Community',
    image: calebImage,
  },
  {
    id: 4,
    name: 'Liam Hayes',
    title: 'Program Director',
    image: liamImage,
  },
];

const TeamMembers = () => {
  return (
    <Container className="my-5"> {/* my-5 para margen vertical */}
      <Row className="justify-content-center g-4"> {/* g-4 para espaciado entre cards, justify-content-center para centrar las columnas */}
        {teamMembers.map((member) => (
          <Col
            key={member.id}
            xs={12} 
            sm={6}  
            md={4}  
            lg={3} 
            className="d-flex justify-content-center" // Centra la tarjeta dentro de la columna
          >
            <Card className={`text-center ${styles.teamCard}`}> 
              <div className={styles.cardImageContainer}> 
                <Image src={member.image} roundedCircle className={styles.teamMemberImage} /> 
              </div>
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text className="text-muted">{member.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamMembers; 