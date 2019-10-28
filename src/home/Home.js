import React from 'react';
import Header from './header';
import Login from './login';
import AboutUS from './aboutUS';
import Help from './help';
import DeveloperCards from './developerCards';
import CheckIn from './checkIn';

const Home = () => {
    return (
      <div className="container">
          <Header />
          <Login />
          <AboutUS />
          <CheckIn />
          <Help />
          <DeveloperCards />
       </div>
    );
  }
  
  export default Home;
  