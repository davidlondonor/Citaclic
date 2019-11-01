import React, { Component } from "react";
import { MdStarBorder } from "react-icons/md";
import "./pagDocs.css";

class PagDocs extends Component {
  //   state = {};
  render() {
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
          </div>
        </div>

        <div className='appointment'>
          <p className='priceDoc'>Valor de la consulta</p>
          <h3 className='avalibleDoc'>Disponibilidad</h3>
          <p>Fechas</p>
          <div>
            <p className='hourDoc'>8:30</p>
            <p className='hourDoc'>9:00</p>
            <p className='hourDoc'>10:00</p>
            <p className='hourDoc'>11:00</p>
            <p className='hourDoc'>12:00</p>
            <p className='hourDoc'>13:00</p>
            <p className='hourDoc'>14:00</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PagDocs;
