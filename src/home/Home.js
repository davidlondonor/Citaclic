import React from 'react';
import Header from './header/header';
import Login from './login/login';
import AboutUS from './aboutUS/aboutUS';
import DeveloperCards from './developerCards/developerCards';
const Home = ({ history }) => {
    return (
      <div className="container">
          <Header />
          <Login history={history} />
          <AboutUS />
          <DeveloperCards />
          
       </div>
    );
  }
  
  export default Home;
  
