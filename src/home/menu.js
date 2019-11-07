import React from 'react';
import './menu.css';
import Modal from 'react-modal';

const stylesModal = {
    content: {
        width: '280px',
        height: '120px',
        top: '30%',
        left: '80%',
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
    render(){
        return(
            <>
                <div className="container">
                    <div className="menu">
                        <a className="display-logo" href="#"> <img className="img-logo" src="https://i.ibb.co/FnNBTJ8/logocitaclic.png" alt="logo" /></a>
                        <a href="#citaclic" className="nav">¿Por qué citaclic?</a>
                        <a href="#nosotros" className="nav">Nosotros</a>
                        <a href="#ayuda" className="nav">Ayuda</a>
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
                                    type="submit" 
                                    onClick={this.closeModal} 
                                    className="boton-volver-salir">volver
                                </button>
                                <button 
                                    type="submit" 
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