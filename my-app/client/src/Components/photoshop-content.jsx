import React from 'react';
import blank from './Images/blank.png';
import blanktall from './Images/blank-tall.png';
import './photoshop-content.css';

export class PhotoshopContent extends React.Component {
    render () {
        return (
            <div className="photoshop-content">
                <br></br>
                <br></br>
                <h1>Restoration, Colorization, Manipulation</h1>
                <h2>7 Years of Photoshop Experience</h2>
                
                <div className="column">
                    <img src={blank}/>
                    <img src={blanktall}/>
                    <img src={blank}/>
                    <img src={blank}/>
                </div>

                <div className="column">
                    <img src={blanktall}/>
                    <img src={blank}/>
                    <img src={blanktall}/>
                    <img src={blank}/>
                </div>

                <div className="column">
                    <img src={blanktall}/>
                    <img src={blank}/>
                    <img src={blank}/>
                    <img src={blanktall}/>
                </div>

                <div className="clear"/>
            </div>
        );
    }
};