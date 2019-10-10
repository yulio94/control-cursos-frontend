import React from "react";
import Modal from "./Modal";
import "./styles/BorrarCatedraticoModal.css";

function BorrarCatedraticoModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="borrarCatedraticoModal">
        <h1>Desea eliminar?</h1>
        <p>Esta seguro de eliminar este cadratico</p>
        <div>
          <button
            onClick={props.onDeleteCatedratico}
            className="btn btn-danger mr-4"
          >
            Borrar
          </button>
          <button onClick={props.onClose} className="btn btn-primary">
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default BorrarCatedraticoModal;
