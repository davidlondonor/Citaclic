import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="container">
            <header className="App-header">
                <h2 className="text-header">Tener una cita médica nunca fue tan fácil</h2>
            </header>
            <div id="citaclic" className="citaclic">
                <p className="text-citaclic">Encuentra cientos de profesionales de la salud en tu ciudad.</p>
            </div>
        </div>
    )
}
export default Header;
