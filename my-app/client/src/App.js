import React from 'react';
import {Home} from './Components/home-content.js';
import {Photoshop} from './Components/photoshop-content.js';
import {Gamedev} from './Components/gamedev-content.js';
import {Modeling} from './Components/modeling-content.js';
import {Contact} from './Components/contact-content.js';
import {Login} from './Components/database/log-in/login-content.js';
import {Admin} from './Components/database/admin-content.js';
import {Navbar} from './Components/navbar.js';
import { Footer } from './Components/footer.js';
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

// function Login() {
//   return (
//     <div className="App">
//       <Navbar auth={auth}/>
//       <LoginContent handler = {auth}/>
//       <Footer/>
//     </div>
//   );
// }

// function Admin() {
//   return (
//     <div className="App">
//       <Navbar auth={auth.state.loggedIn} logtext={auth.state.loggedInText}/>
//       <AdminContent auth={auth.state.loggedIn}/>
//       <Footer/>
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div className="App">
//       <Navbar auth={auth.state.loggedIn} logtext={auth.state.loggedInText}/>
//       <HomeContent authenticated={auth.state.loggedIn}/>
//       <Footer/>
//     </div>
//   );
// }

// function Photoshop() {
//   return (
//     <div className="App">
//       <Navbar auth={auth.state.loggedIn} logtext={auth.state.loggedInText}/>
//       <PhotoshopContent auth={auth.state.loggedIn}/>
//       <Footer/>
//     </div>
//   );
// }

// function Modeling() {
//   return (
//     <div className="App">
//       <Navbar auth={auth.state.loggedIn} logtext={auth.state.loggedInText}/>
//       <ModelingContent auth={auth.state.loggedIn}/>
//       <Footer/>
//     </div>
//   );
// }

// function Gamedev() {
//   return (
//     <div className="App">
//       <Navbar auth={auth.state.loggedIn} logtext={auth.state.loggedInText}/>
//       <GamedevContent auth={auth.state.loggedIn}/>
//       <Footer/>
//     </div>
//   );
// }

// function Contact() {
//   return (
//     <div className="App">
//       <Navbar auth={auth.state.loggedIn} logtext={auth.state.loggedInText}/>
//       <ContactContent auth={auth.state.loggedIn}/>
//       <Footer/>
//     </div>
//   );
// }

export default App;
