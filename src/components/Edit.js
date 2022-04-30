import React from 'react'
import '../styles/edit.css'
import Prototype from './Prototype'
import uniqid from 'uniqid'

export default class Edit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            personalInfo: {
                fname: '',
                lname: '',
                title: '',
                address: '',
                phoneNumber: '',
                email: '',
                desciption: ''
            },
            experience: 
                {
                    id: uniqid(),
                    position: '',
                    company: '',
                    city: '',
                    from: '',
                    to: ''
                },
            education: 
                {
                    id: uniqid(),
                    univeristy: '',
                    city: '',
                    degree: '',
                    from: '',
                    to: ''
                }
        }
    }

    handleInput = (e) => {
        let key = e.target.name;
        let val = e.target.value;
        this.setState(prev => ({
            ...prev,
            personalInfo: {
                ...prev.personalInfo,
                [key]: [val]
            }
        }))
    }

    handleChangeExperience = (e) => {
        let key = e.target.name;
        let val = e.target.value;
        this.setState(prev => ({
            ...prev,
            experience: {
                ...prev.experience,
                [key]: val
            }
        }))
        // this.setState((prevState) => {
        //     const newExperience = prevState.experience((expItem) => {
        //         if (expItem.id === id) {
        //             return {}
        //         }
        //     })
        // })
    }

    handleChangeEducation = (e) => {
        let key = e.target.name;
        let val = e.target.value;
        this.setState((prev => ({
            ...prev,
            education: {
                ...prev.education,
                [key]: val
            }
        })))
    }

    resetInput = () => {
        let inpt = document.getElementsByTagName('input');
        for (let i = 0; i < inpt.length; i++) {
            inpt[i].value = '';
        }
    }

    handleReset = () => {
        this.resetInput();
        this.setState({
            personalInfo: {
                fname: '',
                lname: '',
                title: '',
                address: '',
                phoneNumber: '',
                email: '',
                desciption: ''
            },
            experience: 
                {
                    id: uniqid(),
                    position: '',
                    company: '',
                    city: '',
                    from: '',
                    to: ''
                },
            education: 
                {
                    id: uniqid(),
                    univeristy: '',
                    city: '',
                    degree: '',
                    from: '',
                    to: ''
                }
        })
    }

    handleName = (e) => {
        let name = e.target.value
        let key = e.target.name
        this.setState(prev => ({
            personalInfo: {
                ...prev.personalInfo,
                [key]: name
            }
        }))
    }

    deleteExp = (e) => {

    }

    addExp = () => {

    }

    render() {
        return (
            <div>
                <div id="editBody">
                    <div className="editForm">
                        <div className="editPI">
                            Personal Information
                            <input name="fname" placeholder="First Name"type="text" className="editFName" onChange={this.handleName}/>
                            <input name="lname" placeholder="Last Name"type="text" className="editLName" onChange={this.handleName}/>
                            <input name="title" placeholder="Job Title"type="text" className="editTitle" onChange={this.handleInput}/>
                            {/* <label htmlFor="editImg">
                                Photo
                                <input name="photo" type="file" className="editImage" id="editImg"/>
                            </label> */}
                            <input name="address" placeholder="Address"type="text" className="editAddress" onChange={this.handleInput}/>
                            <input name="phoneNumber" placeholder="Phone Number"type="text" className="editNumber" onChange={this.handleInput}/>
                            <input name="email" placeholder="Email"type="mail" className="editMail" onChange={this.handleInput}/>
                            <textarea placeholder="Description" name="description" className="editDescription" cols="30" rows="5" onChange={this.handleInput}></textarea>
                        </div>
                        <div className="editExp">
                            Experience
                            <input name="position" placeholder="Position" type="text" className="editPos" onChange={this.handleChangeExperience} />
                            <input name="company" placeholder="Company" type="text" className="editComp" onChange={this.handleChangeExperience}/>
                            <input name="city" placeholder="City" type="text" className="editCity" onChange={this.handleChangeExperience}/>
                            <input name="from" placeholder="From" type="text" className="editFrom" onChange={this.handleChangeExperience}/>
                            <input name="to" placeholder="To" type="text" className="editTo" onChange={this.handleChangeExperience}/>
                            {/* <div className="editBtns">
                                <button className='editExpDelete' onClick={this.deleteExp}>Delete</button>
                                <button className="editExpAdd" onClick={this.addExp}>Add</button>
                            </div> */}
                        </div>
                        <div className="editEdu">
                            Education
                            <input onChange={this.handleChangeEducation} name="university" placeholder="University" type="text" className="editUni" />
                            <input onChange={this.handleChangeEducation} name="city" placeholder="City" type="text" className="editEduCity" />
                            <input onChange={this.handleChangeEducation} name="degree" placeholder="Degree" type="text" className="editEduDegree" />
                            <input onChange={this.handleChangeEducation} name="subject" placeholder="Subject" type="text" className="editEduSubject" />
                            <input onChange={this.handleChangeEducation} name="from" placeholder="From" type="text" className="editEduFrom" />
                            <input onChange={this.handleChangeEducation} name="to" placeholder="To" type="text" className="editEduTo" />
                            {/* <div className="editBtns">
                                <button className='editEduDelete'>Delete</button>
                                <button className="editEduAdd">Add</button>
                            </div> */}
                        </div>
                        <div className="editBtns">
                            {/* <button onClick={this.handleInput}>Submit</button> */}
                            <button onClick={this.handleReset}>Reset</button>
                        </div>
                    </div>
                </div>
                <Prototype obj={this.state} />
            </div>
        )
    }
}