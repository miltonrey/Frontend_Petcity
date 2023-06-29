import Footer from "../layouts/footer";
import React, { useState } from "react";
import "../assets/css/login.css";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
import { API_URL } from "../App.js";
import { LOCAL_URL } from "../App.js";
const RegistroUsers = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [resultado, setResultado] = useState("");
  const [validacionCorrecta, setValidacionCorrecta] = useState(false);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
  };

  const handleResultadoChange = (event) => {
    setResultado(event.target.value);
  };

  const handleVerificarClick = () => {
    const resultadoSuma = num1 + num2;
    if (parseInt(resultado) === resultadoSuma) {
      setValidacionCorrecta(true);
    } else {
      setValidacionCorrecta(false);
      swal({
        title: "Test",
        text: "Suma incorrecta",
        icon: "warning",
        button: "Aceptar",
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Crear el objeto de datos para enviar a la API
    const datosUsuario = {
      email: correo,
      password: contrasena,
      typeUser: "customer",
      name: nombre,
      lastname: apellido,
    };
    console.log(datosUsuario);

    // Enviar los datos a la API utilizando fetch
    fetch(LOCAL_URL + "user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosUsuario),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error en la respuesta de la API (${response.status} ${response.statusText})`
          );
        }
        return response.json();
      })
      .then((error) => {
        //console.log("Respuesta de la API:", data);
        if (error.message == "El usuario ha sido registrado con éxito.") {
          swal({
            title: "Registro exitoso",
            text: "puede iniciar sesión con las credenciales creadas",
            icon: "success",
            button: "Aceptar",
          });
          setNombre("");
          setApellido("");
          setCorreo("");
          setContrasena("");
          setResultado("");
          setValidacionCorrecta(false);
        } else {
          swal({
            title: "Error en el registro",
            text: " " + error.message,
            icon: "warning",
            button: "Aceptar",
          });
        }
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud a la API", error);
      });
  };
  return (
    <div className="regis">
      <Helmet>
        <title>PetCity</title>
        <meta
          name="description"
          content="Registra nuevos usuarios en Mi Sitio Web y accede a nuestros servicios."
        />
        <meta
          name="keywords"
          content="registro, usuarios, sitio web, petcity"
        />
      </Helmet>

      <div className="wrapperR">
        <form className="Regis" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              value={nombre}
              onChange={handleNombreChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              value={apellido}
              onChange={handleApellidoChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">
              Correo
            </label>
            <input
              type="email"
              className="form-control"
              id="correo"
              value={correo}
              onChange={handleCorreoChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="contrasena"
              value={contrasena}
              onChange={handleContrasenaChange}
              required
            />
          </div>
          <div className="mb-3">
            <p>
              Por favor, ingrese el resultado de la siguiente operación:
              <span className="mx-2">
                {num1} + {num2} = ?
              </span>
            </p>
            <input
              type="number"
              className="form-control"
              id="resultado"
              value={resultado}
              onChange={handleResultadoChange}
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-primary mb-3"
            onClick={handleVerificarClick}
          >
            Verificar
          </button>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="validacion"
              disabled
              checked={validacionCorrecta}
            />
            <label className="form-check-label" htmlFor="validacion">
              Validación correcta
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!validacionCorrecta}
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default RegistroUsers;
