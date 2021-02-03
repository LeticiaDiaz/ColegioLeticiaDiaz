import "./App.css";
import { Container, Image, Col, Row } from "react-bootstrap";
import manos from "./img/manos.webp";
import chica from "./img/chica.webp";
import lapiz from "./img/lapiz.webp";
import ninas from "./img/ninas.webp";

function Conocenos() {
  return (
    <div>
      <section
        className="tarjeta uno"
      >
        <Container>
          <Row
            style={{ margin: 20 }}
            className="d-flex justify-contcenterent-between"
          >
            <Col md={7}>
              <h1>Presentación</h1>
              <p style={{ textAlign: "justify" }}>
                El colegio Leticia Díaz es un centro educativo privado, cuyo
                objetivo primordial es ofrecer programas educativos innovadores
                con los más altos estándares de calidad y centrados en los
                alumnos. Somos un colegio actual, dinámico, preparado y de
                calidad, que trabaja para dar respuestas a las necesidades
                sociales, familiares e institucionales de nuestro entorno a
                través de nuestros proyectos presentes y futuros y, de esta
                forma, seguir generando la confianza que nuestras familias, año
                tras año, depositan en nuestro Colegio. Nuestro Colegio surge en
                1975 como un proyecto personal de crear un centro educativo
                donde se buscase la educación integral del alumno, dando una
                formación de calidad y excelencia así como desarrollando los
                valores éticos, morales y cristianos de nuestros alumnos:
                respeto,responsabilidad, compromiso, solidaridad y esperanza.
              </p>
            </Col>
            <Col className="d-flex justify-content-center" md={5}>
              <Image
                style={{ width: "100%" }}
                src={manos}
                alt="famu-4814068-960-720"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <hr style={{ marginInline: 200 }} />
      <section
        className="tarjeta dos"
      >
        <Container>
          <Row
            style={{ margin: 20 }}
            className="d-flex justify-content-between"
          >
            <Col md={8}>
              <h1>Nuestra misión</h1>
              <p style={{ textAlign: "justify" }}>
                Nuestra misión es proporcionar una educación integral de calidad
                a nuestros alumnos formando personas respetuosas, responsables,
                con libertad de criterio y con una buena preparación intelectual
                y académica que les permita integrarse y proporcionar un valor
                añadido a la sociedad en la que se van a desarrollar como
                personas y ciudadanos.
              </p>
            </Col>
            <Col
              className="d-flex justify-content-center order-md-first "
              md={4}
            >
              <Image
                style={{ width: "100%" }}
                src={chica}
                alt="famu-4814068-960-720"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <hr style={{ marginInline: 200 }} />
      <section
        className="tarjeta tres"
      >
        <Container>
          <Row
            style={{ margin: 20 }}
            className="d-flex justify-contcenterent-between"
          >
            <Col md={7}>
              <h1>Nuestra visión</h1>
              <p style={{ textAlign: "justify" }}>
                Trabajamos para ser un centro educativo con reconocimiento
                público por su calidad humana, labor social y excelencia
                académica, fomentando en nuestros alumnos su crecimiento
                personal, desarrollando todas sus capacidades y favoreciendo un
                pensamiento crítico que les permita generar valores de cambio en
                la sociedad que nos rodea desde un espíritu responsable, creador
                y constructivo. Queremos formar alumnos con un alto nivel
                académico y con una sólida preparación en inglés e impulsar y
                liderar la creación de programas educativos y sociales
                promoviendo una amplia oferta de actividades culturales y
                deportivas. Para lograrlo queremos integrar en nuestra labor a
                las familias que componen nuestra comunidad como elemento
                imprescindible para completar la acción educativa.
              </p>
            </Col>
            <Col className="d-flex justify-content-center" md={5}>
              <Image
                style={{ width: "100%" }}
                src={lapiz}
                alt="famu-4814068-960-720"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <hr style={{ marginInline: 200 }} />
      <section
        className="tarjeta cuatro"
      >
        <Container>
          <Row
            style={{ margin: 20 }}
            className="d-flex justify-content-between"
          >
            <Col md={8}>
              <h1>Nuestros valores</h1>
              <p style={{ textAlign: "justify" }}>
                Respeto, como elemento básico en la formación de la persona.
                Tanto en la aceptación personal como en las relaciones sociales
                y profesionales. Esfuerzo, como la piedra angular en la
                construcción del éxito personal y profesional. El compromiso con
                nuestro proyecto, nuestras familias y nuestro entorno. Y, por
                último, los valores propios del humanismo cristiano que, por
                convicción de su fundadora y sus continuadores, es el mejor y
                más abonado camino para llegar a conseguir nuestra visión.
              </p>
            </Col>
            <Col
              className="d-flex justify-content-center order-md-first "
              md={4}
            >
              <Image
                style={{ width: "100%" }}
                src={ninas}
                alt="famu-4814068-960-720"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Conocenos;
