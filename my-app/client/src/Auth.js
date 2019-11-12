import React from 'react';

export class Auth extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        loggedInText: "LOGIN"
      };
      this.logIn = this.logIn.bind(this);
    }
  
    logIn() {
      this.setState({
        loggedIn: true,
        loggedInText: "LOGGED IN!"
      })
      console.log(this.state);
    }
}


const auth = new Auth();

export default auth;