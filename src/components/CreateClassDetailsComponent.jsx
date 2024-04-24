import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ClassService from '../services/ClassService';

export default function CreateClassDetailsComponent() {
    const [className,setClassName] = useState('')
    const [teacherName,setTeacherName] = useState('')
    const [time,setTime] = useState('')
    const [description,setDescription] = useState('')

    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateDetail = (e) => {
        
        e.preventDefault()

        const detail = {className,teacherName,time,description}

        console.log(detail);

        if (id) {
            ClassService.updateDetail(id,detail)
                .then((response) => {
                    console.log("Update successful:", response.data); 
                    navigate('/class-details');
                })
                .catch(error => {
                    console.log("Error updating:", error);
                })
        
        }else{
            ClassService.createDetail(detail).then((response) => {

                console.log(response.data)

                navigate('/class-details');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {

        if(id){
            ClassService.getClassById(id).then((response) => {
                setClassName(response.data.className)
                setTeacherName(response.data.teacherName)
                setTime(response.data.time)
                setDescription(response.data.description)
            }).catch(error => {
                console.log(error)
            })
        }

    },[id])

    const pageTitle = () => {

        if(id){
            return <h2 className= "text-center">Update Details</h2> 
        }else{
            return <h2 className = "text-center mt-2">Add Details</h2>
        }

    }

  return (
    <div className='add mb-5'>
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
                                    <label className = "form-label text-dark"> Class Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter class name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {className}
                                        onChange = {(e) => setClassName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label text-dark"> Teacher Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter teacher name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {teacherName}
                                        onChange = {(e) => setTeacherName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label text-dark"> Date and Time :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter date and time"
                                        name = "email"
                                        className = "form-control"
                                        value = {time}
                                        onChange = {(e) => setTime(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label text-dark"> Description :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter about class"
                                        name = "age"
                                        className = "form-control"
                                        value = {description}
                                        onChange = {(e) => setDescription(e.target.value)}
                                    >
                                    </input>
                                </div>
                                
                                <button className = "btn btn-success mt-3" onClick = {(e) => saveOrUpdateDetail(e)} >Submit </button>

                        
                                <span style={{ marginLeft: '10px' }}></span>


                                <Link to="/class-details" className="btn btn-danger mt-3"> Cancel </Link> 
                                
                                
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
  )
}
