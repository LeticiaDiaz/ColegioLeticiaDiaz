import { Form, Button, Alert } from "react-bootstrap"
import { useState} from "react"


function Login(props) {
const [email, setEmail] = useState ("")
const [password, setPassword] = useState ("")
const [respuesta, setRespuesta] = useState("")

const registroEmail = (e) => {
    setEmail(e.target.value);
  };

const registroPassword = (e) => {
    setPassword(e.target.value);
  };

 function enviarLogin(){
     fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (datos) {
          console.log(datos);
          if(!datos.error){
              props.setSesion(true)
              setRespuesta(<Alert variant="success">Login correcto</Alert>)
          }else{
            setRespuesta(<Alert variant="danger">Login incorrectod</Alert>)
          }
        });
 }

    return (
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Introduce tu email" value={email} onChange={registroEmail}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Introduce tu contraseña" value={password} onChange={registroPassword} />
  </Form.Group>

  <Button variant="primary" onClick={enviarLogin}>
    Enviar
  </Button>
  {respuesta}
</Form>

        )
}

export default Login