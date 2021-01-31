import { useState, useEffect } from "react";
import "./App.css";
import {Container, Row, Col} from "react-bootstrap"

function Profesores(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("llamando...");
    fetch("/profesorado")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        setData(datos);
      });
  }, []);

  const mostrarProfesores = data.map((profesor) => {
    return (
      <Container>
        <Row>
          <Col md={6}>
        <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={profesor.img} alt="Avatar" style={{width:300,height:300}}/>
          </div>
          <div class="flip-card-back">
            <h1>{profesor.nombre}</h1>
            <p>{profesor.cargo}</p>
            <p>{profesor.descripcion}</p>
          </div>
        </div>
      </div>
      </Col>
      </Row>
      </Container>
    )
  });

  return (
    <>
      {mostrarProfesores}
    </>
  );
}

export default Profesores;
