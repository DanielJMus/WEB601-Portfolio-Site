import React from 'react';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { login } from '../Actions/action';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render () {
        return (
            <div className="nav-bar">
                <h1 className="nav-title">Daniel Musgrave / Services</h1>
                <nav>
                    <ul>
                        <li className="nav-item"><Link to="/">HOME</Link></li> 
                        <li className="nav-item"><Link to="/photoshop">PHOTOSHOP</Link></li> 
                        <li className="nav-item"><Link to="/modeling">3D MODELING</Link></li> 
                        <li className="nav-item"><Link to="/gamedev">GAMEDEV</Link></li> 
                        <li className="nav-item"><Link to="/contact">CONTACT</Link></li> 
                        {
                            !this.props.isLoginSuccess &&
                            <li className="nav-item"><Link to="/login">LOGIN</Link></li>
                        }
                        {
                            this.props.isAdministrator &&
                        <li className="nav-item"><Link to="/admin">ADMIN</Link></li>
                        }
                    </ul>
                </nav>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    console.log("Navbar");
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        isLoginError: state.isLoginError,
        isAdministrator: state.isAdministrator
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(login(username, password))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
  