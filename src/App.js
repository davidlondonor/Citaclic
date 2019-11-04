import React from "react";
import Menu from "./home/menu";
import Footer from "./home/footer";
import Home from "./home/Home";
import { Switch, Route } from "react-router-dom";
import SignUP from "./home/signUP/SignUP";
import Cards from "./pageDocs/Cards";
import PageDoc from "./pageDocs/PagDocs";
import { Link } from "react-router-dom";

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
        <Route exact path='/registro' component={SignUP} />
        <Route exact path='/doctores' component={PageDoc} />
        <Route exact path='/Cards' component={Cards} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
