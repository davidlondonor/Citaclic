import {Link} from 'react-router-dom';
import React from 'react';
import './login.css';
import Modal from 'react-modal';

const stylesModal = {
    content: {
        width: '280px',
        height: '240px',
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
        isModalOpen: false,
        userName: "",
        isDirty: false,
        isUserNameEmpty: false,
        password: "",
        isPasswordValid: false,
        email: "",
        isEmailValid: false
    }
    handleEmailChange= (event) => {
        const emailValue= event.target.value;

        const validateEmail = (email) => {
            return /\S+@\S+\.\S+/.test(email)
        };
        this.setState({
            isDirty: true,
            isEmailValid: validateEmail(emailValue),
            email: emailValue
        })
    }

    handleSubmitBoton = (event) => {
        event.preventDefault();
    }
    handleUserNameChange = (event) => {
        const userNameValue = event.target.value;
        this.setState({
            isDirty: true,
            isUserNameEmpty: userNameValue === "",
            userName: userNameValue
        })
    }
    handlePassword = (event) => {
        const passwordValue = event.target.value;
        this.setState({
            isDirty: true,
            isPasswordValid: passwordValue === "",
            password: passwordValue
        })
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
    handleSubmit = () => {
        this.props.history.push('/perfilDoctores');
    }


    render(){
        return(
        <div className="container">
            <div className="login">
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="username">
                        <label htmlFor="username" className="text-label">Nombre de usuario o correo electrónico</label>
                        <input 
                            className="styles-input"
                            type="text"
                            autoFocus
                            id="username"
                            value={this.state.userName}
                            onChange={this.handleUserNameChange}
                            style={this.state.isDirty && this.state.isUserNameEmpty ? {border: '1px solid red'}: {}}
                        />
                        {this.state.isDirty && this.state.isUserNameEmpty ? 
                            (<p className="campoVacio">El campo no puede estar vacío</p> ): null}
                    </div>
                    <div className="password">
                        <label htmlFor="password" className="text-label">Contraseña</label>
                        <input
                            className="styles-input" 
                            type="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handlePassword}
                            style={this.state.isDirty && this.state.isPasswordValid ? {border: '1px solid red'}: {}}
                            />
                        {this.state.isDirty && this.state.isPasswordValid ? 
                        (<p className="campoVacio">El campo no puede estar vacío</p> ): null}

                        <a href="#" className="password-text" onClick={this.openModal}>Olvidé mi contraseña</a>

                    </div>
                    <div className="start-boton">
                        <button 
                            disabled={this.state.userName == "" || this.state.password == ""}
                            className="boton" 
                            type="submit"> Iniciar sesión
                        </button>
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
                        <form htmlFor="email" onSubmit={this.handleSubmitBoton}>
                            <input 
                            autoFocus 
                            className="input-modal" 
                            type="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            style={this.state.isDirty && !this.state.isEmailValid ? { border: '1px solid red' } : {}}
                            />
                            {this.state.isDirty && !this.state.isEmailValid ?
                            (<p className="campoVacio">Debe ingresar un correo electrónico válido</p>): null}
                        </form>    
                        <button type="submit" onClick={this.closeModal} className="boton-volver">Volver</button>
                        <button 
                            disabled={!this.state.isEmailValid}
                            type="submit" 
                            className="boton-confirmar" 
                            onClick={this.informationSend}>Enviar
                        </button>               
                    </div>
                </div>
        </div>
            </Modal>
      </div>
        )
    }
}
export default Login;