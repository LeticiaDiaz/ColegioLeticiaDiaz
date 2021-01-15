import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";

function Cabecera(props) {
  if (props.sesion) {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Colegio Leticia Díaz</Navbar.Brand>
        <Nav className="mr-auto">
          <Navbar.Text>
            <Link to="/inicio">Inicio</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/modificar">Modificar</Link>
          </Navbar.Text>
        </Nav>
        <Link to="/usuario">Perfil usuario</Link>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Colegio Leticia Díaz</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/inicio">Inicio</Nav.Link>
          <Nav.Link href="/registro">Registro</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
        <Link to="/login">Iniciar sesion</Link>
      </Navbar>
    );
  }
}

export default Cabecera;
