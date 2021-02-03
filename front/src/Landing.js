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
        <Row>
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
</Row>
<Row style={{marginTop:20}}className="d-flex justify-content-center">
  <h1>UYGUYGUYEGuyguygultg uty</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id feugiat erat, eu pellentesque dui. Cras vehicula aliquam pulvinar. Etiam fermentum ac est a dapibus. Nulla lectus magna, laoreet bibendum eros quis, cursus molestie ipsum. Vestibulum rutrum sollicitudin ante eget dapibus. Phasellus rutrum viverra nunc nec vehicula. Proin quis sagittis est, ac facilisis lorem. Mauris ut sapien vel leo rutrum ornare ut vel nunc. Donec molestie purus eget luctus blandit.</p>

<p>Proin vitae blandit tellus. Nulla sit amet fermentum mauris. Nulla tellus eros, suscipit in tortor nec, finibus faucibus est. Nulla gravida malesuada euismod. Nullam lobortis mattis dolor eu faucibus. Mauris dignissim metus congue viverra mattis. Morbi congue a purus non ultrices. Aenean commodo odio ut libero blandit, sed ornare eros aliquet. Pellentesque pretium ligula sagittis lacus faucibus ultricies.</p>

<p>Quisque molestie sapien in orci vulputate euismod. Nullam odio dui, interdum sed erat eu, semper mollis massa. Sed facilisis ut tortor ac venenatis. Morbi sit amet laoreet nulla. Aenean nec porttitor nunc. Quisque et sapien et leo fermentum feugiat. Integer at ultricies augue. Aenean eleifend consectetur nisl pulvinar commodo. Proin malesuada cursus ex quis dictum. Suspendisse elementum sapien at nisl accumsan, pharetra pellentesque diam auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed volutpat porttitor urna nec dictum. Sed quam leo, pulvinar sit amet mollis in, scelerisque in erat.</p>
</Row>
</Container>
  )
  
 
}

export default Landing;
