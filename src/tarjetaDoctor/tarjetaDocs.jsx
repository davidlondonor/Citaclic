import React from "react";
import { MdStarBorder } from "react-icons/md";
import "./tarjetaDocs.css";
import Hour from "./Hour";
import Day from "./Day";

const TarjetaDocs = () => {
  return (
    <div className='containerDoc'>
      <div className='containerappointment'>
        <div className='cardCardsDoc'>
          <div className='photoCardsDoc'>
            <img src='https://i.ibb.co/gT0S0KG/foto-4.png' alt=''></img>
          </div>
          <div className='detailsDCards'>
            <h4 className='nameCardsDoc'>Manuela Arango</h4>
            <h6 className='profesionalCardsDoc'>Dermartóloga</h6>
            <h6 className='locatedCardsDoc'>Poblado</h6>
            <div>
              <MdStarBorder className='starCardsDoc' />
              <MdStarBorder className='starCardsDoc' />
              <MdStarBorder className='starCardsDoc' />
              <MdStarBorder className='starCardsDoc' />
              <MdStarBorder className='starCardsDoc' />
            </div>
          </div>
          <div className="aviso-doctor">
            <p className="text-aviso">Una vez elijas el día y la hora para tu cita, serás 
            redireccionado a la plataforma de pagos, 
            donde podrás seleccionar el método que más te convenga. </p>
            <p className="text-aviso"> Todos los profesionales han sido validados con anterioridad para asegurarnos 
            que cuenten con documentos que certifiquen sus conocimientos y presten servicios 
            en un lugar acorde al servicio que ofrecen.</p>
          </div>
        </div>
      </div>

      <div className='appointment'>
        <p className='priceDoc'>Valor de la consulta</p>
        <h3 className="value">120.000 COP</h3>
        <h3 className='avalibleDoc'>Disponibilidad</h3>
        <Day />
        <div className='hourDocs'>
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
          <Hour />
        </div>
      </div>
    </div>
  );
};

export default TarjetaDocs;
