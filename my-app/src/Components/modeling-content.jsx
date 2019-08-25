import React from 'react';
import blank from './Images/blank.png'
import './modeling-content.css';

export class ModelingContent extends React.Component {
    render () {
        return (
            <div className="modeling-content">
                <br></br>
                <br></br>
                <h1>Years of experience in Cinema4D and Blender</h1>

                <div className="section">
                    <img className="section-image" src={blank}/>
                    <div className="section-info">
                        <h2 className="section-title">Model 1</h2>
                        <p className="section-description">
                        Fusce in lectus purus. Nulla auctor ipsum malesuada congue dictum. Donec at suscipit tellus. Donec a sem nisl. Phasellus ullamcorper libero diam, nec tincidunt orci sollicitudin vel. Ut commodo consectetur ultrices. Nam rhoncus, metus ut hendrerit semper, nunc quam fermentum neque, nec tincidunt libero felis auctor risus. Integer eget est sed quam congue elementum sit amet at mauris.
                        </p>
                    </div>
                    <div className="clear"/>
                </div>

                <div className="section">
                    <img className="section-image" src={blank}/>
                    <div className="section-info">
                        <h2 className="section-title">Model 2</h2>
                        <p className="section-description">
                        Fusce in lectus purus. Nulla auctor ipsum malesuada congue dictum. Donec at suscipit tellus. Donec a sem nisl. Phasellus ullamcorper libero diam, nec tincidunt orci sollicitudin vel. Ut commodo consectetur ultrices. Nam rhoncus, metus ut hendrerit semper, nunc quam fermentum neque, nec tincidunt libero felis auctor risus. Integer eget est sed quam congue elementum sit amet at mauris.
                        </p>
                    </div>
                    <div className="clear"/>
                </div>

                <div className="section">
                    <img className="section-image" src={blank}/>
                    <div className="section-info">
                        <h2 className="section-title">Model 3</h2>
                        <p className="section-description">
                        Fusce in lectus purus. Nulla auctor ipsum malesuada congue dictum. Donec at suscipit tellus. Donec a sem nisl. Phasellus ullamcorper libero diam, nec tincidunt orci sollicitudin vel. Ut commodo consectetur ultrices. Nam rhoncus, metus ut hendrerit semper, nunc quam fermentum neque, nec tincidunt libero felis auctor risus. Integer eget est sed quam congue elementum sit amet at mauris.
                        </p>
                    </div>
                    <div className="clear"/>
                </div>
            </div>
        );
    }
};