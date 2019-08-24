import React from 'react';
import {Navbar} from './Components/navbar.jsx';
import './App.css';
import { Footer } from './Components/footer.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
  );
}

function Photoshop() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
  );
}

function Modeling() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
  );
}

function Gamedev() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
  );
}

function Contact() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/photoshop/" component={Photoshop} />
        <Route path="/modeling/" component={Modeling} />
        <Route path="/gamedev/" component={Gamedev} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  );
}

export default AppRouter;
