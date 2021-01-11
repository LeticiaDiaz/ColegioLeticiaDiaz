import "./App.css";
import Registro from "./Registro";
import Cabecera from "./Cabecera"
import Login from "./Login"

import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [sesion, setSesion] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);


  return (
      <BrowserRouter>
      <Cabecera sesion={sesion} />
        <Route exact path="/login">
          <Login setSesion={setSesion}/>
        </Route>
        <Route exact path="/registro">
          <Registro />
        </Route>
      </BrowserRouter>
  );
}

export default App;
