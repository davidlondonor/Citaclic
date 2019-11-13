import React from "react";
import "./modalPagoCita.css";

function ModalPagoCita({ handleOnClick, children }) {
  return (
    <div className="modalContainer">
      <div className="modalContent">
        <div className="posicion">
          <button className="button buttonModalSalir" onClick={handleOnClick}>
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalPagoCita;
