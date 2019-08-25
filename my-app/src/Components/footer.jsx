import React from 'react';

export class Footer extends React.Component {
    render () {
        return (
            <div className="footer">
                <ul className="footer-list">
                    <li className="footer-item"><a href="/">Footer Item 1</a></li> 
                    <li className="footer-item"><a href="/">Footer Item 2</a></li> 
                    <li className="footer-item"><a href="/">Footer Item 3</a></li> 
                    <li className="footer-item"><a href="/">Footer Item 4</a></li> 
                    <li className="footer-item"><a href="/">Footer Item 5</a></li> 
                </ul>
            </div>
        );
    }
};