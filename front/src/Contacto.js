import { Container, Row, Col, Image, Form } from "react-bootstrap";
import "./App.css";
import mapa from "./img/mapa.png";

function Contacto() {
  return (
    <div>
      <section className="tarjeta uno">
        <Container>
          <Row
            style={{ margin: 20 }}
            className="d-flex justify-contcenterent-between"
          >
            <Col md={7}>
              <p>
                <strong>Dirección: </strong>Calle Azulon, 28232 Las Rozas
                (Madrid)
              </p>
            </Col>
          </Row>
          <Row
            style={{ margin: 20 }}
            className="d-flex justify-contcenterent-between"
          >
            <Col md={7}>
              <p style={{ textAlign: "justify" }}>
                <strong>Teléfono: </strong>916235689
              </p>
            </Col>
          </Row>
          <Row
            style={{ margin: 20 }}
            className="d-flex justify-contcenterent-between"
          >
            <Col md={7}>
              <p style={{ textAlign: "justify" }}>
                <strong>E-mail: </strong>colegio@leticiadiaz.com
              </p>
            </Col>
          </Row>
          <Row
            style={{ margin: 20 }}
            className="d-flex justify-contcenterent-between"
          >
            <Col md={7}>
              <p style={{ textAlign: "justify" }}>
                <strong>Horario secretaría: </strong>De 8:30h a 17:30h
                (ininterrumpido)
              </p>
            </Col>
          </Row>
          <Col className="d-flex justify-content-center" md={5}>
            <Image
              style={{ width: "100%" }}
              src={mapa}
              alt="famu-4814068-960-720"
            />
          </Col>
      {/*     <Form.Row>
     {/*      <Form.Group as={Col} controlId="exampleForm.ControlInput1">
    <Form.Label>Déjanos tu teléfono y te llamamos</Form.Label>
    <Form.Control as={Col} type="text" placeholder=""  />
  </Form.Group>
  </Form.Row> */} 
        </Container>
      </section>
    </div>
  );
}

export default Contacto;
