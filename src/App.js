import React from "react";
import Menu from "./home/menu";
import Footer from "./home/footer";
import Home from "./home/Home";
import { Switch, Route, withRouter, matchPath } from "react-router-dom";
import SignUP from "./signUP/SignUP";
import PerfilDoctores from "./perfilDoctores/perfilDoctores";
import TarjetaDocs from "./tarjetaDoctor/tarjetaDocs";
import "./App.css";

const needsAuthRoutes = [
  '/perfilDoctores',
  '/doctores/:id'
];

const needsAuth = (pathname) => {
  return needsAuthRoutes.some(authRoute => {
    return !!matchPath(pathname, { path: authRoute });
  });
};

const App = (props) => {
    const pathname = props.history.location.pathname;
    return(
      <div className='App'>
        <Menu history={props.history} isLoggedIn={needsAuth(pathname)} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/registro' component={SignUP} />
          <Route
            path='/perfildoctores'
            component={PerfilDoctores}
          />
          <Route 
            path='/doctores/:id'
            component={TarjetaDocs}
          />
        </Switch>
        <Footer />
      </div>
    )
  }
export default withRouter(App);
