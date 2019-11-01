import React from 'react';
import './SignUP.css';

const SignUP = () => {
    return(
        <div className="container container-signup">
            <img className="img-signup" src="https://place-hold.it/751x660"></img>
               <div className="right-container"> 
                <div className="SignUP">
                    <form className="form">
                        <div className="name">
                            <label className="text-label">Nombre</label>
                            <input className="stylesInput" type="text"></input>
                        </div>
                        <div className="lastName">
                            <label className="text-label">Apellido</label>
                            <input className="stylesInput" type="text"></input>
                        </div>
                        <div className="email">
                            <label className="text-label">Correo electrónico</label>
                            <input className="stylesInput" type="email"></input>
                        </div>
                        <div className="password">
                            <label className="text-label">Contraseña</label>
                            <input className="stylesInput" type="password"></input>
                        </div>
                        <div className="start-boton">
                            <button className="boton" type="submit">Registrarme</button>
                        </div>
                    </form>
                </div>
             </div>  
      </div>
    )
}
export default SignUP;