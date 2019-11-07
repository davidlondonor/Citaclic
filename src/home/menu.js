import React from 'react';
import './menu.css';


const Menu = () => {
    return (
        <div className="container">
            <div className="menu">
                <a href="#citaclic" className="nav">¿Por qué citaclic?</a>
                <a href="#nosotros" className="nav">Nosotros</a>
                <a href="#ayuda" className="nav">Ayuda</a>
                <img src="https://i.ibb.co/HTRrDNQ/Users-Exit-icon.png" className="img-salir" alt="salir"></img>
            </div>
        </div>
    )
};
export default Menu;