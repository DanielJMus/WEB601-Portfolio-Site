import React from 'react';
import blank from './Images/blank.png'
import './gamedev-content.css';

export class GamedevContent extends React.Component {
    render () {
        return (
            <div className="gamedev-content">
                <br></br>
                <br></br>
                <h1>6 Years of Unity3D Game and Assets</h1>
                <div className="section">
                    <div className="section-info">
                        <h2 className="section-title">Game 1</h2>
                        <p className="section-description">
                        Fusce in lectus purus. Nulla auctor ipsum malesuada congue dictum. Donec at suscipit tellus. Donec a sem nisl. Phasellus ullamcorper libero diam, nec tincidunt orci sollicitudin vel. Ut commodo consectetur ultrices. Nam rhoncus, metus ut hendrerit semper, nunc quam fermentum neque, nec tincidunt libero felis auctor risus. Integer eget est sed quam congue elementum sit amet at mauris.
                        </p>
                    </div>
                    <img className="section-image" src={blank}/>
                    <div className="clear"/>
                </div>

                <div className="section">
                    <div className="section-info">
                        <h2 className="section-title">Game 2</h2>
                        <p className="section-description">
                        Fusce in lectus purus. Nulla auctor ipsum malesuada congue dictum. Donec at suscipit tellus. Donec a sem nisl. Phasellus ullamcorper libero diam, nec tincidunt orci sollicitudin vel. Ut commodo consectetur ultrices. Nam rhoncus, metus ut hendrerit semper, nunc quam fermentum neque, nec tincidunt libero felis auctor risus. Integer eget est sed quam congue elementum sit amet at mauris.
                        </p>
                    </div>
                    <img className="section-image" src={blank}/>
                    <div className="clear"/>
                </div>

                <div className="section">
                    <div className="section-info">
                        <h2 className="section-title">Game 3</h2>
                        <p className="section-description">
                        Fusce in lectus purus. Nulla auctor ipsum malesuada congue dictum. Donec at suscipit tellus. Donec a sem nisl. Phasellus ullamcorper libero diam, nec tincidunt orci sollicitudin vel. Ut commodo consectetur ultrices. Nam rhoncus, metus ut hendrerit semper, nunc quam fermentum neque, nec tincidunt libero felis auctor risus. Integer eget est sed quam congue elementum sit amet at mauris.
                        </p>
                    </div>
                    <img className="section-image" src={blank}/>
                    <div className="clear"/>
                </div>
            </div>
        );
    }
};