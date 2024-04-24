import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import TeacherService from '../services/TeacherService';
import HeaderComponent from './HeaderComponent';

const ListTeacherComponent = () => {
    const [teachers, setTeachers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = () => {
        TeacherService.getTeachers()
            .then(res => setTeachers(res.data))
            .catch(err => console.error(err));
    }

    const removeTeacher = (teacherId) => {
        TeacherService.deleteTeacher(teacherId)
            .then(() => {
                // Update the teachers list after deletion
                fetchTeachers();
            })
            .catch(error => {
                console.log(error);
            });
    }

    const addTeacher = () => {
        navigate("/add-teacher");
    };

    const updateTeacher = (id) => {
        navigate(`/edit-teacher/${id}`)
    }

    const viewTeacher = (id) => {
        navigate(`/view-teacher/${id}`)
    }

    return (

        
            <div className=''>
    
                    
                
        <div className='bg'>
            <h2 className="text-center mt-4 mb-4">Teachers List</h2>
            <div className="row mb-4">
                <button className="btn btn-primary" onClick={addTeacher}>Add Teacher</button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead style={{ textAlign: "center" }}>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>
                        {
                            teachers.map(
                                teacher =>
                                    <tr key={teacher.id}>
                                        <td>{teacher.firstName}</td>
                                        <td>{teacher.lastName}</td>
                                        <td>{teacher.emailId}</td>
                                        <td>{teacher.subject}</td>
                                        <td style={{ textAlign: "center" }}>
                                            <button className="btn btn-primary btn-sm" onClick={() => updateTeacher(teacher.id)} style={{ width: "80px" }}>Update</button>
                                            <button className="btn btn-danger btn-sm" onClick={() => removeTeacher(teacher.id)} style={{ marginLeft: "10px",width: "80px" }}> Delete</button>
                                            <button className="btn btn-secondary btn-sm" onClick={() => viewTeacher(teacher.id)} style={{ marginLeft: "10px",width: "80px" }}> View</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default ListTeacherComponent;
