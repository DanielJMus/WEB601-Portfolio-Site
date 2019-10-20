import React from 'react'
import {RegisterContent} from './register/register-content.jsx';
import {GetContent} from './register/getuser-content.jsx';
import {UpdateContent} from './register/updateuser-content.jsx';
import {DeleteContent} from './register/deleteuser-content.jsx';

// Return the correct  tab content to embed based on which tab the user is viewing
function GetTab (props)
{
    switch(parseInt(props.tab))
    {
        case 0:
            return <RegisterContent/>
        case 1:
            return <GetContent/>
        case 2:
            return <UpdateContent/>
        case 3:
            return <DeleteContent/>
    }
}

export class AdminContent extends React.Component {  
    
    constructor() {
        super();
    }

    state = {
        tab: 0,
    }

    render() {
        return(
            <div className="admin-container">
                <header>
                    <h1>Admin Control Panel</h1>
                </header>
                <button onClick={() => this.setState({tab:0})}>Create Account</button>
                <button onClick={() => this.setState({tab:1})}>Get Account</button>
                <button onClick={() => this.setState({tab:2})}>Update Account</button>
                <button onClick={() => this.setState({tab:3})}>Delete Account</button>
                <div className="AdminInputPanel">
                    <GetTab tab={this.state.tab}/>
                </div>
            </div>
        )
    }
}