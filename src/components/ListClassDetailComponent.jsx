import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassService from '../services/ClassService';
import HeaderComponent from './HeaderComponent';

const ListClassDetailComponent = () => {
   const [classes,setClasses] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
    fetchDetails();
   }, []);

   const fetchDetails = () => {
    ClassService.getDetails()
        .then(res => setClasses(res.data))
        .catch(err => console.error(err));
   }

   const deleteDetail = (detailId) => {
    ClassService.removeDetail(detailId)
        .then(() => {
            // Update the teachers list after deletion
            fetchDetails();
        })
        .catch(error => {
            console.log(error);
        });
}


   const addDetail = () => {
    navigate("/add-details");
   };

    const updateDetail = (id) => {
        navigate(`/edit-details/${id}`)
    }


    return (

        <div className=''>
            
            <h2 className="text-center mt-3 mb-3">Class Time Table</h2>
            <div className="row mb-4">
                <button className="btn btn-primary" onClick={addDetail} >Add New Class</button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead style={{ textAlign: "center" }}>
                        <tr>
                            <th>Class</th>
                            <th>Teacher Name</th>
                            <th>Time and Date</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>
                        {
                             classes.map(
                                detail =>
                                    <tr key={detail.id}>
                                        <td>{detail.className}</td>
                                        <td>{detail.teacherName}</td>
                                        <td>{detail.time}</td>
                                        <td>{detail.description}</td>
                                        <td style={{ textAlign: "center" }}>
                                            <button className="btn btn-primary btn-sm" onClick={() => updateDetail(detail.id)}  style={{ width: "80px" }}>Update</button>
                                            <button className="btn btn-danger btn-sm" onClick={() => deleteDetail(detail.id)} style={{ marginLeft: "10px",width: "80px" }}> Delete</button>
                                            
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

export default ListClassDetailComponent;
