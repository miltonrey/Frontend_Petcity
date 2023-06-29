import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet, Link } from "react-router-dom";
const Navbarpg = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/logo.png"}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            PetCity
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar id="responsive-navbar-nav" expand="lg" bg="dark" variant="dark">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
                <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                <Nav.Link as={Link} to="/petshops">Petshops</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                <Nav.Link as={Link} to="/ingresar">Ingresar</Nav.Link>
              <NavDropdown title="Registro" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/registroUser">Usuario</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/registroPetshop">PetShop</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};
export default Navbarpg;
