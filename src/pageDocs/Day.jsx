import React, { Component } from "react";
import "./day.css";

class Day extends Component {
  state = {};
  render() {
    return (
      <div className='dayxDay'>
        <div className='dayxDayDetails'>Lun 23 Sep</div>
        <div className='dayxDayDetails'>Mar 24 Sep</div>
        <div className='dayxDayDetails'>Mie 25 Sep</div>
        <div className='dayxDayDetails'>Jue 26 Sep</div>
        <div className='dayxDayDetails'>Vie 27 Sep</div>
        <div className='dayxDayDetails'>Sáb 28 Sep</div>
        <div className='dayxDayDetails'>Dom 29 Sep</div>
      </div>
    );
  }
}

export default Day;
