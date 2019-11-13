import React from "react";
import { MdChevronRight } from "react-icons/md";
import "./hour.css";
import ModalPagoCita from "./modalPagoCita";
import pse from "../../src/assets/pse.png";
import visa from "../assets/visa.png";
import masterCard from "../assets/masterCard.png";
import nequi from "../assets/nequi.svg";

const Hour = ({ horaInicio, horaFinal, handleFunction, state }) => {
  return (
    <div className="scheduleHour">
      <div className="firstHour">{horaInicio}</div>
      <MdChevronRight className="iconHour" />
      <div className="firstHour">{horaFinal}</div>
      <button className="buttonHour" type="button" onClick={handleFunction}>
        {state.isOpen ? "Close" : "Confirmar"}
      </button>
      {state.isOpen && (
        <ModalPagoCita
          className="estiloModalPagoCita"
          handleOnClick={handleFunction}
        >
          <h1 className="tituloModal">Realiza tu pago en</h1>
          <div className="logoContainer">
            <img className="logoModal" src={pse} alt="Logo PSE" />
            <img
              className="logoModal visa"
              href="www.google.com"
              src={visa}
              alt="Logo Visa"
            />
            <img
              className="logoModal"
              src={masterCard}
              alt="Logo Master Card"
            />
            <img className="logoModal" src={nequi} alt="Logo Nequi" />
          </div>
        </ModalPagoCita>
      )}
    </div>
  );
};

export default Hour;
