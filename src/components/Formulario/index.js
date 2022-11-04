function Formulario() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="nombreInput" className="form-label">
              Nombres:
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreInput"
              placeholder="Ingrese sus nombres"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">
              Correo:
            </label>
            <input
              type="text"
              className="form-control"
              id="correo"
              placeholder="Ingrese su correo"
            />
          </div>
          {/* <div className="mb-3">
            <label htmlFor="sexo" className="form-label">
              Sexo:
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Seleccione una opcion</option>
              <option defaultValue={1}>Masculino</option>
              <option defaultValue={2}>Femenino</option>
              <option defaultValue={3}>Otros</option>
            </select>
          </div> */}
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">
              Dirección:
            </label>
            <input
              type="text"
              className="form-control"
              id="direccion"
              placeholder="Ingrese su dirección"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="apellidoInput" className="form-label">
              Apellidos:
            </label>
            <input
              type="text"
              className="form-control"
              id="apellidoInput"
              placeholder="Ingrese sus Apellidos"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="edad" className="form-label">
              Edad:
            </label>
            <input type="number" className="form-control" id="edad" />
          </div>
          <div className="mb-3">
            <label htmlFor="cargo" className="form-label">
              Cargo:
            </label>
            <input
              type="text"
              className="form-control"
              id="cargo"
              placeholder="Ingrese su cargo"
            />
          </div>
        </div>
      </div>
      <div className="row mt-4 ">
        <div className="col-md-6"></div>
        <div className="col-md-6 d-flex justify-content-end">
          <button className="btn btn-primary w-50">Ingresar</button>
        </div>
      </div>
    </div>
  );
}
export default Formulario;
