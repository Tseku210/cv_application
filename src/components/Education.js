import React from 'react';
import '../styles/Edu.css';

export default class Edu extends React.Component {
    render() {
        let edu = this.props.obj;
        return (
            <div>
                <div className="eduWrapper">
                    <div className="eduLeft">{edu.fromEdu} - {edu.toEdu}</div>
                    <div className="eduRight">
                        <div className="eduUniv">{edu.university}, {edu.cityEdu}</div>
                        <div className="eduDegree">Degree: {edu.degree}</div>
                        <div className="eduSubj">Subject: {edu.subject}</div>
                    </div>
                </div>
            </div>
        )
    }
}