import "./App.css";
import Registro from "./Registro";

import { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Route exact path="/registro">
          <Registro />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
