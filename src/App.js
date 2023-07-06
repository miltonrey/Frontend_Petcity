import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Contact from "./components/contact";
import Home from "./components/home";
import Informacion from "./components/informacion";
import Ingresar from "./components/ingresar";
import Petshops from "./components/petshops";
import RegistroPetshop from "./components/registroPetshop";
import RegistroUser from "./components/registroUser";
import Navbarpg from "./layouts/navbar";
import "./App.css";

export const LOCAL_URL = "https://petcitybackend.onrender.com/";
export const API_URL = "http://localhost:8081/";

function App() {
  const [grayscaleMode, setGrayscaleMode] = useState(false);

  const handleToggleGrayscale = () => {
    setGrayscaleMode(!grayscaleMode);
  };

  return (
    <div className={`App ${grayscaleMode ? "grayscale" : ""}`}>
      <BrowserRouter>
        <Navbarpg
          grayscaleMode={grayscaleMode}
          handleToggleGrayscale={handleToggleGrayscale}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/informacion/:id" element={<Informacion />} />
          <Route path="/ingresar" element={<Ingresar />} />
          <Route path="/petshops" element={<Petshops />} />
          <Route path="/registroPetshop" element={<RegistroPetshop />} />
          <Route path="/registroUser" element={<RegistroUser />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
