import React, { Component } from "react";
import "./day.css";

class Day extends Component {
  state = { show: true };

  togggleShow = () => {
    this.setState({ show: false });
  };

  render() {
    if (this.state.show) {
      return (
        <div className='dayxDay' id='Hello'>
          {/* <h3>{this.props.subtitle}</h3> */}
          {this.props.mytext}
          <button mytext='Dia 1' subtitle='Prueba 5' onClick={this.togggleShow}>
            Dia 1
          </button>
          <button mytext='Dia 2' subtitle='Prueba 5' onClick={this.togggleShow}>
            Dia 2
          </button>
          <button mytext='Dia 3' subtitle='Prueba 5' onClick={this.togggleShow}>
            Dia 3
          </button>
          <button mytext='Dia 4' subtitle='Prueba 5' onClick={this.togggleShow}>
            Dia 4
          </button>
          <button mytext='Dia 5' subtitle='Prueba 5' onClick={this.togggleShow}>
            Dia 5
          </button>
          <button mytext='Dia 6' subtitle='Prueba 5' onClick={this.togggleShow}>
            Dia 6
          </button>
        </div>
      );
    } else {
      return <h2>Agenda no disponible</h2>;
    }
  }
}

export default Day;
