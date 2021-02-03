import { Navbar, Nav, Image } from "react-bootstrap";
import logo from "./img/isotipo.svg";

function Footer() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Colegio Leticia Díaz</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="#">Aviso Legal</Nav.Link>
          <Nav.Link href="#">FAQ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Footer;
