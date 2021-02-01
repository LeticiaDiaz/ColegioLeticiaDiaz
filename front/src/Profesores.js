import { useState, useEffect } from "react";
import "./App.css";
import {Container, Card, Row, Col} from "react-bootstrap"

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
        <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={profesor.img} alt="Avatar" style={{width:300, height:420}}/>
          </div>
          <Card.Body style={{color:"black", padding: 10}} className="flip-card-back">
            <h1>{profesor.nombre}</h1>
            <p>{profesor.cargo}</p>
            <p className="text-justify">{profesor.descripcion}</p>
          </Card.Body>
        </div>
      </div>
    )
  });

  return (
    <>
    <div className="foto" >
      {mostrarProfesores}
    </div>
    </>
  );
}

export default Profesores;
