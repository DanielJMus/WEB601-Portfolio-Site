import React from 'react';
import './register-content.css';
import RegisterForm from './database/register/register-form';

import Navbar from './navbar';
import { Footer } from './footer';

import { connect } from 'react-redux';
import { login } from '../Actions/action';

class Register extends React.Component {
    render () {
        return (
            <div className="content">
                <Navbar/>
                <br></br>
                <br></br>
                <div className="register-form">
                    <RegisterForm/>
                </div>
                <Footer/>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    console.log("Register");
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Register);
  