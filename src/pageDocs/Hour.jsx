import React, { Component } from "react";
import { MdChevronRight } from "react-icons/md";
import "./hour.css";

class Hour extends Component {
  state = {};
  render() {
    return (
      <div className='scheduleHour'>
        <div className='firstHour'>Hora</div>
        <MdChevronRight className='iconHour' />
        <div className='firstHour'>Hora</div>
        <button className='butttonHour'>Confirmar</button>
      </div>
    );
  }
}

export default Hour;
