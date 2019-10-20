import React from 'react';
import {HomeContent} from './Components/home-content.jsx';
import {PhotoshopContent} from './Components/photoshop-content.jsx';
import {GamedevContent} from './Components/gamedev-content.jsx';
import {ModelingContent} from './Components/modeling-content.jsx';
import {ContactContent} from './Components/contact-content.jsx';
import {RegisterContent} from './Components/database/register/register-content.jsx';
import {AdminContent} from './Components/database/admin-content.jsx';
import {Navbar} from './Components/navbar.jsx';
import { Footer } from './Components/footer.jsx';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

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

function Register() {
  return (
    <div className="App">
      <Navbar/>
      <RegisterContent/>
      <Footer/>
    </div>
  );
}

function Admin() {
  return (
    <div className="App">
      <Navbar/>
      <AdminContent/>
      <Footer/>
    </div>
  );
}


function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/photoshop/" component={Photoshop} />
        <Route path="/modeling/" component={Modeling} />
        <Route path="/gamedev/" component={Gamedev} />
        <Route path="/contact/" component={Contact} />
        <Route path="/register/" component={Register} />
        <Route path="/admin/" component={Admin} />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
