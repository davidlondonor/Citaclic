import React from 'react';
import './developerCards.css';
import arturo from '../../assets/arturo.png';
import david from '../../assets/david.png';
import debo from '../../assets/debo.png';

const DeveloperCards = () => {
    return(
        <div className="container">
            <div className="cards" id="nosotros">
                <div className="card">
                    <img src={david} alt="foto-persona" width="150px" height="150px"></img>
                    <h4 className="name">David Londoño</h4>          
                    <p className="card-text">Desing & Developer</p>

                </div>
                <div className="card">
                    <img src={debo} alt="foto-persona" width="150px" height="150px"></img>
                    <h4 className="name">Débora Soto</h4>          
                    <p className="card-text">Developer</p>

                </div>
                <div className="card">
                    <img src={arturo} alt="foto-persona" width="150px" height="150px"></img>
                    <h4 className="name">Arturo Dangond</h4>          
                    <p className="card-text">Developer</p>

                </div>        
            </div>
        </div>
    )
}
export default DeveloperCards;