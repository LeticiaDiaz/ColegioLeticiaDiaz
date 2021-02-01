import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

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
    <Container className="d-flex justify-content-center" style={{paddingTop: 20}}>
      
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Introduce tu email"
          value={email}
          onChange={registroEmail}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Introduce tu contraseña"
          value={password}
          onChange={registroPassword}
        />
      </Form.Group>

      <Button
        variant="primary"
        onClick={() => {
          props.enviarLogin(email, password);
        }}
      >
        Enviar
      </Button>
      {props.respuesta}
    </Form>
    </Container>
  );
}

export default Login;
