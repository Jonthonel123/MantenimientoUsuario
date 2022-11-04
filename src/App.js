import { useState, useEffect } from "react";
import { getUserMantenimiento } from "./services";
import { Formulario, Tabla } from "./components";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  async function getUsuario() {
    const usuario = await getUserMantenimiento();
    console.log(usuario);
    setUser(usuario);
  }

  useEffect(() => {
    getUsuario();
  }, []);

  return (
    <div className="container">
      <div className="row my-5">
        <h2>Mantenimiento de Usuarios</h2>
      </div>
      <Formulario />
      <div className="row my-4">
        <div className="d-flex">
          <div className="col-md-1">#</div>
          <div className="col-md-2">Nombres</div>
          <div className="col-md-2">Apellidos</div>
          <div className="col-md-2">Correo</div>
          <div className="col-md-1">Edad</div>
          <div className="col-md-1">Sexo</div>
          <div className="col-md-1">Cargo</div>
          <div className="col-md-2">Direccion</div>
        </div>
      </div>
      <Tabla user={user} />
    </div>
  );
}

export default App;
