import React from 'react';
import './help.css'

const Help = () => {
    return(
        <div className="container">
            <div id="ayuda" className="help">
                <div className="list-help">
                    <h4 className="textTitle">Asistencia Citaclic</h4>
                </div>
                <div className="information texth4">
                    <h4 className="textTitle">información general</h4>
                    <ul>
                        <li className="text-help">
                            <a>¿Quiénes somos?</a>
                        </li>
                        <li className="text-help">
                            <a>Novedades</a>
                        </li>
                        <li className="text-help">
                            <a>Experiencia Citaclic</a>
                        </li>
                    </ul>                    
                </div>
            </div>
        </div>
    )
}
export default Help;