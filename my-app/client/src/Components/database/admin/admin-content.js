import React from 'react'
import RegisterForm from './register-form';
import {Get} from './getuser-form';
import {Update} from './updateuser-form.js';
import {Delete} from './deleteuser-form.js';
import {PhotoshopPost} from './addPhotoshop-form.js';
import {PhotoshopUpdate} from './updatePhotoshop-form.js';
import {PhotoshopDelete} from './deletePhotoshop-form.js';
import { ModelPost } from './addModel-form';
import { ModelUpdate } from './updateModel-form';
import { ModelDelete } from './deleteModel-form';
import { GamedevPost } from './addGameDev-form';
import { GamedevUpdate } from './updateGameDev-form';
import { GamedevDelete } from './deleteGameDev-form';

import './admin-content.css';

import Navbar from '../../navbar';
import {Footer} from '../../footer';

import { connect } from 'react-redux';
import { login } from '../../../Actions/action';

// Return the correct settings tab content to embed based on which tab the user is viewing
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
        case 4:
            return <PhotoshopPost/>
        case 5:
            return <PhotoshopUpdate/>
        case 6:
            return <PhotoshopDelete/>
        case 7:
            return <ModelPost/>
        case 8:
            return <ModelUpdate/>
        case 9:
            return <ModelDelete/>
        case 10:
            return <GamedevPost/>
        case 11:
            return <GamedevUpdate/>
        case 12:
            return <GamedevDelete/>
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
                { /* If the user is not logged in, or is not an administrator, hide the page content. Otherwise render it. */
                this.props.isAdministrator &&
                <div className="admin-panel">
                    <header>
                        <h1>Admin Control Panel</h1>
                    </header>
                    <button onClick={() => this.setState({tab:0})}>Create Account</button>
                    <button onClick={() => this.setState({tab:1})}>Get Account</button>
                    <button onClick={() => this.setState({tab:2})}>Update Account</button>
                    <button onClick={() => this.setState({tab:3})}>Delete Account</button><br></br>

                    <button onClick={() => this.setState({tab:4})}>Add Photoshop</button>
                    <button onClick={() => this.setState({tab:5})}>Update Photoshop</button>
                    <button onClick={() => this.setState({tab:6})}>Delete Photoshop</button><br></br>

                    <button onClick={() => this.setState({tab:7})}>Add Model</button>
                    <button onClick={() => this.setState({tab:8})}>Update Model</button>
                    <button onClick={() => this.setState({tab:9})}>Delete Model</button><br></br>

                    <button onClick={() => this.setState({tab:10})}>Add Gamedev</button>
                    <button onClick={() => this.setState({tab:11})}>Update Gamedev</button>
                    <button onClick={() => this.setState({tab:12})}>Delete Gamedev</button>
                    <div className="admin-input-panel">
                        <GetTab tab={this.state.tab}/>
                    </div>
                </div>
                }
                {
                !this.props.isAdministrator &&
                <div className="admin-panel">
                    <header>
                        <h1>ACCESS DENIED</h1>
                    </header>
                    <h2>You do not have access to this page, please log into an Administrator account.</h2>
                </div>
                }
                <Footer/>
            </div>
        )
    }
}

// Retrieve the redux state and add it to the component properties.
const mapStateToProps = (state) => {
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
  