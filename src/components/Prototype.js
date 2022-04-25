import React from 'react'
import '../styles/Prototype.css'

export default class Prototype extends React.Component {
    render() {
        return (
            <div id='bodyPr'>
                <div className="headerPr">
                    <h1></h1>
                    <p></p>
                </div>
                <div className="mainPr">
                    <div>
                        <h3>Description</h3>
                        <hr />
                        <div className="decSec"></div>
                    </div>
                    <div>
                        <h3>Experience</h3>
                        <hr />
                        <div className="expSec">

                        </div>
                    </div>
                    <div>
                        <h3>Education</h3>
                        <hr />
                        <div className="eduSec"></div>
                    </div>
                </div>
                <div className="rightbarPr">
                    <div className="rbImg"></div>
                    <div className="rbSec">
                        <h3>Personal Details</h3>
                        <hr />
                        <div>
                            <h4>Address</h4>
                        </div>
                        <div>
                            <h4>Phone Number</h4>
                        </div>
                        <div>
                            <h4>Email</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}