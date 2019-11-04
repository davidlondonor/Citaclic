import React from 'react';
import './menu.css';

const Menu = () => {
    return (
        <div className="container">
            <div className="menu">
                <img className="img-logo" src="https://i.ibb.co/2Pzv5g8/logo.png" alt="logo" />
                <a href="#citaclic" className="nav">¿Por qué citaclic?</a>
                <a href="#nosotros" className="nav">Nosotros</a>
                <a href="#ayuda" className="nav">Ayuda</a>
            </div>
        </div>
    )
};
export default Menu;