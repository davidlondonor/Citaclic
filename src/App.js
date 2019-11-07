import React from "react";
import Menu from "./home/menu";
import Footer from "./home/footer";
import Home from "./home/Home";
import { Switch, Route } from "react-router-dom";
import SignUP from "./home/signUP/SignUP";
import perfilDoctores from "./perfilDoctores/perfilDoctores";
import tarjetaDocs from "./tarjetaDoctor/tarjetaDocs";

import "./App.css";
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
        <Route path='/perfildoctores' component={perfilDoctores} />
        <Route path='/doctores/:id' component={tarjetaDocs} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
