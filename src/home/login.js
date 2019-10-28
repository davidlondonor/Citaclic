import React from 'react';
import './login.css';

const Login = () => {
    return(
        <div className="container">
            <div className="login">
                <form className="form">
                    <div className="username">
                        <label className="text-label">Nombre de usuario o correo electrónico</label>
                        <input className="styles-input" type="text"></input>
                    </div>
                    <div className="password">
                        <label className="text-label" for="number">Contraseña</label>
                        <input className="styles-input" type="password"></input>
                        <a className="password-text" href="#">Olvidé mi contraseña</a>
                    </div>
                    <div className="start-boton">
                        <button className="boton" type="submit">Iniciar sesión</button>
                    </div>
                    <div className="login-text">
                        <a target="_blank" href="#checkIn">Regístrate</a>
                    </div>
                </form>
            </div>
      </div>
    )
}
export default Login;