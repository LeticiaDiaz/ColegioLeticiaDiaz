import "./App.css";
import Login from "./Login";

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
        <Route exact path="/registro/alumno">
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
