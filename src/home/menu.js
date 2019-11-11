import React from 'react';
import './menu.css';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import logocitaclic from '../assets/logocitaclic.png';
import exitImage from '../assets/exit.png';

const stylesModal = {
    content: {
        width: '280px',
        height: '120px',
        top: '15%',
        left: '85%',
        right: '20%',
        bottom: '100%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: 0
    },
    overlay: {
        backgroundColor: 'rgba(72,72,72,0.9)'
    }
};
Modal.setAppElement('#root');

class Menu extends React.Component{
    state={
        isModalOpen: false,
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
volverInicio = () => {
    this.closeModal()
    this.props.history.push('/');
} 

    render(){
        return(
            <>
                <div className="container">
                    <div className="menu">
                        <Link className="display-logo" to='/'><img className="img-logo" src={logocitaclic} alt="logo" /> </Link>
                            <div>
                                {!this.props.isLoggedIn ?
                                (<a href="#citaclic" className="nav">¿Por qué citaclic?</a>): null}
                                {!this.props.isLoggedIn ? 
                                    (<a href="#nosotros" className="nav">Nosotros</a>) : null}
                                {!this.props.isLoggedIn ?
                                (<a href="ayuda" className="nav">Ayuda</a>): null}    
                                {this.props.isLoggedIn ? 
                                (<a onClick={this.openModal}> <img src={exitImage} alt="Cerrar sesión" className="img-salir"></img></a> ): null}
                            </div>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.closeModal}
                    style={stylesModal}
                >
                    <div className="container-modal-salir">
                        <div className="modal-salir">
                            <div>
                                <p className="text-modal-salir">¿Quieres cerrar sesión?</p>
                                <button 
                                    type="button" 
                                    onClick={this.closeModal} 
                                    className="boton-volver-salir">volver
                                </button>
                                <button 
                                    type="button" 
                                    onClick={this.volverInicio}
                                    className="boton-confirmar-salir" 
                                    >confirmar
                                </button>               
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
}
export default Menu;
