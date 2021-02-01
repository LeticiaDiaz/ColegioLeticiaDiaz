import { Container, Alert, Row, Col, Image, Form, Button } from "react-bootstrap";
import {useState} from "react"
import "./App.css";
import mapa from "./img/mapa.png";

function Contacto() {

const [feedback, setFeedback]=useState("")




  return (
    <div>
      <section className="tarjeta uno">
        <Container style={{ marginTop: 20 }}>
          <Row>
            <Col sm={3}>
              <Row>
                <p>
                  <strong>Dirección: </strong>
                  <br />
                  Calle Azulon, 28232 Las Rozas (Madrid)
                </p>
              </Row>
              <Row>
                <p style={{ textAlign: "justify" }}>
                  <strong>Teléfono: </strong>
                  <br />
                  916235689
                </p>
              </Row>
              <Row>
                <p>
                  <strong>E-mail: </strong>
                  <br />
                  colegio@leticiadiaz.com
                </p>
              </Row>
              <Row>
                <p>
                  <strong>Horario secretaría: </strong>
                  <br />
                  De 8:30h a 17:30h (ininterrumpido)
                </p>
              </Row>
            </Col>
            <Col sm={9} className="d-flex justify-content-center">
              <Image
                style={{ width: "100%" }}
                src={mapa}
                alt="famu-4814068-960-720"
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Asunto</Form.Label>
                <Form.Control/>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
              <Form.Label>Escribe tu mensaje:</Form.Label>
              <Form.Control as="textarea" rows={4} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Col sm={1}>
            <Button size="lg" variant="primary" onClick={()=>{setFeedback(<Alert variant="success">Tu mensaje ha sido enviado</Alert>); setTimeout(()=>{setFeedback("")}, 8000)}} type="submit">
              Enviar
            </Button>
            </Col>
            <Col sm={11}>
            {feedback}
            </Col>
            </Form.Row>
          </Form>
        </Container>
      </section>
    </div>
  );
}

export default Contacto;
