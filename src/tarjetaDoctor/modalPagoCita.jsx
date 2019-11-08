import React from "react";
import "./modalPagoCita.css";

function ModalPagoCita(open, handleClose, children) {
  return (
    <div className=''>
      <div>
        <button className='button' onClick={handleClose}>
          Cerrar
        </button>
        {children}
      </div>
    </div>
  );
}

export default ModalPagoCita;
