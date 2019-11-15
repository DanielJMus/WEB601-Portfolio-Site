import React from 'react'
// import './register-content.css';

export class Get extends React.Component {
    
    constructor() {
        super();
        this.setID = this.setID.bind(this); 
        this.state = {
            id: 1,
            js: null,
        }  
    } 

    // Read the user data response json into the state
    getUser() {
        console.log(this.state.id);
        fetch('http://localhost:4200/api/users/' + this.state.id, {
            method: 'get'
        }).then(res =>
            res.json().then(json => {
                this.setState({ js: json });
            })
        );
    }

    // Change the selected user ID
    setID(event) {
        event.preventDefault();
        // Change the state, and update the page using the callback
        this.setState({id:this.ID.value}, this.getUser);
    }

    componentDidMount () {
        this.getUser();
    }
     
    render() {
        const { js } = this.state;
        return(
            <div className="content">
                <header>
                    <h1>Get Account</h1>
                </header>
                <div className='register-form'>
                    <form onSubmit={this.setID}>
                    <label>
                        ID:
                        <input ref={(ref) => {this.ID = ref}} type="number" id="input-firstname" name="id"/>
                    </label><br></br>
                    <input type="submit"/>
                    </form>
                </div>
                <br></br>
                <div><b>{js && "ID: " + this.state.js[0].ID}</b><br></br>
                        {js && "First Name: " + this.state.js[0].FirstName}<br></br>
                        {js && "\nLast Name: " + this.state.js[0].LastName}<br></br>
                        {js && "\nEmail: " + this.state.js[0].Email}<br></br>
                        {js && "\nPassword: " + this.state.js[0].Password}</div>
            </div>
        )
    }
}