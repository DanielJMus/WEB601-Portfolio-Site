import React from 'react';
import {HomeContent} from './Components/home-content.jsx';
import {PhotoshopContent} from './Components/photoshop-content.jsx';
import {GamedevContent} from './Components/gamedev-content.jsx';
import {ModelingContent} from './Components/modeling-content.jsx';
import {ContactContent} from './Components/contact-content.jsx';
import {LoginContent} from './Components/database/log-in/login-content.jsx';
import {AdminContent} from './Components/database/admin-content.jsx';
import {Navbar} from './Components/navbar.jsx';
import { Footer } from './Components/footer.jsx';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import auth from "./Auth.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      loggedInText: "LOGIN"
    };
    this.logIn = this.logIn.bind(this);
  }

  logIn() {
    auth.logIn();
    // this.setState({
    //   loggedIn: true,
    //   loggedInText: "LOGGED IN!"
    // })
  }

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
            <Route path="/login/" component={Login} />
            <Route path="/admin/" component={Admin} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function Login() {
  return (
    <div className="App">
      <Navbar auth={auth}/>
      <LoginContent handler = {auth}/>
      <Footer/>
    </div>
  );
}

function Admin() {
  return (
    <div className="App">
      <Navbar auth={auth.state.loggedIn} logtext={auth.state.loggedInText}/>
      <AdminContent auth={auth.state.loggedIn}/>
      <Footer/>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <Navbar auth={auth.state.loggedIn} logtext={auth.state.loggedInText}/>
      <HomeContent authenticated={auth.state.loggedIn}/>
      <Footer/>
    </div>
  );
}

function Photoshop() {
  return (
    <div className="App">
      <Navbar auth={auth.state.loggedIn} logtext={auth.state.loggedInText}/>
      <PhotoshopContent auth={auth.state.loggedIn}/>
      <Footer/>
    </div>
  );
}

function Modeling() {
  return (
    <div className="App">
      <Navbar auth={auth.state.loggedIn} logtext={auth.state.loggedInText}/>
      <ModelingContent auth={auth.state.loggedIn}/>
      <Footer/>
    </div>
  );
}

function Gamedev() {
  return (
    <div className="App">
      <Navbar auth={auth.state.loggedIn} logtext={auth.state.loggedInText}/>
      <GamedevContent auth={auth.state.loggedIn}/>
      <Footer/>
    </div>
  );
}

function Contact() {
  return (
    <div className="App">
      <Navbar auth={auth.state.loggedIn} logtext={auth.state.loggedInText}/>
      <ContactContent auth={auth.state.loggedIn}/>
      <Footer/>
    </div>
  );
}

export default App;
