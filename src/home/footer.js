import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <div className="container">
            <footer className="footer">
                <div className="links">
                    <a className="text-footer">Términos y condiciones</a>
                    <a className="text-footer">Políticas de privacidad</a>
                    <a className="text-footer">Sobre nosotros</a>
                    <a className="text-footer">Contáctanos</a>
                </div>
                <div className="copyright">
                    <p className="text-copyright">All right reserved 2019</p>
                    <p className="text-copyright">Macawlabs SAS</p>
                </div>
                <div className="social-media">
                    <a target="_blank" href="https://www.facebook.com/cita.clic.5"><img src="https://i.ibb.co/Vj1tHk9/face.png" alt="icono-facebook" width="25px" height="25px"></img></a>
                    <a target="_blank" href="https://twitter.com/Citaclic1"><img src="https://i.ibb.co/jD95tTd/twt.png" alt="icono-twitter" width="20px" height="20px"></img></a>
                    <a target="_blank" href="https://www.instagram.com/?hl=es-la"><img src="https://i.ibb.co/pPggCKC/insta.png" alt="icono-instagram" width="20px" height="20px"></img></a>
                </div>
            </footer>
      </div>
    )
}
export default Footer;