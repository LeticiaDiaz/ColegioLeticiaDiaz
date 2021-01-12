import { useState, useEffect } from "react";
import { Table, ListGroup, Container } from "react-bootstrap";
import "./App.css";

function Usuario(props) {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);

  console.log(props.usuario);

  useEffect(() => {
    setIsloading(true);
    console.log("1");
    fetch("/horarios", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        curso: props.usuario.usuario.curso,
      }),
    })
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        setData(datos.data[0].horario);
        setIsloading(false);
      });
  },[props.usuario.usuario.curso]);

  const primera = data.map((horario) => {
    return <td>{horario.primera}</td>;
  });
  const segunda = data.map((horario) => {
    return <td>{horario.segunda}</td>;
  });
  const tercera = data.map((horario) => {
    return <td>{horario.tercera}</td>;
  });
  const cuarta = data.map((horario) => {
    return <td>{horario.cuarta}</td>;
  });
  const quinta = data.map((horario) => {
    return <td>{horario.quinta}</td>;
  });
  const sexta = data.map((horario) => {
    return <td>{horario.sexta}</td>;
  });
  const septima = data.map((horario) => {
    return <td>{horario.septima}</td>;
  });
  const octava = data.map((horario) => {
    return <td>{horario.octava}</td>;
  });

  function nombreReal(curso){
    switch(curso){
      case "EsoCuatro":
        return "4º de la E.S.O."
    }
  }

  console.log(data);
  console.log(props.usuario.usuario.apellidos)
  if (isloading) {
    return <div>Loading</div>;
  } else {
    return  (
      <>
      <Container>
       <ListGroup>
          <ListGroup.Item><strong>Nombre alumnx:</strong> {props.usuario.usuario.nombre}</ListGroup.Item>
         <ListGroup.Item><strong>Apellidos alumnx:</strong> {props.usuario.usuario.apellidos}</ListGroup.Item>
        <ListGroup.Item><strong>Fecha de nacimiento:</strong> {props.usuario.usuario.nacimiento}</ListGroup.Item>
         <ListGroup.Item><strong>Curso actual:</strong> {nombreReal(props.usuario.usuario.curso)}</ListGroup.Item>
         <ListGroup.Item><strong>Nombre madre/padre 1:</strong> {props.usuario.usuario.madre}</ListGroup.Item>
          <ListGroup.Item><strong>Teléfono madre/padre 1:</strong> {props.usuario.usuario.telefonomadre}</ListGroup.Item>
          <ListGroup.Item><strong>Nombre madre/padre 2:</strong> {props.usuario.usuario.padre}</ListGroup.Item>
          <ListGroup.Item><strong>Teléfono madre/padre 2:</strong> {props.usuario.usuario.telefonopadre}</ListGroup.Item> 
        </ListGroup> 
        </Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>HORARIO</th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>08:00-09:00</td>
              {primera}
            </tr>
            <tr>
              <td>09:00-10:00</td>
              {segunda}
            </tr>
            <tr>
              <td>10:00-10:30</td>
              {tercera}
            </tr>
            <tr>
              <td>10:30-11:30</td>
              {cuarta}
            </tr>
            <tr>
              <td>11:30-12:30</td>
              {quinta}
            </tr>
            <tr>
              <td>12:30-13:30</td>
              {sexta}
            </tr>
            <tr>
              <td>13:30-14:30</td>
              {septima}
            </tr>
            <tr>
              <td>14:30-15:30</td>
              {octava}
            </tr>
           {/*  <tr>
              <td>08:00-09:00</td>
              <td>{data[0].primera}</td>
              <td>{data[1].primera}</td>
              <td>{data[2].primera}</td>
              <td>{data[3].primera}</td>
              <td>{data[4].primera}</td>
            </tr>
            <tr>
              <td>09:00-10:00</td>
              <td>{data[0].segunda}</td>
              <td>{data[1].segunda}</td>
              <td>{data[2].segunda}</td>
              <td>{data[3].segunda}</td>
              <td>{data[4].segunda}</td>
            </tr>
            <tr>
              <td>10:00-10:30</td>
              <td>{data[0].tercera}</td>
              <td>{data[1].tercera}</td>
              <td>{data[2].tercera}</td>
              <td>{data[3].tercera}</td>
              <td>{data[4].tercera}</td>
            </tr>
            <tr>
              <td>10:30-11:30</td>
              <td>{data[0].cuarta}</td>
              <td>{data[1].cuarta}</td>
              <td>{data[2].cuarta}</td>
              <td>{data[3].cuarta}</td>
              <td>{data[4].cuarta}</td>
            </tr>
            <tr>
              <td>11:30-12:30</td>
              <td>{data[0].quinta}</td>
              <td>{data[1].quinta}</td>
              <td>{data[2].quinta}</td>
              <td>{data[3].quinta}</td>
              <td>{data[4].quinta}</td>
            </tr>
            <tr>
              <td>12:30-13:30</td>
              <td>{data[0].sexta}</td>
              <td>{data[1].sexta}</td>
              <td>{data[2].sexta}</td>
              <td>{data[3].sexta}</td>
              <td>{data[4].sexta}</td>
            </tr>
            <tr>
              <td>13:30-14:30</td>
              <td>{data[0].septima}</td>
              <td>{data[1].septima}</td>
              <td>{data[2].septima}</td>
              <td>{data[3].septima}</td>
              <td>{data[4].septima}</td>
            </tr>
            <tr>
              <td>14:30-15:30</td>
              <td>{data[0].octava}</td>
              <td>{data[1].octava}</td>
              <td>{data[2].octava}</td>
              <td>{data[3].octava}</td>
              <td>{data[4].octava}</td>
            </tr> */}
          </tbody>
        </Table>
      </>
    );
  }
}

export default Usuario;
