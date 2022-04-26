import React from 'react'
import '../styles/Prototype.css'
import Exp from './Experience'

export default class Prototype extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.obj;
    }

    render() {
        const pInfo = this.props.obj.personalInfo
        const edu = this.props.obj.education
        const exp = this.props.obj.experience
        return (
            <div id='bodyPr'>
                <div className="headerPr">
                    <h1>{pInfo.fname} {pInfo.lname}</h1>
                    <p>{pInfo.title}</p>
                </div>
                <div className="mainPr">
                    <div>
                        <h3>Description</h3>
                        <hr />
                        <div className="decSec">{pInfo.description}</div>
                    </div>
                    <div>
                        <h3>Experience</h3>
                        <Exp obj={this.state.experience[0]}/>
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
                            <p>{pInfo.address}</p>
                        </div>
                        <div>
                            <h4>Phone Number</h4>
                            <p>{pInfo.phoneNumber}</p>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p>{pInfo.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}