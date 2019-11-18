import React from 'react'
import RegisterForm from './register-form';
import {Get} from './getuser-form';
import {Update} from './updateuser-form.js';
import {Delete} from './deleteuser-form.js';

import './admin-content.css';

import Navbar from '../../navbar';
import {Footer} from '../../footer';

import { connect } from 'react-redux';
import { login } from '../../../Actions/action';

// Return the correct  tab content to embed based on which tab the user is viewing
function GetTab (props)
{
    switch(parseInt(props.tab))
    {
        case 0:
            return <RegisterForm/>
        case 1:
            return <Get/>
        case 2:
            return <Update/>
        case 3:
            return <Delete/>
        default:
            return null;
    }
}

class Admin extends React.Component {  
    state = {
        tab: 0,
    }

    render() {
        return(
            <div className="content">
                <Navbar/>
                <div className="admin-panel">
                    <header>
                        <h1>Admin Control Panel</h1>
                    </header>
                    <button onClick={() => this.setState({tab:0})}>Create Account</button>
                    <button onClick={() => this.setState({tab:1})}>Get Account</button>
                    <button onClick={() => this.setState({tab:2})}>Update Account</button>
                    <button onClick={() => this.setState({tab:3})}>Delete Account</button>
                    <div className="admin-input-panel">
                        <GetTab tab={this.state.tab}/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Admin");
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Admin);
  