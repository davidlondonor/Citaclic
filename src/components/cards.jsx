import React, { Component } from "react";
import "./cards.css";
import { MdStarBorder } from "react-icons/md";

class Cards extends Component {
  state = {};
  render() {
    return (
      <div className='container cardDoc'>
        <div className='photoDoc'>
          <img src='https://i.ibb.co/gT0S0KG/foto-4.png' alt=''></img>
        </div>
        <div className='detailsDoc'>
          <h4 className='nameDoc'>Nombre del Doc</h4>
          <h6 className='profesionalDoc'>Profesion Doc</h6>
          <h6 className='locatedDoc'>Ubicacion</h6>
          <p className='starDoc'>
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
