import React from "react";
import { MdChevronRight } from "react-icons/md";
import "./hour.css";
import ModalPagoCita from "./ModalPagoCita";

const Hour = ({ horaInicio, horaFinal, handleFunction, state }) => {
  return (
    <div className='scheduleHour'>
      <div className='firstHour'>{horaInicio}</div>
      <MdChevronRight className='iconHour' />
      <div className='firstHour'>{horaFinal}</div>
      <button className='buttonHour' type='button' onClick={handleFunction}>
        {state.isOpen ? "Volver" : "Confirmar"}
      </button>
      {state.isOpen && (
        <ModalPagoCita handleOnClick={handleFunction}>
          <h1>Ventana de Pagos</h1>
        </ModalPagoCita>
      )}
    </div>
  );
};

export default Hour;
