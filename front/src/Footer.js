import { Navbar, Nav, Image } from "react-bootstrap";
import facebook from "./img/facebook.png"
import instagram from "./img/instagram.png"
import twitter from "./img/twitter.png"

function Footer() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Colegio Leticia Díaz</Navbar.Brand>
      <Navbar.Text>- 2020-2021 Todos los derechos reservados.</Navbar.Text>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
            <Nav.Link href="#"><Image style={{width: 30}} src={facebook}/></Nav.Link>
            <Nav.Link href="#"><Image style={{width: 30}} src={twitter}/></Nav.Link>
            <Nav.Link href="#"><Image style={{width: 30}} src={instagram}/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Footer;
