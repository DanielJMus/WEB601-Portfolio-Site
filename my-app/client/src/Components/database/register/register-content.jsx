import React from 'react'
import './register-content.css';

export class RegisterContent extends React.Component {
    
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:4200/api/users', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
             "FirstName": this.FirstName.value,
             "LastName": this.LastName.value,
             "Email": this.Email.value,
             "Password": this.Password.value,
            })});
        alert("Account registered successfully.");
    }
     
    render() {
        return(
            <div className="register-container">
                <header>
                    <h1>Register Account</h1>
                </header>
                <div className='register-form'>
                    <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                        <input ref={(ref) => {this.FirstName = ref}} type="text" id="input-firstname" name="firstname"/>
                    </label><br></br>
                    <label>
                        Last Name:
                        <input ref={(ref) => {this.LastName = ref}} type="text" id="input-lastname" name="lastname"/>
                    </label><br></br>
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
            </div>
        )
    }
}