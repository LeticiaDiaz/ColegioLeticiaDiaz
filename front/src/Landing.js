import { Container, Image, Col, Row } from "react-bootstrap";

import colegio from "./img/colegio.jpg"

function Landing() {
  return (
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
  )
}

export default Landing;
