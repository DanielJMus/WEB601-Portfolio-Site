import React from 'react';
import {HomeContent} from './Components/home-content.jsx';
import {PhotoshopContent} from './Components/photoshop-content.jsx';
import {ModelingContent} from './Components/modeling-content.jsx';
import {GamedevContent} from './Components/gamedev-content.jsx';
import {ContactContent} from './Components/contact-content.jsx';
import {Navbar} from './Components/navbar.jsx';
import { Footer } from './Components/footer.jsx';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <HomeContent/>
      <Footer/>
    </div>
  );
}

function Photoshop() {
  return (
    <div className="App">
      <Navbar/>
      <PhotoshopContent/>
      <Footer/>
    </div>
  );
}

function Modeling() {
  return (
    <div className="App">
      <Navbar/>
      <ModelingContent/>
      <Footer/>
    </div>
  );
}

function Gamedev() {
  return (
    <div className="App">
      <Navbar/>
      <GamedevContent/>
      <Footer/>
    </div>
  );
}

function Contact() {
  return (
    <div className="App">
      <Navbar/>
      <ContactContent/>
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
