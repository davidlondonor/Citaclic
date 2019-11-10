import React from 'react';
import './footer.css';
import facebook from '../assets/face.png';
import twitter from '../assets/twt.png';
import instagram from '../assets/insta.png';

const Footer = () => {
    return(
        <div className="container">
            <footer className="footer">
                <div className="links">
                    <a className="text-footer">Términos y condiciones</a>
                    <a className="text-footer">Políticas de privacidad</a>
                    <a className="text-footer">Contáctanos</a>
                </div>
                <div className="copyright">
                    <p className="text-copyright">All right reserved 2019</p>
                    <p className="text-copyright">Macawlabs SAS</p>
                </div>
                <div className="social-media">
                    <p className="text-socialMedia">Encuéntranos en:</p>
                    <a target="_blank" href="https://www.facebook.com/cita.clic.5"><img src={facebook} alt="icono-facebook" width="25px" height="25px"></img></a>
                    <a target="_blank" href="https://twitter.com/Citaclic1"><img src={twitter} alt="icono-twitter" width="20px" height="20px"></img></a>
                    <a target="_blank" href="https://www.instagram.com/?hl=es-la"><img src={instagram} alt="icono-instagram" width="20px" height="20px"></img></a>
                </div>
            </footer>
      </div>
    )
}
export default Footer;