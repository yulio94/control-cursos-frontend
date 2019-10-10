import React from "react";
import { Link } from "react-router-dom";
import BorrarCatedraticoModal from "../components/BorrarCatedraticoModal";

function CatedraticoItem(props) {
  return (
    <tr>
      <td>{props.catedratico.nombre}</td>
      <td>{props.catedratico.apellido}</td>
      <td>{props.catedratico.profesion}</td>
      <td>{props.catedratico.correo}</td>
      <td>{props.catedratico.dpi}</td>
      <td>
        <Link
          className="btn btn-primary"
          to={`/catedraticos/${props.catedratico.pk}/edit`}
        >
          Editar
        </Link>
        <button onClick={props.onOpenModal} className="btn btn-danger">
          Eliminar
        </button>
        <BorrarCatedraticoModal
          isOpen={props.modalIsOpen}
          onClose={props.onCloseModal}
          onDeleteCatedratico={props.onDeleteCatedratico}
        />
      </td>
    </tr>
  );
}

function ListCatedraticos(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Profesi&oacute;n</th>
          <th>Correo</th>
          <th>DPI</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.data ? (
          <>
            {props.data.map(catedratico => {
              return <CatedraticoItem catedratico={catedratico} />;
            })}
          </>
        ) : (
          <tr>
            <td>No hay catedraticos registrados</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ListCatedraticos;
