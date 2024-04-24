import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import StudentService from '../services/StudentService';
import { Link } from 'react-router-dom';

const CreateStudentComponent = () => {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [age,setAge] = useState('')
    const [studentId,setStudentId] = useState('')
    const [dob,setDob] = useState('')
    const [email,setEmail] = useState('')
    const [classDetail,setClassDetail] = useState('')

    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateStudent = (e) => {
        
        e.preventDefault()

        const student = {firstName,lastName,email,age,studentId,dob,classDetail}

        console.log(student);

        if (id) {
            StudentService.updateStudent(id,student)
                .then((response) => {
                    console.log("Update successful:", response.data); 
                    navigate('/students');
                })
                .catch(error => {
                    console.log("Error updating student:", error);
                })
        
        }else{
            StudentService.createStudent(student).then((response) => {

                console.log(response.data)

                navigate('/students');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {

        if(id){
            StudentService.getStudentById(id).then((response) => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
                setAge(response.data.age)
                setStudentId(response.data.studentId)
                setDob(response.data.dob)
                setClassDetail(response.data.classDetail)
            }).catch(error => {
                console.log(error)
            })
        }

    },[id])

    const pageTitle = () => {

        if(id){
            return <h2 className= "text-center">Update Student</h2> 
        }else{
            return <h2 className = "text-center mt-2">Add Student</h2>
        }

    }

    return (
        <div className='add mb-8'>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3">
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
                                    <label className = "form-label text-dark"> Email :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label text-dark"> Age :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Age"
                                        name = "age"
                                        className = "form-control"
                                        value = {age}
                                        onChange = {(e) => setAge(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label text-dark"> Student ID :</label>
                                    <input
                                        type = "text"
                                        placeholder = "SAXXXXXXX"
                                        name = "studentId"
                                        className = "form-control"
                                        value = {studentId}
                                        onChange = {(e) => setStudentId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label text-dark"> Date of Birth :</label>
                                    <input
                                        type = "date"
                                        placeholder = "Ex:12 AUG 2001"
                                        name = "dob"
                                        className = "form-control text-muted"
                                        value = {dob}
                                        onChange = {(e) => setDob(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label text-dark"> Class Details :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Class"
                                        name = "classDetail"
                                        className = "form-control"
                                        value = {classDetail}
                                        onChange = {(e) => setClassDetail(e.target.value)}
                                    >
                                    </input>
                                </div>
                                
                                <button className = "btn btn-success mt-3" onClick = {(e) => saveOrUpdateStudent(e)} >Submit </button>

                        
                                <span style={{ marginLeft: '10px' }}></span>


                                <Link to="/students" className="btn btn-danger mt-3"> Cancel </Link> 
                                
                                
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default CreateStudentComponent