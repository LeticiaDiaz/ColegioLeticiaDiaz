import { Container, Image, Col, Row, Carousel} from "react-bootstrap";

import colegio from "./img/colegio.jpg"
import hidrogel from "./img/hidrogel.jpg"
import school from "./img/school.jpg"


/* <>
  <Container style={{marginTop:60}}>
      <Row>
      <Col>
  <Image
        style={{width:"100%"}}
        src={colegio}
        alt="famu-4814068-960-720"
      />

      </Col>
      </Row>
      <Row>
          <Col className="text-center">
          <h1>Colegio Leticia Díaz</h1>
          </Col>
      </Row>
</Container>

      </> */

function Landing() {
  return (
      <Container style={{marginTop: 40}}>
      <Carousel>
  <Carousel.Item interval={10000}>
    <img
      className="d-block w-100"
      src={colegio}
      alt="First slide"
    />
    <Carousel.Caption style= {{color: "black"}}>
      <h2><strong>Colegio Leticia Díaz</strong></h2>
      <h4>La educación marca nuestro espíritu</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={hidrogel}
      alt="Third slide"
    />
    <Carousel.Caption style= {{color: "black", textShadow:"#ffffff"}}>
      <h2><strong>Estamos preparados de nuevo</strong></h2>
      <h4>Contamos con todas las medidas de seguridad, prevención e higiene</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src={school}
      alt="Third slide"
    />
    <Carousel.Caption style= {{color: "black"}}>
      <h2><strong>Bilingüe y Multicultural</strong></h2>
      <h4>Garantizamos la excelencia académica en ambos idiomas</h4>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
  )
  
 
}

export default Landing;
