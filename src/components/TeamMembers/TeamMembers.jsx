import React from 'react';
import { useTranslation } from 'react-i18next'; // <-- ¡Ya lo tienes, genial!
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import styles from './TeamMembers.module.css';
import elijahImage from '../../assets/images/EliajThorneAboutUs.webp';
import marcusImage from '../../assets/images/MarcusStoneAboutUs.webp';
import calebImage from '../../assets/images/CalebVanceAboutUs.webp';
import liamImage from '../../assets/images/LiamHayesAboutUs.webp';

// Este array ahora solo contendrá la información estática y las CLAVES de traducción para los títulos
const teamMembers = [
  {
    id: 1,
    name: 'Elijah Thorne',
    // Usaremos una clave de traducción para el título
    titleKey: 'team_elijah_title',
    image: elijahImage,
  },
  {
    id: 2,
    name: 'Marcus Stone',
    titleKey: 'team_marcus_title',
    image: marcusImage,
  },
  {
    id: 3,
    name: 'Caleb Vance',
    titleKey: 'team_caleb_title',
    image: calebImage,
  },
  {
    id: 4,
    name: 'Liam Hayes',
    titleKey: 'team_liam_title',
    image: liamImage,
  },
];

const TeamMembers = () => {
  // Obtén la función 't' para traducir
  const { t } = useTranslation();

  return (
    <Container className="my-5">
      <Row className="justify-content-center g-4">
        {teamMembers.map((member) => (
          <Col
            key={member.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center"
          >
            <Card className={`text-center ${styles.teamCard}`}>
              <div className={styles.cardImageContainer}>
                <Image
                  src={member.image}
                  roundedCircle
                  className={styles.teamMemberImage}
                  // También puedes añadir un alt traducido si la imagen es significativa
                  alt={member.name} // Los nombres de las personas no suelen traducirse
                />
              </div>
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>{' '}
                {/* El nombre no se traduce */}
                <Card.Text className="text-muted">
                  {t(member.titleKey)}
                  {/* ¡Aquí usamos la clave para traducir el cargo! */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamMembers;
