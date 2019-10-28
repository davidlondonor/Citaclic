import React from 'react';
import './checkIn.css';

const CheckIn = () => {
    return(
        <div className="container">
            <div className="checkIn">
                <form className="form">
                    <div className="name">
                        <label className="text-label">Nombre</label>
                        <input className="styles-input" type="text"></input>
                    </div>
                    <div className="lastName">
                        <label className="text-label">Apellido</label>
                        <input className="styles-input" type="text"></input>
                    </div>
                    <div className="email">
                        <label className="text-label">Correo electrónico</label>
                        <input className="styles-input" type="email"></input>
                    </div>
                    <div className="password">
                        <label className="text-label">Contraseña</label>
                        <input className="styles-input" type="password"></input>
                    </div>
                    <div className="start-boton">
                        <button className="boton" type="submit">Registrarme</button>
                    </div>
                </form>
            </div>
      </div>
    )
}
export default CheckIn;