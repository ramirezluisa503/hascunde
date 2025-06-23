import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from "../../assets/images/hascunde-logo.webp";
import styles from "../../components/NavBar/NavBar.module.css";

export const NavBar = () => {
  return (
    <div>
     
      <Navbar bg="white" expand="lg" variant="light">
        <Container>
          {/* Marca/Logo de tu sitio */}
          <Navbar.Brand className={styles.brandText}>
            <img
              src={logo}
              alt="Logo Hascunde"
              width="30"
              height="30"
              className="d-inline-block align-top me-2" // Clases de Bootstrap para alineación y margen
            />
            Hascunde
          </Navbar.Brand>

          {/* Botón de "hamburguesa" para dispositivos móviles */}
          {/* expand="lg" significa que el navbar se expandirá (mostrará todos los enlaces)
            en pantallas "large" (992px) o más grandes.
            En pantallas más pequeñas, se colapsará detrás de este botón. */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Contenido del menú que se colapsará/expandirá */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={NavLink} to="/" end className={styles.navLink}>Homepage</Nav.Link>
              <Nav.Link as={NavLink} to="/AboutUs" className={styles.navLink}>About Us</Nav.Link>
              <Nav.Link as={NavLink} to="/OurMission" className={styles.navLink}>Our Mission</Nav.Link>
              <Nav.Link as={NavLink} to="/CoreValues" className={styles.navLink}>Core Values</Nav.Link>
              <Nav.Link as={NavLink} to="/ContactUs" className={styles.navLink}>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
