import React, { Component } from "react";
import "./perfilDoctores.css";
import { MdStarBorder } from "react-icons/md";
import {Link} from 'react-router-dom';


class PerfilDoctores extends Component {
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
              <a href="#" className="estilos-a">Dermatología</a>
              <a href="#" className="estilos-a">Oftalmología</a>
              <a href="#" className="estilos-a">Odontología</a>
              <a href="#" className="estilos-a">Fisioterapia</a>
              <a href="#" className="estilos-a">Medicina general</a>
              <a href="#" className="estilos-a">Nutrición</a>
              <a href="#" className="estilos-a">Cardiología</a>
              <a href="#" className="estilos-a">Ginecología</a>
        </div>

        {this.state.doctores.map((person, index) => (
          <div className='containerDoc' key={index}>
            <div className='cardCards'>
              <div className='photoCards'>
                <img className="estilos-img" src={person.picture.large} alt='' />
              </div>
              <div className='detailsDCards'>
                <Link to='/doctores/:id' href='#' className='nameCards'>
                  {person.name.first}
                </Link>
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

export default PerfilDoctores;
