import React from 'react'
import '../styles/Exp.css'

export default class Exp extends React.Component {
    render() {
        const exp = this.props.obj;
        return (
            <div>
                <hr />
                <div className="expWrapper">
                    <div className="expSec">
                        <div className="expLeft">{exp.from} - {exp.to}</div>
                        <div className="expRight">
                            <div className="expPos">{exp.position}</div>
                            <div className="expLoc">
                                <p>{exp.company}, {exp.city}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}