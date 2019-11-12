import React from 'react'
import './login-content.css';
import { Link } from "react-router-dom";
import auth from "../../../Auth.js";

export class LoginContent extends React.Component {
    
    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        auth.logIn();
        /*fetch('http://localhost:4200/api/users', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
             "Email": this.Email.value,
             "Password": this.Password.value,
            })
        }).then(res => {
            if (res.status == 201) alert("Successfully logged in.")
            else alert(res.status)
        });*/
        //this.props.handler();
    }
     
    render() {
        return(
            <div className="login-container">
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
        )
    }
}