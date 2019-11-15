import React from 'react';
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.auth)
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
                       <li className="nav-item"><Link to="/login">LOGIN</Link></li>
                       {/* {this.props.auth === true && */}
                       {/* <li className="nav-item"><Link to="/admin">ADMIN</Link></li>  */}
                       {/* } */}
                    </ul>
                </nav>
            </div>
        );
    }
};