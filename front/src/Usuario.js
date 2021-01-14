import { useState, useEffect } from "react";
import { Table, ListGroup, Container } from "react-bootstrap";
import "./App.css";

function Usuario(props) {
  const [curso, setCurso] = useState([]);
  const [intolerancia, setIntolerancia] = useState([]);
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
        setCurso(datos.data[0].horario);
        setIsloading(false);
      });
  }, [props.usuario.usuario.curso]);

  const primera = curso.map((horario) => {
    return <td>{horario.primera}</td>;
  });
  const segunda = curso.map((horario) => {
    return <td>{horario.segunda}</td>;
  });
  const tercera = curso.map((horario) => {
    return <td>{horario.tercera}</td>;
  });
  const cuarta = curso.map((horario) => {
    return <td>{horario.cuarta}</td>;
  });
  const quinta = curso.map((horario) => {
    return <td>{horario.quinta}</td>;
  });
  const sexta = curso.map((horario) => {
    return <td>{horario.sexta}</td>;
  });
  const septima = curso.map((horario) => {
    return <td>{horario.septima}</td>;
  });
  const octava = curso.map((horario) => {
    return <td>{horario.octava}</td>;
  });

  function nombreReal(curso) {
    switch (curso) {
      case "InfantilTres":
        return "3 años (Infantil)";
      case "InfantilCuatro":
        return "4 años (Infantil)";
      case "InfantilCinco":
        return "5 años (Infantil)";
      case "PrimariaUno":
        return "1º (Primaria)";
      case "PrimariaDos":
        return "2º (Primaria)";
      case "PrimariaTres":
        return "3º (Primaria)";
      case "PrimariaCuatro":
        return "4º (Primaria)";
      case "PrimariaCinco":
        return "5º (Primaria)";
      case "PrimariaSeis":
        return "6º (Primaria)";
      case "EsoUno":
        return "1º (ESO)";
      case "EsoDos":
        return "2º (ESO)";
      case "EsoTres":
        return "3º (ESO)";
      case "EsoCuatro":
        return "4º (ESO)";
    }
  }

  useEffect(() => {
    console.log(props.usuario.usuario);
    setIsloading(true);
    fetch("/comedor", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intolerancia: props.usuario.usuario.intolerancia,
      }),
    })
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        setIntolerancia(datos.data[0].comedor);
        setIsloading(false);
      });
  }, [props.usuario.usuario.intolerancia]);

  const primeros = intolerancia.map((comedor) => {
    return <td>{comedor.primero}</td>;
  });
  const segundos = intolerancia.map((comedor) => {
    return <td>{comedor.segundo}</td>;
  });
  const postres = intolerancia.map((comedor) => {
    return <td>{comedor.postre}</td>;
  });

  if (isloading) {
    return <div>Loading</div>;
  } else {
    return (
      <>
        <Container>
          <ListGroup>
            <ListGroup.Item>
              <strong>Nombre alumnx:</strong> {props.usuario.usuario.nombre}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Apellidos alumnx:</strong>{" "}
              {props.usuario.usuario.apellidos}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Fecha de nacimiento:</strong>{" "}
              {props.usuario.usuario.nacimiento}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Curso actual:</strong>{" "}
              {nombreReal(props.usuario.usuario.curso)}
            </ListGroup.Item>
            {
              <ListGroup.Item>
                <strong>Intolerancia alimentaria:</strong>{" "}
                {props.usuario.usuario.intolerancia}
              </ListGroup.Item>
            }
            <ListGroup.Item>
              <strong>Nombre madre/padre 1:</strong>{" "}
              {props.usuario.usuario.madre}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Teléfono madre/padre 1:</strong>{" "}
              {props.usuario.usuario.telefonomadre}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Nombre madre/padre 2:</strong>{" "}
              {props.usuario.usuario.padre}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Teléfono madre/padre 2:</strong>{" "}
              {props.usuario.usuario.telefonopadre}
            </ListGroup.Item>
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
          </tbody>
        </Table>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>MENU COMEDOR</th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primer Plato</td>
              {primeros}
            </tr>
            <tr>
              <td>Segundo Plato</td>
              {segundos}
            </tr>
            <tr>
              <td>Postre</td>
              {postres}
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

/* useEffect(() => {
    setIsloading(true);
    fetch("/comedor", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        curso: props.usuario.usuario.intolerancia,
      }),
    })
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        setData(datos.data[0].comedor);
        setIsloading(false);
      });
  }, [props.usuario.usuario.intolerancia]);

  const lunes = data.map((comedor) => {
    return <td>{comedor.lunes}</td>;
  });
  const martes = data.map((comedor) => {
    return <td>{comedor.martes}</td>;
  });
  const miercoles = data.map((comedor) => {
    return <td>{comedor.miercoles}</td>;
  });
  const jueves = data.map((comedor) => {
    return <td>{comedor.jueves}</td>;
  });
  const viernes = data.map((comedor) => {
    return <td>{comedor.viernes}</td>;
  });

  if (isloading) {
    return <div>Loading</div>;
  } else {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>MENU COMEDOR</th>
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
        </tbody>
      </Table>
    );
  }
} */

export default Usuario;
