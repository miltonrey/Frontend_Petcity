import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

const Navbarpg = ({ grayscaleMode, handleToggleGrayscale }) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={`navbar ${grayscaleMode ? "grayscale" : ""}`}
    >
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
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/petshops">
            Petshops
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/contact">
            Contacto
          </Nav.Link> */}

          <Nav.Link as={Link} to="/ingresar">
            Ingresar
          </Nav.Link>
          <NavDropdown title="Registro" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/registroUser">
              Usuario
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/registroPetshop">
              PetShop
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <button onClick={handleToggleGrayscale} style={{ color: "white" }}>
          Grayscale Mode
          {grayscaleMode ? (
            <FontAwesomeIcon icon={faToggleOff} />
          ) : (
            <FontAwesomeIcon icon={faToggleOn} />
          )}
        </button>
      </Container>
    </Navbar>
  );
};

export default Navbarpg;
