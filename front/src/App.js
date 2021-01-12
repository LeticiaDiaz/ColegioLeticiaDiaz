import "./App.css";
import { Alert } from "react-bootstrap"
import Registro from "./Registro";
import Cabecera from "./Cabecera"
import Login from "./Login"
import Usuario from "./Usuario"

import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [sesion, setSesion] = useState(false)
  const [usuario, setUsuario] = useState({})
  const [respuesta, setRespuesta] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  function enviarLogin(email, password){
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
             setSesion(true)
             setUsuario(datos)
             setRespuesta(<Alert variant="success">{datos.mensaje}</Alert>)
         }else{
           setRespuesta(<Alert variant="danger">{datos.mensaje}</Alert>)
         }
       });
}



  return (
      <BrowserRouter>
      <Cabecera sesion={sesion} usuario = {usuario} />
        <Route exact path="/login">
          <Login enviarLogin= {enviarLogin} respuesta = {respuesta}/>
        </Route>
        <Route exact path="/registro">
          <Registro />
        </Route>
        <Route exact path="/usuario" >
          <Usuario usuario={usuario} />
        </Route>
      </BrowserRouter>
  );
}

export default App;
