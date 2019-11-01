import React from 'react';
import Header from './header/header';
import Login from './login/login';
import AboutUS from './aboutUS/aboutUS';
import Help from './help/help';
import DeveloperCards from './developerCards/developerCards';

const Home = () => {
    return (
      <div className="container">
          <Header />
          <Login />
          <AboutUS />
          <DeveloperCards />
          <Help />
       </div>
    );
  }
  
  export default Home;
  