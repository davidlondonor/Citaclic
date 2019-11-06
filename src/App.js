import React from "react";
import Menu from "./home/menu";
import Footer from "./home/footer";
import Home from "./home/Home";
import { Switch, Route } from "react-router-dom";
import SignUP from "./signUP/SignUP"; 

import "./App.css";
import Cards from "./components/cards";

const Error = () => {
  return <div>ERROR</div>;
};

const App = () => {
  return (
    <div className='App'>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/registro' component={SignUP} />
        <Route path='/doctores' component={Cards} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
