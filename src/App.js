import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Contact from "./components/contact";
import Home from "./components/home";
import Informacion from "./components/informacion";
import Ingresar from "./components/ingresar";
import Petshops from "./components/petshops";
import RegistroPetshop from "./components/registroPetshop";
import RegistroUser from "./components/registroUser";
import Navbarpg from "./layouts/navbar";
export const LOCAL_URL = "http://localhost:8081/";
export const API_URL = "http://localhost:8081/";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbarpg />}>
            <Route index element={<Home />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="informacion" element={<Informacion />}></Route>
            <Route path="ingresar" element={<Ingresar />}></Route>
            <Route path="petshops" element={<Petshops />}></Route>
            <Route path="registroPetshop" element={<RegistroPetshop />}></Route>
            <Route path="registroUser" element={<RegistroUser />}></Route>

            <Route
              path="*"
              element={<Navigate replace to="/"></Navigate>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
