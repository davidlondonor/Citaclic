import React, { Component } from "react";
import "./cards.css";
import { MdStarBorder } from "react-icons/md";

class Cards extends Component {
  state = {};
  render() {
    return (
      <div className='containerDoc'>
        <div className='cardCards'></div>
        <div className='photoCards'>
          <img src='https://i.ibb.co/gT0S0KG/foto-4.png' alt=''></img>
        </div>
        <div className='detailsDCards'>
          <h4 className='nameCards'>Nombre del Doc</h4>
          <h6 className='profesionalCards'>Profesion Doc</h6>
          <h6 className='locatedCards'>Ubicacion</h6>
          <p className='starCards'>
            <MdStarBorder />
            <MdStarBorder />
            <MdStarBorder />
            <MdStarBorder />
            <MdStarBorder />
          </p>
        </div>

        <div className='cardCards'></div>
        <div className='photoCards'>
          <img src='https://i.ibb.co/gT0S0KG/foto-4.png' alt=''></img>
        </div>
        <div className='detailsDCards'>
          <h4 className='nameCards'>Nombre del Doc</h4>
          <h6 className='profesionalCards'>Profesion Doc</h6>
          <h6 className='locatedCards'>Ubicacion</h6>
          <p className='starCards'>
            <MdStarBorder />
            <MdStarBorder />
            <MdStarBorder />
            <MdStarBorder />
            <MdStarBorder />
          </p>
        </div>
      </div>
    );
  }
}

export default Cards;

// Este le va dar el sentido y pasa a la pag dr
