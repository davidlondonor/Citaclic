import React from 'react';
import './SignUP.css';

class SignUP extends React.Component{
    state={
        isDirty: false,
        name: "",
        isNameEmpty: false,
        lastName: "",
        isLastNameEmpty: false,
        email: "",
        isEmailValid: false,
        password: "",
        confirmPassword: "",
        isPasswordValid: false
    };

    handleSubmit = (event) => {
        event.preventDefault();
    }
    handleNameChange = (event) => {
        const nameValue = event.target.value;
        this.setState({
            isDirty: true,
            isNameEmpty: nameValue === "",
            name: nameValue
        })
    }
    handleLastNameChange = (event) => {
        const lastNameValue = event.target.value;
        this.setState({
            isDirty: true,
            isLastNameEmpty: lastNameValue === "",
            lastName: lastNameValue
        })
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
    handlePassword = (event) => {
        const passwordValue = event.target.value;
        this.setState({
            isDirty: true, 
            password: passwordValue, 
            isPasswordValid: passwordValue === this.state.confirmPassword
        })
    }  
    handlePasswordConfirm = (event) => {
        const passwordConfirmValue = event.target.value;
        this.setState({
            isDirty: true,
            confirmPassword: passwordConfirmValue,
            isPasswordValid: passwordConfirmValue === this.state.password
        })
    }  
    render(){
        return(
        <div className="container container-signup">             
            <img className="img-signup" src="https://i.ibb.co/C8zZyZ8/doctor-vestido-con-una-bata-blanca-y-una-corbata-azul-sosteniendo-una-carpeta-0.jpg"></img>
               <div className="right-container"> 
                <div className="SignUP">
                    <form onSubmit={this.handleSubmit} className="form" autoComplete="off">
                        <div className="name">
                            <label htmlFor="nombre" className="text-label">Nombre</label>
                            <input
                                className="stylesInput" 
                                type="text"
                                autoFocus
                                id="nombre"
                                value={this.state.name}
                                onChange={this.handleNameChange}
                                style={this.state.isDirty && this.state.isNameEmpty ? { border: '1px solid red' } : {}}
                             />
                            {this.state.isDirty && this.state.isNameEmpty ? 
                            (<p className="campoVacio">El campo no puede estar vacío</p> ): null}
                        </div>
                        <div className="lastName">
                            <label htmlFor="apellido" className="text-label">Apellido</label>
                            <input 
                                className="stylesInput" 
                                type="text"
                                id="apellido"
                                value={this.state.lastName}
                                onChange={this.handleLastNameChange}
                                style={this.state.isDirty && this.state.isLastNameEmpty ? { border: '1px solid red' } : {}}
                            />
                            {this.state.isDirty && this.state.isLastNameEmpty ?
                            (<p className="campoVacio">El campo no puede estar vacío</p>): null}
                        </div>
                        <div className="email">
                            <label htmlFor="email" className="text-label">Correo electrónico</label>
                            <input 
                                className="stylesInput" 
                                type="text"
                                id="email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                style={this.state.isDirty && this.state.email !== '' && !this.state.isEmailValid ? { border: '1px solid red' } : {}}
                            />
                                {this.state.isDirty && this.state.email !== '' && !this.state.isEmailValid ?
                            (<p className="campoVacio">Debe ingresar un correo electrónico válido</p>): null}
                        </div>
                        <div className="password">
                            <label htmlFor="password" className="text-label">Contraseña</label>
                            <input
                                className="stylesInput contraseña-margin" 
                                type="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.handlePassword}
                            />  
                            <label htmlFor="passwordConfirm" className="text-label">Confirmar contraseña</label>
                            <input 
                                className="stylesInput contraseña-margin" 
                                type="password"
                                id="passwordConfirm"
                                value={this.state.confirmPassword}
                                onChange={this.handlePasswordConfirm}
                                style={this.state.isDirty && this.state.isPasswordValid ? { border: '1px solid red' } : {}}
                            />
                            {this.state.isDirty && !this.state.isPasswordValid ?
                                (<p className="campoVacio">La contraseña no coincide</p>): null}
                        </div>
                        <button 
                            disabled={
                                this.state.isNameEmpty ||
                                this.state.isLastNameEmpty ||
                                !this.state.isEmailValid ||
                                !this.state.isPasswordValid
                            } 
                            className="boton-signUp" type="submit">Registrarme
                        </button>
                    </form>
                </div>
             </div>  
      </div>
        )
    }
}
export default SignUP;