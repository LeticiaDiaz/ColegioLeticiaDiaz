import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./App.css";

function Cabecera(props) {

  if (props.sesion) {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Colegio Leticia Díaz</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="./inicio">Inicio</Nav.Link>
        <Nav.Link href="./registro">Registro</Nav.Link>
        <Nav.Link href="./contacto">Contacto</Nav.Link>
      </Nav>
      <Nav.Link href="./usuario">Perfil usuario</Nav.Link>
    </Navbar>
  );
}else {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Colegio Leticia Díaz</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="./Inicio">Inicio</Nav.Link>
        <Nav.Link href="./Registro">Registro</Nav.Link>
        <Nav.Link href="./Contacto">Contacto</Nav.Link>
      </Nav>
      <Link to="/login">Iniciar sesion</Link>
    </Navbar>
  );
}
}

export default Cabecera
