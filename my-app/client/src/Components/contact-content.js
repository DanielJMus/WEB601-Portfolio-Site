import React from 'react';
import './contact-content.css';

import Navbar from './navbar';
import { Footer } from './footer';

import { connect } from 'react-redux';
import { login } from '../Reducers/reducer';

class Contact extends React.Component {
    render () {
        return (
            <div className="content">
                <Navbar/>
                <br></br>
                <br></br>
                <div className="contact-content">
                <h1>Contact Me</h1>
                <form className="input-form">
                    <h3>Name:</h3>
                    <input className="input-name" type="text" name="name"></input><br></br>
                    <h3>Message:</h3>
                    <textarea className="input-textarea" type="text" rows="15" name="content"></textarea><br></br>
                    <input className="input-submit" type="submit" value="Submit"></input>
                </form>
                <div className="clear"/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                </div>
                <Footer/>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    console.log("Contact");
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Contact);
  