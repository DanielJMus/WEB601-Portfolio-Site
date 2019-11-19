import React from 'react';
import './home-content.css';

import Navbar from './navbar';
import {Footer} from './footer';

import { login } from '../Actions/action';
import { connect } from 'react-redux';

export class Home extends React.Component {
    render () {
        return (
            <div className="home-content">
                <Navbar/>
                <br></br>
                <br></br>
                <h1>Many fields, great results</h1>

                <div className="home-section right">
                    <div className="home-section-info right">
                        <h2 className="home-section-title right">Unity3D and Game Development</h2>
                        <p className="home-section-description right">
                        I have been working with the Unity3D Engine since 2013 and have gained extensive knowledge of its usage, I have worked on many projects both on my own and with others and have created a large array of proof-of-concept original prototypes. My games are object-oriented and use modern coding and optimization techniques to ensure fast performance on low end machines, and I strive to work on large projects in the future to further demonstrate my skills.
                        </p>
                    </div>
                    <img className="home-section-image right" alt="Unity Environment" src="https://i.imgur.com/2kQVZKb.jpg"/>
                    <div className="clear"/>
                </div>

                <div className="home-section left">
                    <img className="home-section-image left" alt="Photoshop Colorization" src="https://i.imgur.com/FXHasod.jpg"/>
                    <div className="home-section-info left">
                        <h2 className="home-section-title left">High Quality Photoshops</h2>
                        <p className="home-section-description left">
                        I have used Photoshop almost every day since being introduced to it in 2012, and I consider myself a master at the program. I have worked on many high quality paid Photoshop projects for internet users, primarily helping users on the /r/PhotoshopRequest subreddit, and also helping people privately who have come to me for personal photoshop jobs. I am also very fond of color restoration, the wonderful process of taking a black and white image and painting color back into it, and have been growing my skills in that area over the last year.
                        </p>
                    </div>
                    <div className="clear"/>
                </div>

                <div className="home-section right">
                    <div className="home-section-info right">
                        <h2 className="home-section-title right">Cinema4D/Blender Experience</h2>
                        <p className="home-section-description right">
                            I have used Cinema4D for 3D Modeling for game dev since 2013, and have sold hundreds of models on online model sites such as TurboSquid, my skills primarily focus on stylized toon models, but I have also created plenty of photorealistic models in order to challenge my ability to model items from the real world as accurately as possible. I have a medium knowledge level of the animation aspect of 3D modeling too, and have rigged many models that I have created in order to be used in game projects.
                        </p>
                    </div>
                    <img className="home-section-image right" alt="3D Model" src="https://i.imgur.com/jNxdDUt.png"/>
                    <div className="clear"/>
                </div>
                <Footer/>
            </div>
        );
    }
};

// Retrieve the redux state and add it to the component properties.
const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        isLoginError: state.isLoginError,
        isAdministrator: state.isAdministrator
    };
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(login(username, password))
    };
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
  