import React from 'react';
import './login-content.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../../../Actions/action'

import Navbar from '../../navbar';
import {Footer} from '../../footer';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {}
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
                        <form onSubmit={this.onSubmit}>
                        <label>
                            Username:
                            <input type="username" id="input-email" name="username" onChange={e => this.setState({username: e.target.value})}/>
                        </label><br></br>
                        <label>
                            Password:
                            <input type="password" id="input-password" name="password" onChange={e => this.setState({password: e.target.value})}/>
                        </label><br></br>
                        <input type="submit" id="input-submit" value="Login"/>
                        </form>
                    </div>
                    <p>Don't have an account? <Link to="/register">Register now!</Link></p>
                </div>
                <Footer/>
            </div>
        )
    }

    onSubmit = (e) => {
        e.preventDefault();
        let {username, password} = this.state;
        // this.login = this.login.bind(this);
        this.props.login(username, password);
    }
}

const mapStateToProps = (state) => {
    console.log("Login");
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);