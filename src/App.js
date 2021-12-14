import React from "react";
import "./App.css";
import Reset from "./component/Reset";
import Registro from "./component/Registro";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path={"/reset"} element={<Reset />} />
            <Route exact path={"/registered"} element={<Registro />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
