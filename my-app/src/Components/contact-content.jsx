import React from 'react';
import './contact-content.css';

export class ContactContent extends React.Component {
    render () {
        return (
            <div className="contact-content">
                <br></br>
                <br></br>
                <h1>Contact Me</h1>
                <form className="input-form">
                    <h3>Name:</h3>
                    <input className="input-name" type="text" name="name"></input><br></br>
                    <h3>Message:</h3>
                    <textarea className="input-textarea" type="text" rows="15" name="content"></textarea><br></br>
                    <input className="input-submit" type="submit" value="Submit"></input>
                </form>
                <div className="clear"/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    }
};