import Footer from "../layouts/footer";
import "../assets/css/login.css";
import "../assets/script.js";
import { Helmet } from "react-helmet";
const Ingresar = () => {
  return (
    <div className="Loog">
      <Helmet>
        <title>PetCity</title>
        <meta
          name="description"
          content="Inicio de sesión de usuarios"
        />
        <meta
          name="keywords"
          content="login,, usuarios sitio web, petcity"
        />
      </Helmet>
      <div className="wrapper">
        <form id="miFormulario" className="login" action="">
          <p className="title">Inicio de Sesión</p>
          <input
            type="text"
            aria-label="Digita tu corrego"
            placeholder="Correo"
            autoFocus
            required
          />
          <i className="fa fa-user"></i>
          <input
            type="password"
            aria-label="Digita tu contraseña"
            placeholder="Contraseña"
            id="contrasena"
            name="contrasena"
            required
          />
          <i className="fa fa-key"></i>
          <button>
            <i className="spinner"></i>
            <span className="state">Ingresar</span>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Ingresar;
