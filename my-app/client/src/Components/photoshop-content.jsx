import React from 'react';
import './photoshop-content.css';
import { Link } from 'react-router-dom';

export class PhotoshopContent extends React.Component {

    constructor() {
        super();
        this.state = {
            js: undefined,
        }
    }

    getPhotos () {
        fetch('http://localhost:4200/api/photoshops/', {
            method: 'get'
        }).then(res =>
            res.json().then(json => {
                this.setState({ js: json});
            })
        );
    }

    getPhotoColumn (column) {
        var jsonFinal = "";
        for(var i = column; i < this.state.js.length; i+=3) {
            jsonFinal += "<img className='img' src='" + this.state.js[i].ImageUrl + "' title='" + this.state.js[i].Title + "'/>";
        }
        return jsonFinal;
    }

    componentDidMount () {
        this.getPhotos();
    }

    render () {
        const { js } = this.state;
        return (
            <div className="photoshop-content">
                <br></br>
                <br></br>
                <h1>Restoration, Colorization, Manipulation</h1>
                <h2>7 Years of Photoshop Experience</h2>

                <h2><Link to="/contact" className="quote-button">Get a Quote</Link></h2>
                
                {js && <div className="column" dangerouslySetInnerHTML={{ __html: this.getPhotoColumn(0) }}></div>}

                {js && <div className="column" dangerouslySetInnerHTML={{ __html: this.getPhotoColumn(1) }}></div>}

                {js && <div className="column" dangerouslySetInnerHTML={{ __html: this.getPhotoColumn(2) }}></div>}

                <div className="clear"/>
            </div>
        );
    }
};