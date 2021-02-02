import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { useState } from "react";
import logo from "./img/isotipo.svg"
import logo2 from "./img/logotipo.svg"

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registroEmail = (e) => {
    setEmail(e.target.value);
  };

  const registroPassword = (e) => {
    setPassword(e.target.value);
  };

    return (
      <>
      <Container style={{ marginTop: "10%", marginBottom:20 }} className="d-flex flex-column justify-content-center">
        <Image style={{width:200}} src={logo}/>
        <Image style={{height: 50}} src={logo2}/>
      </Container>
      <Container
        className="d-flex justify-content-center"
      >
        <Col sm={6}>
          <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  value={email}
                  onChange={registroEmail}
                  type="input"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  value={password}
                  onChange={registroPassword}
                  type="password"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formButtonSend">
              <Form.Label column sm="2"></Form.Label>
              <Col sm={10}>
                <Button
                  variant="primary"
                  onClick={() => {
                    props.enviarLogin(email, password);
                  }}
                >
                  Enviar
                </Button>
              </Col>
            </Form.Group>
            {props.respuesta}
          </Form>
        </Col>
      </Container>
      </>
    );
  }


export default Login;
