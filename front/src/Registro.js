import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function Registro(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [curso, setCurso] = useState("");
  const [madre, setMadre] = useState("");
  const [telefonomadre, setTelefonomadre] = useState("");
  const [padre, setPadre] = useState("");
  const [telefonopadre, setTelefonopadre] = useState("");
  const [alert, setAlert] = useState("");

  const registroEmail = (e) => {
    setEmail(e.target.value);
  };
  const registroPassword = (e) => {
    setPassword(e.target.value);
  };
  const registroNombre = (e) => {
    setNombre(e.target.value);
  };
  const registroApellidos = (e) => {
    setApellidos(e.target.value);
  };
  const registroNacimiento = (e) => {
    setNacimiento(e.target.value);
  };
  const registroCurso = (e) => {
    setCurso(e.target.value);
  };
  const registroMadre = (e) => {
    setMadre(e.target.value);
  };
  const registroTelefonomadre = (e) => {
    setTelefonomadre(e.target.value);
  };
  const registroPadre = (e) => {
    setPadre(e.target.value);
  };
  const registroTelefonopadre = (e) => {
    setTelefonopadre(e.target.value);
  };

  function enviarRegistro() {
    fetch("/registro/alumno", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (datos) {
        console.log(datos);
        setAlert(datos.mensaje);
      });
  }
  return (
    <Container>
      <Row>
        <Col>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          value={email}
          onChange={registroEmail}
          type="email"
          placeholder=""
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          value={password}
          onChange={registroPassword}
          type="password"
          placeholder=""
        />
      </Form.Group>
      <Form.Group controlId="formBasicNombre">
        <Form.Label>Nombre alumnx</Form.Label>
        <Form.Control
          value={nombre}
          onChange={registroNombre}
          type="input"
          placeholder=""
        />
      </Form.Group>
      <Form.Group controlId="formBasicApellido">
        <Form.Label>Apellidos alumnx</Form.Label>
        <Form.Control
          value={apellidos}
          onChange={registroApellidos}
          type="input"
          placeholder=""
        />
      </Form.Group>
      <Form.Group controlId="formBasicFecha">
        <Form.Label>Fecha de nacimiento</Form.Label>
        <Form.Control
          value={nacimiento}
          onChange={registroNacimiento}
          type="date"
        />
      </Form.Group>
      <Form.Group controlId="formBasicCurso">
        <Form.Label>Curso</Form.Label>
        <Form.Control as="select" onChange={registroCurso}>
          <option disabled selected>
            Selecciona curso actual
          </option>
          <option value="InfantilCero">
            Primer ciclo 0 a 3 años (Infantil)
          </option>
          <option value="InfantilTres">3 años (Infantil)</option>
          <option value="InfantilCuatro">4 años (Infantil)</option>
          <option value="InfantilCinco">5 años (Infantil)</option>
          <option value="PrimariaUno">1º (Primaria)</option>
          <option value="PrimariaDos">2º (Primaria)</option>
          <option value="PrimariaTres">3º (Primaria)</option>
          <option value="PrimariaCuatro">4º (Primaria)</option>
          <option value="PrimariaCinco">5º (Primaria)</option>
          <option value="PrimariaSeis">6º (Primaria)</option>
          <option value="EsoUno">1º (ESO)</option>
          <option value="EsoDos">2º (ESO)</option>
          <option value="EsoTres">3º (ESO)</option>
          <option value="EsoCuatro">4º (ESO)</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicNombremadre">
        <Form.Label>Nombre madre/padre 1</Form.Label>
        <Form.Control
          value={madre}
          onChange={registroMadre}
          type="input"
          placeholder=""
        />
      </Form.Group>
      <Form.Group controlId="formBasicTelefonomadre">
        <Form.Label>Teléfono madre/padre 1</Form.Label>
        <Form.Control
          value={telefonomadre}
          onChange={registroTelefonomadre}
          type="tel"
          placeholder=""
        />
      </Form.Group>
      <Form.Group controlId="formBasicNombrepadre">
        <Form.Label>Nombre madre/padre 2</Form.Label>
        <Form.Control
          value={padre}
          onChange={registroPadre}
          type="input"
          placeholder=""
        />
      </Form.Group>
      <Form.Group controlId="formBasicTelefonopadre">
        <Form.Label>Teléfono madre/padre 2</Form.Label>
        <Form.Control
          value={telefonopadre}
          onChange={registroTelefonopadre}
          type="tel"
          placeholder=""
        />
      </Form.Group>


      <Button variant="primary" onClick={enviarRegistro}>
        Enviar
      </Button>
      {alert}
    </Form>
    </Col>
      </Row>
    </Container>
  );
}

export default Registro;
