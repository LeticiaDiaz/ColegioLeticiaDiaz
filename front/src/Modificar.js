import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Alert, Col } from "react-bootstrap";
import "./App.css";

function Modificar(props) {
  const [nombre, setNombre] = useState(props.usuario.usuario.nombre);
  const [apellidos, setApellidos] = useState(props.usuario.usuario.apellidos);
  const [nacimiento, setNacimiento] = useState(
    props.usuario.usuario.nacimiento
  );
  const [curso, setCurso] = useState(props.usuario.usuario.curso);
  const [intolerancia, setIntolerancia] = useState(
    props.usuario.usuario.intolerancia
  );
  const [madre, setMadre] = useState(props.usuario.usuario.madre);
  const [telefonomadre, setTelefonomadre] = useState(
    props.usuario.usuario.telefonomadre
  );
  const [padre, setPadre] = useState(props.usuario.usuario.padre);
  const [telefonopadre, setTelefonopadre] = useState(
    props.usuario.usuario.telefonopadre
  );
  const [alert, setAlert] = useState("");

  const modificarNombre = (e) => {
    setNombre(e.target.value);
  };
  const modificarApellidos = (e) => {
    setApellidos(e.target.value);
  };
  const modificarNacimiento = (e) => {
    setNacimiento(e.target.value);
  };
  const modificarCurso = (e) => {
    setCurso(e.target.value);
  };
  const modificarIntolerancia = (e) => {
    setIntolerancia(e.target.value);
  };
  const modificarMadre = (e) => {
    setMadre(e.target.value);
  };
  const modificarTelefonomadre = (e) => {
    setTelefonomadre(e.target.value);
  };
  const modificarPadre = (e) => {
    setPadre(e.target.value);
  };
  const modificarTelefonopadre = (e) => {
    setTelefonopadre(e.target.value);
  };

  function modificarAlumno() {
    fetch("/api/change", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: props.usuario.email,
        nombre: nombre,
        apellidos: apellidos,
        nacimiento: nacimiento,
        curso: curso,
        intolerancia: intolerancia,
        madre: madre,
        telefonomadre: telefonomadre,
        padre: padre,
        telefonopadre: telefonopadre,
      }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (datos) {
        console.log(datos);
        setAlert(<Alert variant="success">{datos.mensaje}</Alert>);
      });
  }
  return (
    <Container>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formBasicNombre">
            <Form.Label>Nombre alumnx</Form.Label>
            <Form.Control
              value={nombre}
              onChange={modificarNombre}
              type="input"
              placeholder=""
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicApellido">
            <Form.Label>Apellidos alumnx</Form.Label>
            <Form.Control
              value={apellidos}
              onChange={modificarApellidos}
              type="input"
              placeholder=""
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formBasicFecha">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              value={nacimiento}
              onChange={modificarNacimiento}
              type="date"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicCurso">
            <Form.Label>Curso</Form.Label>
            <Form.Control as="select" onChange={modificarCurso}>
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
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formBasicIntolerancia">
            <Form.Label>¿Tienes alguna intolerancia alimentaria?</Form.Label>
            <Form.Control as="select" onChange={modificarIntolerancia}>
              <option disabled selected>
                Selecciona si tienes alguna intolerancia
              </option>
              <option value="Gluten">Intolerante al gluten</option>
              <option value="Lactosa">Intolerante a la lactosa</option>
              <option value="Normal">Puedo comer de todo</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formBasicNombremadre">
            <Form.Label>Nombre madre/padre 1</Form.Label>
            <Form.Control
              value={madre}
              onChange={modificarMadre}
              type="input"
              placeholder=""
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicTelefonomadre">
            <Form.Label>Teléfono madre/padre 1</Form.Label>
            <Form.Control
              value={telefonomadre}
              onChange={modificarTelefonomadre}
              type="tel"
              placeholder=""
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formBasicNombrepadre">
            <Form.Label>Nombre madre/padre 2</Form.Label>
            <Form.Control
              value={padre}
              onChange={modificarPadre}
              type="input"
              placeholder=""
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formBasicTelefonopadre">
            <Form.Label>Teléfono madre/padre 2</Form.Label>
            <Form.Control
              value={telefonopadre}
              onChange={modificarTelefonopadre}
              type="tel"
              placeholder=""
            />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formBasicBoton">
          <Button variant="primary" onClick={modificarAlumno}>
            Enviar
          </Button>
        </Form.Group>

        <Form.Group controlId="formBasicRespuesta">{alert}</Form.Group>
      </Form>
    </Container>
  );
}

export default Modificar;
