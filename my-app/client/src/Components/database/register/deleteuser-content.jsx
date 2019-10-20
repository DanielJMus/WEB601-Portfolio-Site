import React from 'react'
import './register-content.css';

export class DeleteContent extends React.Component {
    
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:4200/api/users/' + this.ID.value, {
            method: 'delete',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
             "ID": this.ID.value,
            })});
        alert("Account deleted successfully.");
    }
     
    render() {
        return(
            <div className="register-container">
                <header>
                    <h1>Delete Account</h1>
                </header>
                <div className='register-form'>
                    <form onSubmit={this.handleSubmit}>
                    <label>
                        ID:
                        <input ref={(ref) => {this.ID = ref}} type="number" id="input-id" name="id"/>
                    </label><br></br>
                    <input type="submit" id="input-submit"/>
                    </form>
                </div>
            </div>
        )
    }
}