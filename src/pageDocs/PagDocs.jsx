import React, { Component } from "react";
import { MdStarBorder } from "react-icons/md";
import "./pagDocs.css";
import Hour from "./Hour";
import Day from "./Day";

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
          <h3 className='avalibleDoc'>Disponibilidad</h3>
          <p className='priceDoc'>Valor de la consulta</p>
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
            {/* <Hour /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default PagDocs;
