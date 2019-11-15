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
          <a href="#" className="estilos-dias" mytext='Dia 1' subtitle='Prueba 5' onClick={this.togggleShow}>
            Lunes
          </a>
          <a href="#" className="estilos-dias" mytext='Dia 2' subtitle='Prueba 5' onClick={this.togggleShow}>
            Martes
          </a>
          <a href="#" className="estilos-dias" mytext='Dia 3' subtitle='Prueba 5' onClick={this.togggleShow}>
            Miércoles
          </a>
          <a href="#" className="estilos-dias" mytext='Dia 4' subtitle='Prueba 5' onClick={this.togggleShow}>
            Jueves
          </a>
          <a href="#" className="estilos-dias" mytext='Dia 5' subtitle='Prueba 5' onClick={this.togggleShow}>
            Viernes
          </a>
          <a href="#" className="estilos-dias" mytext='Dia 6' subtitle='Prueba 5' onClick={this.togggleShow}>
            Sábado
          </a>
        </div>
      );
    } else {
      return <h2>Agenda no disponible</h2>;
    }
  }
}

export default Day;
