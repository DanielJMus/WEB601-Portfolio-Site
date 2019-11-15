import React from 'react';
import blank from './Images/blank.png'
import './home-content.css';

import {Navbar} from './navbar';
import {Footer} from './footer';

export class Home extends React.Component {
    render () {
        return (
            <div className="home-content">
                <Navbar/>
                <br></br>
                <br></br>
                <h1>Many fields, great results</h1>

                <div className="section">
                    <div className="section-info left">
                        <h2 className="section-title left">Unity3D and Game Development</h2>
                        <p className="section-description left">
                        Fusce in lectus purus. Nulla auctor ipsum malesuada congue dictum. Donec at suscipit tellus. Donec a sem nisl. Phasellus ullamcorper libero diam, nec tincidunt orci sollicitudin vel. Ut commodo consectetur ultrices. Nam rhoncus, metus ut hendrerit semper, nunc quam fermentum neque, nec tincidunt libero felis auctor risus. Integer eget est sed quam congue elementum sit amet at mauris.
                        </p>
                    </div>
                    <img className="section-image left" src={blank}/>
                    <div className="clear"/>
                </div>

                <div className="section">
                    <div className="section-info right">
                        <h2 className="section-title right">High Quality Photoshops</h2>
                        <p className="section-description right">
                        Fusce in lectus purus. Nulla auctor ipsum malesuada congue dictum. Donec at suscipit tellus. Donec a sem nisl. Phasellus ullamcorper libero diam, nec tincidunt orci sollicitudin vel. Ut commodo consectetur ultrices. Nam rhoncus, metus ut hendrerit semper, nunc quam fermentum neque, nec tincidunt libero felis auctor risus. Integer eget est sed quam congue elementum sit amet at mauris.
                        </p>
                    </div>
                    <img className="section-image right" src={blank}/>
                    <div className="clear"/>
                </div>

                <div className="section">
                    <div className="section-info left">
                        <h2 className="section-title left">Cinema4D/Blender Experience</h2>
                        <p className="section-description left">
                        Fusce in lectus purus. Nulla auctor ipsum malesuada congue dictum. Donec at suscipit tellus. Donec a sem nisl. Phasellus ullamcorper libero diam, nec tincidunt orci sollicitudin vel. Ut commodo consectetur ultrices. Nam rhoncus, metus ut hendrerit semper, nunc quam fermentum neque, nec tincidunt libero felis auctor risus. Integer eget est sed quam congue elementum sit amet at mauris.
                        </p>
                    </div>
                    <img className="section-image left" src={blank}/>
                    <div className="clear"/>
                </div>
                <Footer/>
            </div>
        );
    }
};