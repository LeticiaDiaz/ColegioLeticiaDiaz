import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Table, Container, Button, Row, Col, Card } from "react-bootstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

/* ------------------------------------------------------------------------AGENDA------------------------------------------------------------------------------------------- */

const Agenda = (props) => {
  const [myEventsList, setMyEventList] = useState([]);

  useEffect(() => {
    console.log("llamando...");
    fetch("/agenda")
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          console.log(data.mensaje);
          setMyEventList(data.agenda);
        } else {
          console.log(data.mensaje);
        }
      });
  }, []);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("Asunto tutoría:");
    if (title)
      setMyEventList([
        ...myEventsList,
        {
          start,
          end,
          title,
        },
      ]);
    fetch("/agenda", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        start: start,
        end: end,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          console.log(data.mensaje);
        } else {
          console.log(data.mensaje);
        }
      });
  };

  const localizer = momentLocalizer(moment);
  const culture ="es-ES"
  let formats = {
    dateFormat: 'dd',
  
    dayFormat: (date, localizer) =>
      localizer.format(date, 'DDD', culture),
  
    dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
      localizer.format(start, { date: 'short' }, culture) + ' — ' +
      localizer.format(end, { date: 'short' }, culture)
  }
  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        style={{ height: "100vh" }}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelect}
        onSelectEvent={(event) => alert(event.title)}
        selectable
        views={{
          month: true,
          day: true, 
        }}
        popup
        formats={formats}
      />
    </div>
  );
};

function Usuario(props) {
  const [curso, setCurso] = useState([]);
  const [intolerancia, setIntolerancia] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [usuario, setUsuario] = useState(props.usuario);

  /* ------------------------------------------------------------------------HORARIO------------------------------------------------------------------------------------------- */

  useEffect(() => {
    setIsloading(true);
    fetch("/api/user")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setUsuario(datos);
      });
    console.log("1");
    fetch("/horarios", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        curso: usuario.usuario.curso,
      }),
    })
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        setCurso(datos.data[0].horario);
        setIsloading(false);
      });
  }, []);

  const primera = curso.map((horario) => {
    return (
      <td style={{ backgroundColor: colorfondo(horario.primera) }}>
        {horario.primera}
      </td>
    );
  });
  const segunda = curso.map((horario) => {
    return (
      <td style={{ backgroundColor: colorfondo(horario.segunda) }}>
        {horario.segunda}
      </td>
    );
  });
  const tercera = curso.map((horario) => {
    return (
      <td style={{ backgroundColor: colorfondo(horario.tercera) }}>
        {horario.tercera}
      </td>
    );
  });
  const cuarta = curso.map((horario) => {
    return (
      <td style={{ backgroundColor: colorfondo(horario.cuarta) }}>
        {horario.cuarta}
      </td>
    );
  });
  const quinta = curso.map((horario) => {
    return (
      <td style={{ backgroundColor: colorfondo(horario.quinta) }}>
        {horario.quinta}
      </td>
    );
  });
  const sexta = curso.map((horario) => {
    return (
      <td style={{ backgroundColor: colorfondo(horario.sexta) }}>
        {horario.sexta}
      </td>
    );
  });
  const septima = curso.map((horario) => {
    return (
      <td style={{ backgroundColor: colorfondo(horario.septima) }}>
        {horario.septima}
      </td>
    );
  });
  const octava = curso.map((horario) => {
    return (
      <td style={{ backgroundColor: colorfondo(horario.octava) }}>
        {horario.octava}
      </td>
    );
  });

  function colorfondo(asignatura) {
    switch (asignatura) {
      case "Inglés":
        return "#85707C";
      case "Lengua":
        return "#BB9587";
      case "":
        return "#BCBC7C";
      case "Educación artística":
        return "#B6B78F";
      case "Matemáticas":
        return "#A7B4B2";
      case "Recreo":
        return "#748E90";
      case "Música":
        return "#C5EDE5";
      case "Naturales y sociales":
        return "#B6D3D7";
      case "Religión":
        return "#A4A5BC";
      case "":
        return "#876E7E";
      case "Speaking":
        return "#724B5C";
      case "Comedor":
        return "#E76B74";
      case "Educación física":
        return "#FCDFA6";
      case "Francés":
        return "#BEA8AA";
      case "Deportes":
        return "#F4B886";
      case "Lengua y literatura":
        return "#AFE3C0";
      case "Tutoría":
        return "#FFF8CC6";
      case "Física y química":
        return "#6F5E76";
      case "Geografía e historia":
        return "#DD7230";
      case "Tecnología":
        return "#508CA4";
      case "Educación plástica":
        return "#E4C5AF";
      case "Lectoescritura":
        return "#61A0AF";
      case "Lógico matemáticas":
        return "#96C9DC";
      case "Lenguaje plástico":
        return "#F06C9B";
      case "Conocimiento del entorno":
        return "#F9B9B7";
      case "Psicomotricidad":
        return "#F5D4941";
      case "Songs and poems":
        return "#BADEFC";
      case "Robótica":
        return "#E78F8E";
    }
  }

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
  /* ------------------------------------------------------------------------COMEDOR------------------------------------------------------------------------------------------- */

  useEffect(() => {
    console.log(props.usuario.usuario);
    setIsloading(true);
    fetch("/comedor", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intolerancia: usuario.usuario.intolerancia,
      }),
    })
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        setIntolerancia(datos.data[0].comedor);
        setIsloading(false);
      });
  }, []);

  const primeros = intolerancia.map((comedor) => {
    return <td>{comedor.primero}</td>;
  });
  const segundos = intolerancia.map((comedor) => {
    return <td>{comedor.segundo}</td>;
  });
  const postres = intolerancia.map((comedor) => {
    return <td>{comedor.postre}</td>;
  });

  function intoleranciaReal(intolerancia) {
    switch (intolerancia) {
      case "Gluten":
        return "Celíaco";
      case "Lactosa":
        return "Intolerante a la lactosa";
      case "Normal":
        return "Sin intolerancias ni alergias alimenticias";
    }
  }

  /* ------------------------------------------------------------------------RETURN------------------------------------------------------------------------------------------- */

  if (!props.sesion) {
    return <Redirect to="/" />;
  } else {
    if (isloading) {
      return <div>Loading</div>;
    } else {
      return (
        <>
          <Container style={{ marginTop: 20 }}>
            <Card style={{ width: "100%" }}>
              <Card.Header>
                <Row>
                  <Col>
                    <strong>Nombre alumno/a:</strong> {usuario.usuario.nombre}
                  </Col>
                  <Col>
                    <strong>Apellidos alumno/a:</strong>{" "}
                    {usuario.usuario.apellidos}
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <strong>Fecha de nacimiento:</strong>
                        <br />
                        {usuario.usuario.nacimiento}
                      </Col>
                      <Col>
                        <strong>Curso actual:</strong>
                        <br />
                        {nombreReal(usuario.usuario.curso)}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <strong>Intolerancia alimentaria:</strong>
                        <br />
                        {intoleranciaReal(usuario.usuario.intolerancia)}
                      </Col>
                    </Row>
                  </Col>
                  <Col style={{ backgroundColor: "#EEEEEE" }}>
                    <Row>
                      <Col>
                        <strong>Nombre madre/padre 1:</strong>{" "}
                        {usuario.usuario.madre}
                      </Col>
                      <Col>
                        <strong>Teléfono madre/padre 1:</strong>{" "}
                        {usuario.usuario.telefonomadre}
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <strong>Nombre madre/padre 2:</strong>{" "}
                        {usuario.usuario.padre}
                      </Col>
                      <Col>
                        <strong>Teléfono madre/padre 2:</strong>{" "}
                        {usuario.usuario.telefonopadre}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
          <Container style={{ marginTop: 20 }}>
            <Table striped bordered hover>
              <thead style={{ backgroundColor: "black", color: "white" }}>
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
          </Container>
          <Container>
            <Table striped bordered hover>
              <thead style={{ backgroundColor: "black", color: "white" }}>
                <tr>
                  <th>
                    MENU COMEDOR <br />
                    Semana 05
                  </th>
                  <th>Lunes 01</th>
                  <th>Martes 02</th>
                  <th>Miércoles 03</th>
                  <th>Jueves 04</th>
                  <th>Viernes 05</th>
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
          </Container>
          <Container>
            <Agenda />
          </Container>
        </>
      );
    }
  }
}

export default Usuario;
