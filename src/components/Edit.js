import React from 'react'
import '../styles/edit.css'

export default class Edit extends React.Component {

    handleInput = () => {
        
    }

    render() {
        return (
            <div>
                <div id="editBody">
                    <div className="editForm">
                        <div className="editPI">
                            Personal Information
                            <input placeholder="First Name"type="text" className="editFName"/>
                            <input placeholder="Last Name"type="text" className="editLName" />
                            <input placeholder="Job Title"type="text" className="editTitle" />
                            <label htmlFor="editImg">
                                Photo
                                <input type="file" className="editImage" id="editImg"/>
                            </label>
                            <input placeholder="Address"type="text" className="editAddress" />
                            <input placeholder="Phone Number"type="text" className="editNumber" />
                            <input placeholder="Email"type="mail" className="editMail" />
                            <textarea placeholder="Description" name="text" className="editDescription" cols="30" rows="5"></textarea>
                        </div>
                        <div className="editExp">
                            Experience
                            <input placeholder="Position" type="text" className="editPos" />
                            <input placeholder="Company" type="text" className="editComp" />
                            <input placeholder="City" type="text" className="editCity" />
                            <input placeholder="From" type="text" className="editFrom" />
                            <input placeholder="To" type="text" className="editTo" />
                            <div className="editBtns">
                                <button className='editExpDelete'>Delete</button>
                                <button className="editExpAdd">Add</button>
                            </div>
                        </div>
                        <div className="editEdu">
                            Education
                            <input placeholder="University" type="text" className="editUni" />
                            <input placeholder="City" type="text" className="editEduCity" />
                            <input placeholder="Degree" type="text" className="editEduDegree" />
                            <input placeholder="Subject" type="text" className="editEduSubject" />
                            <input placeholder="From" type="text" className="editEduFrom" />
                            <input placeholder="To" type="text" className="editEduTo" />
                            <div className="editBtns">
                                <button className='editEduDelete'>Delete</button>
                                <button className="editEduAdd">Add</button>
                            </div>
                        </div>
                        <div className="editBtns">
                            <button>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}