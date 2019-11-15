import React from 'react';
import Home from './Components/home-content.js';
import Photoshop from './Components/photoshop-content.js';
import Gamedev from './Components/gamedev-content.js';
import Modeling from './Components/modeling-content.js';
import Contact from './Components/contact-content.js';
import Login from './Components/database/log-in/login-content.js';
import Admin from './Components/database/admin-content.js';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {login } from './Actions/action';
import { connect } from 'react-redux';


class App extends React.Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/photoshop/" component={Photoshop} />
            <Route path="/modeling/" component={Modeling} />
            <Route path="/gamedev/" component={Gamedev} />
            <Route path="/contact/" component={Contact} />
            <Route path="/login/" component={Login}/>
            <Route path="/admin/" component={Admin} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

  
const mapStateToProps = (state) => {
  console.log("App");
  return {
      isLoginPending: state.isLoginPending,
      isLoginSuccess: state.isLoginSuccess,
      isLoginError: state.isLoginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      login: (username, password) => dispatch(login(username, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
