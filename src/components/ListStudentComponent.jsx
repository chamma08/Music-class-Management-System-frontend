import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentService from '../services/StudentService';
import HeaderComponent from './HeaderComponent';

const ListStudentComponent = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = () => {
        StudentService.getStudents()
            .then(res => setStudents(res.data))
            .catch(err => console.error(err));
    }

    const removeStudent = (studentId) => {
        StudentService.deleteStudent(studentId)
            .then(() => {
                // Update the teachers list after deletion
                fetchStudents();
            })
            .catch(error => {
                console.log(error);
            });
    }


    const addStudent = () => {
        navigate("/add-student");
    };

    const updateStudent = (id) => {
        navigate(`/edit-student/${id}`)
    }


    return (
        <div>
            
            <h2 className="text-center mt-4 mb-4">Students List</h2>
            <div className="row mb-4">
                <button className="btn btn-primary" onClick={addStudent} >Add Student</button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead style={{ textAlign: "center" }}>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Student ID</th>
                            <th>Date Of Birth</th>
                            <th>Email</th>
                            <th>Class Detail</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>
                        {
                            students.map(
                                student =>
                                    <tr key={student.id}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.age}</td>
                                        <td>{student.studentId}</td>
                                        <td>{student.dob}</td>
                                        <td>{student.email}</td>
                                        <td>{student.classDetail}</td>
                                        <td style={{ textAlign: "center" }}>
                                            <button className="btn btn-primary btn-sm" onClick={() => updateStudent(student.id)}  style={{ width: "80px" }}>Update</button>
                                            <button className="btn btn-danger btn-sm" onClick={() => removeStudent(student.id)} style={{ marginLeft: "10px",width: "80px" }}> Delete</button>
                                            
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListStudentComponent;
