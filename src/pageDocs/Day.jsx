import React, { Component } from "react";
import "./day.css";

class Day extends Component {
  state = {};
  render() {
    return (
      <div className='dayxDay'>
        <a href='' className='dayxDayDetails'>
          Lun 23 Sep
        </a>
        <a href='' className='dayxDayDetails'>
          Mar 24 Sep
        </a>
        <a href='' className='dayxDayDetails'>
          Mar 24 Sep
        </a>
        <a href='' className='dayxDayDetails'>
          Mie 25 Sep
        </a>
        <a href='' className='dayxDayDetails'>
          Jue 26 Sep
        </a>
        <a href='' className='dayxDayDetails'>
          Vie 27 Sep
        </a>
        <a href='' className='dayxDayDetails'>
          Sáb 28 Sep
        </a>
        <a href='' className='dayxDayDetails'>
          Dom 29 Sep
        </a>
      </div>
    );
  }
}

export default Day;
