import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";

function Cabecera(props) {
  if (props.sesion) {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Colegio Leticia Díaz</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/inicio">
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/contacto">
            Contacto
          </Nav.Link>
          <Nav.Link as={Link} to="/modificar">
            Modificar
          </Nav.Link>
        </Nav>
        <Link to="/usuario">Perfil usuario</Link>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Colegio Leticia Díaz</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/inicio">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
          <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
        </Nav>
        <Link to="/login">Iniciar sesion</Link>
      </Navbar>
    );
  }
}

export default Cabecera;
