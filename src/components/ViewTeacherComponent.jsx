import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherService from '../services/TeacherService';

const ViewTeacherComponent = () => {
    const [teacher, setTeacher] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchTeacher(id);
    }, [id]);

    const fetchTeacher = (id) => {
        TeacherService.getTeacherById(id)
            .then(res => setTeacher(res.data))
            .catch(err => console.error(err));
    }

    return (
        <section
			className="shadow"
			style={{ backgroundColor: "whitesmoke",borderRadius:'25px', marginTop:80  }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">
									{`${teacher.firstName} ${teacher.lastName}`}
								</h5>
								<div className="d-flex justify-content-center mb-2">
									<Link to="/contact"
										type="button"
										className="btn btn-outline-warning ms-1">
										Email
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											First Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{teacher.firstName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Last Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{teacher.lastName}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Email
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{teacher.emailId}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Subject
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{teacher.subject}
										</p>
									</div>
	                                <Link to="/" className = "btn btn-info  mt-5 pr-4 " style={{ width: "110px", marginLeft:"400px" }}>Back</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

    );
}

export default ViewTeacherComponent;
