import React, { Component } from "react";
import "./perfilDoctores.css";
import { MdStarBorder } from "react-icons/md";

class perfilDoctores extends Component {
  state = {
    doctores: []
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=12")
      .then(response => response.json())
      .then(data => this.setState({ doctores: data.results }))
      .catch(error => {
        alert("Hubo un pequeño error", error);
      });
  }
  render() {
    return (
      <div className="contenedor-general">
        <div className="categorias">
              <a className="estilos-a">Dermatología</a>
              <a className="estilos-a">Oftalmología</a>
              <a className="estilos-a">Odontología</a>
              <a className="estilos-a">Fisioterapia</a>
              <a className="estilos-a">Medicina general</a>
              <a className="estilos-a">Nutrición</a>
              <a className="estilos-a">Cardiología</a>
              <a className="estilos-a">Ginecología</a>
        </div>

        {this.state.doctores.map((person, index) => (
          <div className='containerDoc' key={index}>
            <div className='cardCards'>
              <div className='photoCards'>
                <img className="estilos-img" src={person.picture.large} alt='' />
              </div>
              <div className='detailsDCards'>
                <a href='#' className='nameCards'>
                  {person.name.first}
                </a>
                <h6 className='profesionalCards'>{person.dob.gender}</h6>
                <h6 className='locatedCards'>{person.location.city}</h6>
                <p className='starCards'>
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                  <MdStarBorder />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default perfilDoctores;
