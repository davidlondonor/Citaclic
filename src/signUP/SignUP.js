import React from 'react';
import './SignUP.css';
import doctorRegistro from '../assets/doctorRegistro.jpg';
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
        isPasswordValid: false,
        document: "",
        isDocumentValid: false,
        numberDocument: "",
        isNumberDocumentValid: false
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
    handleDocumentChange = (event) =>{
        const documentValue= event.target.value;
        this.setState({
            isDirty: true,
            isDocumentValid: documentValue === "",
            document: documentValue
        })
    }
    handleNumberDocument = (event) => {
        const numberDocumentValue= event.target.value;
        this.setState({
            isDirty: true,
            isNumberDocumentValid: numberDocumentValue === "",
            numberDocument: numberDocumentValue
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
    handleRegistry = () => {
        this.props.history.push('/perfilDoctores');
    }
    render(){
        return(
        <div className="container container-signup">             {/* 
           */}  <img alt="Registrarse" className="img-signup" src={doctorRegistro}></img>
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
                        <div className="document-type">
                            <label htmlFor="tipo-documento" className="text-label">Tipo de identificación</label>
                            <input 
                                className="stylesInput" 
                                type="text"
                                id="tipo-documento"
                                value={this.state.document}
                                onChange={this.handleDocumentChange}
                                style={this.state.isDirty && this.state.isDocumentValid ? { border: '1px solid red' } : {}}
                            />
                            {this.state.isDirty && this.state.isDocumentValid ?
                            (<p className="campoVacio">El campo no puede estar vacío</p>): null}
                        </div>


                        <div className="number-document">
                            <label htmlFor="numero-documento" className="text-label">Número de identificación</label>
                            <input 
                                className="stylesInput" 
                                type="text"
                                id="numero-documento"
                                value={this.state.numberDocument}
                                onChange={this.handleNumberDocument}
                                style={this.state.isDirty && this.state.isNumberDocumentValid ? { border: '1px solid red' } : {}}
                            />
                            {this.state.isDirty && this.state.isNumberDocumentValid ?
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
                                type="password"handleSubmit
                                id="passwordConfirm"
                                value={this.state.confirmPassword}
                                onChange={this.handlePasswordConfirm}
                                style={this.state.isDirty && this.state.password !== "" && !this.state.isPasswordValid ? { border: '1px solid red' } : {}}
                            />
                            {this.state.isDirty && this.state.password !== "" && !this.state.isPasswordValid ?
                                (<p className="campoVacio">La contraseña no coincide</p>): null}
                        </div>
                            <button
                                onClick={this.handleRegistry}
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