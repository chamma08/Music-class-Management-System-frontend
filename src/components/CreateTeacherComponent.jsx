import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import TeacherService from '../services/TeacherService';
import { Link } from 'react-router-dom';

const CreateTeacherComponent = () => {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [emailId,setEmailId] = useState('')
    const [subject,setSubject] = useState('')

    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateTeacher = (e) => {
        
        e.preventDefault()

        const teacher = {firstName,lastName,emailId,subject}

        console.log(teacher);

        if (id) {
            TeacherService.updateTeacher(id,teacher)
                .then((response) => {
                    console.log("Update successful:", response.data); 
                    navigate('/teachers');
                })
                .catch(error => {
                    console.log("Error updating teacher:", error);
                })
        
        }else{
            TeacherService.createTeacher(teacher).then((response) => {

                console.log(response.data)

                navigate('/teachers');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {

        if(id){
            TeacherService.getTeacherById(id).then((response) => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmailId(response.data.emailId)
                setSubject(response.data.subject)
            }).catch(error => {
                console.log(error)
            })
        }

    },[id])

    const pageTitle = () => {

        if(id){
            return <h2 className= "text-center">Update Teacher</h2> 
        }else{
            return <h2 className = "text-center mt-2">Add Teacher</h2>
        }

    }

    return (
        <div className='add'>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           pageTitle()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label text-dark"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label text-dark"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label text-dark"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "email"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label text-dark"> Subject :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Subject"
                                        name = "subject"
                                        className = "form-control"
                                        value = {subject}
                                        onChange = {(e) => setSubject(e.target.value)}
                                    >
                                    </input>
                                </div>
                                
                                <button className = "btn btn-success mt-3" onClick = {(e) => saveOrUpdateTeacher(e)} >Submit </button>

                        
                                <span style={{ marginLeft: '10px' }}></span>


                                <Link to="/teachers" className="btn btn-danger mt-3"> Cancel </Link> 
                                
                                
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default CreateTeacherComponent