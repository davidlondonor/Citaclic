import {Link} from 'react-router-dom';
import React from 'react';
import './login.css';
import Modal from 'react-modal';

const stylesModal = {
    content: {
        width: '280px',
        height: '190px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: 0
    },
    overlay: {
        backgroundColor: 'rgba(72,72,72,0.9)'
    }
};
Modal.setAppElement('#root');
class Login extends React.Component{
    state = {
        isModalOpen: false
    }

    openModal = () => {
        this.setState({
            isModalOpen: true
        })
    }
    closeModal = () => {
        this.setState({
            isModalOpen: false 
        })
    }
    informationSend = () =>{
        alert('El enlace ha sido enviado');
    }

    render(){
        return(
        <div className="container">
            <div className="login">
                <form className="form">
                    <div className="username">
                        <label className="text-label">Nombre de usuario o correo electrónico</label>
                        <input 
                            className="styles-input"
                        />
                    </div>
                    <div className="password">
                        <label className="text-label" htmlFor="number">Contraseña</label>
                        <input className="styles-input" type="password"></input>
                        <a href="#" className="password-text" onClick={this.openModal}>Olvidé mi contraseña</a>

                    </div>
                    <div className="start-boton">
                        <button className="boton" type="submit">Iniciar sesión</button>
                    </div>
                    <div className="login-text">
                        <Link to='/registro'>Regístrate</Link>
                    </div>
                </form>
            </div>
            <Modal
                isOpen={this.state.isModalOpen}
                onRequestClose={this.closeModal}
                style={stylesModal}
            >
            <div className="container-modal">
                <div className="modal">
                    <div className="inside-modal">
                        <p className="text-modal">Ingresa el correo electrónico asociado a tu cuenta. Te enviaremos un enlace para actualizar tu contraseña.</p>
                        <p className="text-modal-email">Correo electrónico:</p>
                        <form>
                            <input autoFocus className="input-modal" type="email"></input>
                        </form>    
                        <button type="submit" onClick={this.closeModal} className="boton-volver">cerrar</button>
                        <button type="submit" className="boton-confirmar" onClick={this.informationSend}>confirmar</button>               
                    </div>
                </div>
        </div>
            </Modal>
      </div>
        )
    }
}
export default Login;