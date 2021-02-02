import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";

import logo from "./img/isotipo.svg"
import logo2 from "./img/logotipo.svg"

function Cabecera(props) {
  if (props.sesion) {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/"><Image style={{marginTop:-10, width:30}}src={logo} /><Image style={{ marginLeft: 20, height:30}}src={logo2} /></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/conocenos">
            Conócenos
          </Nav.Link>
          <Nav.Link as={Link} to="/contacto">
            Contacto
          </Nav.Link>
          <Nav.Link as={Link} to="/profesores">
            Profesores
          </Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link as={Link} to="/usuario">Perfil usuario</Nav.Link>
        <Nav.Link as={Link} to="/modificar">
            Modificar
        </Nav.Link>
        <Nav.Link onClick={props.logout}>Cerrar sesión</Nav.Link>
        </Nav>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/"><Image style={{marginTop:-10, width:30}}src={logo} /><Image style={{ marginLeft: 20, height:30}}src={logo2} /></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/conocenos">
            Conócenos
          </Nav.Link>
          <Nav.Link as={Link} to="/registro">
            Registro
          </Nav.Link>
          <Nav.Link as={Link} to="/contacto">
            Contacto
          </Nav.Link>
          <Nav.Link as={Link} to="/profesores">
            Profesores
          </Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link as={Link} to="/login">Iniciar sesion</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Cabecera;
