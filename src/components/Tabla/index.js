// import Swal from "sweetalert2";

function Tabla(props) {
  const { user } = props;

  return (
    <div className="row my-2 bg-primary">
      <div className="d-flex">
        <div>Hola</div>
        <div>{user.id}</div>
        <div>{user.nombres}</div>
      </div>
    </div>
  );
}
export default Tabla;
