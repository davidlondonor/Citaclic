import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className='container'>
      <header className='App-header'>
        <img
          className='imagenHome'
          src='https://i.ibb.co/6X8Hk3T/banner-Principal.jpg'
          alt='Madre con sus hijos'
        />
      </header>
      <div id='citaclic' className='citaclic'>
        <p className='text-citaclic'>
          Encuentra cientos de profesionales de la salud en tu ciudad solo a un
          clic.
        </p>
      </div>
    </div>
  );
};
export default Header;
