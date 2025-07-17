import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import styles from './TeamMembers.module.css';
import victor from '../../assets/images/victorHugoMontoya.webp';
import juanSebastian from '../../assets/images/juanSebastianOsorio.webp';
import isabel from '../../assets/images/isabelOsorio.webp';
import felipe from '../../assets/images/felipeGomez.webp';

const teamMembers = [
  {
    id: 1,
    name: 'Victor Hugo Montoya Corrales',
    titleKey: 'team_elijah_title',
    image: victor,
    link: 'https://www.linkedin.com/in/victor-hugo-montoya-corrales',
  },
  {
    id: 2,
    name: 'Juan Sebastian Osorio Laverde',
    titleKey: 'team_marcus_title',
    image: juanSebastian,
    link: 'https://www.linkedin.com/in/juan-sebastian-osorio-laverde',
  },
  {
    id: 3,
    name: 'Isabel Osorio Laverde',
    titleKey: 'team_caleb_title',
    image: isabel,
    link: 'https://www.instagram.com/coachisaosorio?igsh=enE5Z2Z4anJyYXNq',
  },
  {
    id: 4,
    name: 'Felipe Gomez',
    titleKey: 'team_liam_title',
    image: felipe,
    link: 'https://www.linkedin.com/in/felipe-gomez',
  },
];

const TeamMembers = () => {
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
            {member.link ? (
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none w-100 d-flex justify-content-center"
              >
                <Card
                  className={`text-center ${styles.teamCard} ${styles.clickableCard}`}
                >
                  <div className={styles.cardImageContainer}>
                    <Image
                      src={member.image}
                      roundedCircle
                      className={styles.teamMemberImage}
                      alt={member.name}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text className="text-muted">
                      {t(member.titleKey)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            ) : (
              <Card className={`text-center ${styles.teamCard}`}>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={member.image}
                    roundedCircle
                    className={styles.teamMemberImage}
                    alt={member.name}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text className="text-muted">
                    {t(member.titleKey)}
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamMembers;
