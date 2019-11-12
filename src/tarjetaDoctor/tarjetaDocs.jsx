import React, { Component } from "react";
import { MdStarBorder } from "react-icons/md";
import "./tarjetaDocs.css";
import Hour from "./Hour";
import Day from "./Day";

class TarjetaDoc extends Component {
  state = { isOpen: false };

  handleOnClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <div className='containerDoc'>
        <div className='containerappointment'>
          <div className='cardCardsDoc'>
            <div className='photoCardsDoc'>
              <img
                src='https://i.ibb.co/gT0S0KG/foto-4.png'
                alt='un texto'
              ></img>
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
            {/* <PerfilDoctores /> */}
          </div>
        </div>

        <div className='appointment'>
          <h3 className='avalibleDoc'>Disponibilidad</h3>
          <p className='priceDoc'>Valor de la consulta</p>
          <Day />
          <div className='hourDocs'>
            <Hour
              state={this.state}
              handleFunction={this.handleOnClick}
              horaInicio={"8:30"}
              horaFinal={"9:25"}
            />
            <Hour
              state={this.state}
              handleFunction={this.handleOnClick}
              horaInicio={"9:30"}
              horaFinal={"10:25"}
            />
            <Hour
              state={this.state}
              handleFunction={this.handleOnClick}
              horaInicio={"10:30"}
              horaFinal={"11:25"}
            />
            <Hour
              state={this.state}
              handleFunction={this.handleOnClick}
              horaInicio={"11:30"}
              horaFinal={"12:25"}
            />
            <Hour
              state={this.state}
              handleFunction={this.handleOnClick}
              horaInicio={"1:30"}
              horaFinal={"2:25"}
            />
            <Hour
              state={this.state}
              handleFunction={this.handleOnClick}
              horaInicio={"3:30"}
              horaFinal={"4:25"}
            />
            <Hour
              state={this.state}
              handleFunction={this.handleOnClick}
              horaInicio={"4:30"}
              horaFinal={"5:25"}
            />
            <Hour
              state={this.state}
              handleFunction={this.handleOnClick}
              horaInicio={"5:30"}
              horaFinal={"6:25"}
            />
            <Hour
              state={this.state}
              handleFunction={this.handleOnClick}
              horaInicio={"7:30"}
              horaFinal={"8:25"}
            />
            <Hour
              state={this.state}
              handleFunction={this.handleOnClick}
              horaInicio={"8:30"}
              horaFinal={"9:25"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TarjetaDoc;
