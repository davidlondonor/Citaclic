import React from "react";
import "./modalPagoCita.css";

function ModalPagoCita({ handleOnClick, children }) {
  return (
    <div className='modalContainer'>
      <div className='modalContent'>
        <div className='posicion'>
          <button className='button' onClick={handleOnClick}>
            Cerrar
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalPagoCita;
