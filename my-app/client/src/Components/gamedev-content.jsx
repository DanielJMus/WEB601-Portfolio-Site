import React from 'react';
import blank from './Images/blank.png'
import './gamedev-content.css';
import { Link } from "react-router-dom";

export class GamedevContent extends React.Component {

    constructor() {
        super();
        this.state = {
            js: undefined,
            content: undefined
        }
    }

    getPhotos () {
        fetch('http://localhost:4200/api/gamedev/', {
            method: 'get'
        }).then(res =>
            res.json().then(json => {
                this.setState({ js: json});
            })
        );
    }

    getArticles () {
        var jsonFinal = "";
        for(var i = 0; i < this.state.js.length; i++) {
            jsonFinal +=    "<div class='section'>" +
                                "<div class='section-info'>" +
                                    "<h2 class='section-title'>" + this.state.js[i].Title +"</h2>" +
                                    "<p class='section-description'>" + this.state.js[i].Description + "</p>" +
                                "</div>" +
                                "<img class='section-image' src=" + this.state.js[i].ImageUrl + "/>" +
                                "<div class='clear'/>" +
                            "</div></div>";
        }
        return jsonFinal;
        //this.setState({content: jsonFinal})
    }

    componentDidMount () {
        this.getPhotos();
    }

    render () {
        const { js } = this.state;
        return (
            <div className="gamedev-content">
                <br></br>
                <br></br>
                <h1>6 Years of Unity3D Games and Assets</h1>
                <h2><Link to="/contact" className="quote-button">Get a Quote</Link></h2>
                
                {js && <div className="content" dangerouslySetInnerHTML={{ __html: this.getArticles() }}></div>}

                <div className="clear"/>
            </div>
        );
    }
};


// export class GamedevContent extends React.Component {
//     render () {
//         return (
//             <div className="gamedev-content">
//                 <br></br>
//                 <br></br>
//                 <h1>6 Years of Unity3D Game and Assets</h1>
//                 <div className="section">
//                     <div className="section-info">
//                         <h2 className="section-title">Game 1</h2>
//                         <p className="section-description">
//                         Fusce in lectus purus. Nulla auctor ipsum malesuada congue dictum. Donec at suscipit tellus. Donec a sem nisl. Phasellus ullamcorper libero diam, nec tincidunt orci sollicitudin vel. Ut commodo consectetur ultrices. Nam rhoncus, metus ut hendrerit semper, nunc quam fermentum neque, nec tincidunt libero felis auctor risus. Integer eget est sed quam congue elementum sit amet at mauris.
//                         </p>
//                     </div>
//                     <img className="section-image" src={blank}/>
//                     <div className="clear"/>
//                 </div>

//                 <div className="section">
//                     <div className="section-info">
//                         <h2 className="section-title">Game 2</h2>
//                         <p className="section-description">
//                         Fusce in lectus purus. Nulla auctor ipsum malesuada congue dictum. Donec at suscipit tellus. Donec a sem nisl. Phasellus ullamcorper libero diam, nec tincidunt orci sollicitudin vel. Ut commodo consectetur ultrices. Nam rhoncus, metus ut hendrerit semper, nunc quam fermentum neque, nec tincidunt libero felis auctor risus. Integer eget est sed quam congue elementum sit amet at mauris.
//                         </p>
//                     </div>
//                     <img className="section-image" src={blank}/>
//                     <div className="clear"/>
//                 </div>

//                 <div className="section">
//                     <div className="section-info">
//                         <h2 className="section-title">Game 3</h2>
//                         <p className="section-description">
//                         Fusce in lectus purus. Nulla auctor ipsum malesuada congue dictum. Donec at suscipit tellus. Donec a sem nisl. Phasellus ullamcorper libero diam, nec tincidunt orci sollicitudin vel. Ut commodo consectetur ultrices. Nam rhoncus, metus ut hendrerit semper, nunc quam fermentum neque, nec tincidunt libero felis auctor risus. Integer eget est sed quam congue elementum sit amet at mauris.
//                         </p>
//                     </div>
//                     <img className="section-image" src={blank}/>
//                     <div className="clear"/>
//                 </div>
//             </div>
//         );
//     }
// };