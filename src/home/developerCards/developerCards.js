import React from 'react';
import './developerCards.css';

const DeveloperCards = () => {
    return(
        <div className="container">
            <div className="cards" id="nosotros">
                <div className="card">
                    <img src="https://i.ibb.co/2q1jvHL/foto-david.png" alt="foto-persona" width="150px" height="150px"></img>
                    <h4 className="name">David Londoño</h4>          
                    <p className="card-text">Desing & Developer</p>

                </div>
                <div className="card">
                    <img src="https://i.ibb.co/2Nm7FP2/debo.png" alt="foto-persona" width="150px" height="150px"></img>
                    <h4 className="name">Débora Soto</h4>          
                    <p className="card-text">Developer</p>

                </div>
                <div className="card">
                    <img src="https://i.ibb.co/brTZKtq/Captura-de-pantalla-de-2019-10-22-14-47-52.png" alt="foto-persona" width="150px" height="150px"></img>
                    <h4 className="name">Arturo Dangond</h4>          
                    <p className="card-text">Developer</p>

                </div>        
            </div>
        </div>
    )
}
export default DeveloperCards;