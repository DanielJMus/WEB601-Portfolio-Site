import React from 'react'
import './login-content.css';
import { Link } from "react-router-dom";
import auth from "../../../Auth.js";

import {Navbar} from '../../navbar';
import {Footer} from '../../footer';

export class Login extends React.Component {
    
    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        auth.logIn();
    }
     
    render() {
        return(
            <div className="content">
                <Navbar/>
                <div className="login-content">
                    <header>
                        <h1>Log In</h1>
                    </header>
                    <div className='login-form'>
                        <form onSubmit={this.handleSubmit}>
                        <label>
                            Email:
                            <input ref={(ref) => {this.Email = ref}} type="email" id="input-email" name="email"/>
                        </label><br></br>
                        <label>
                            Password:
                            <input ref={(ref) => {this.Password = ref}} type="password" id="input-password" name="password"/>
                        </label><br></br>
                        <input type="submit" id="input-submit"/>
                        </form>
                    </div>
                    <p>Don't have an account? <Link to="/register">Register now!</Link></p>
                </div>
                <Footer/>
            </div>
        )
    }
}