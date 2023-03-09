import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const ProjectList = () => {
    const [progress, setProgress] = useState(40);
    const [teamMembers, setTeamMembers] = useState([
        { name: 'Fahim', avatar: 'assets/img/profiles/avatar-09.jpg' },
        { name: 'Samia', avatar: 'assets/img/profiles/avatar-09.jpg' },
    ]);

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8000/api/project/all', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'

                    },

                });
                const data = await response.json();
                // Do something with the response data
                if (response.ok) {
                    setProjects(data.projects);
                    console.log(data.projects);

                }

            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (

        <div className="page-wrapper">
            <AdminNavbar></AdminNavbar>

            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Projects</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="admin-dashboard.html">Dashboard</a></li>
                                <li className="breadcrumb-item active">Projects</li>
                            </ul>
                        </div>
                        <div className="col-auto float-end ms-auto">
                            <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#create_project"><i
                                className="fa fa-plus"></i> Create Project</a>
                            <div className="view-icons">
                                <a href="projects.html" className="grid-view btn btn-link"><i className="fa fa-th"></i></a>
                                <a href="project-list.html" className="list-view btn btn-link active"><i
                                    className="fa fa-bars"></i></a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row filter-row">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus">
                            <input type="text" className="form-control floating" />
                            <label className="focus-label">Project Name</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus">
                            <input type="text" className="form-control floating" />
                            <label className="focus-label">Employee Name</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus select-focus">
                            <select className="select floating">
                                <option>Select Roll</option>
                                <option>Web Developer</option>
                                <option>Web Designer</option>
                                <option>Android Developer</option>
                                <option>Ios Developer</option>
                            </select>
                            <label className="focus-label">Role</label>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <a href="#" className="btn btn-success w-100"> Search </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table datatable">
                                <thead>
                                    <tr>
                                        <th>Project</th>
                                        <th>Progress</th>
                                        <th>Leader</th>
                                        <th>Team</th>
                                        <th>Deadline</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        projects?.map(item => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>
                                                        <Link to={`/project/${item.id}`}>{item.project_name}</Link>
                                                    </td>
                                                    <td>
                                                    <div className="progress progress-xs mb-0">
                                                        <div
                                                            className="bg-success"
                                                            role="progressbar"
                                                            data-bs-toggle="tooltip"
                                                            title={`${progress}%`}
                                                            style={{ width: `${progress}%` }}
                                                            aria-label={`${progress}%`}
                                                        ></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul className="team-members">
                                                        <li>
                                                            <a href="#" data-bs-toggle="tooltip" title="Jeffery Lalor"><img
                                                                alt="" src="assets/img/profiles/avatar-16.jpg" /></a>
                                                        </li>
                                                    </ul>
                                                </td>

                                                <td>
                                                    <div className="dropdown action-label">
                                                        <a
                                                            href=""
                                                            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="fa fa-users text-danger"></i> Team
                                                        </a>
                                                        <div className="dropdown-menu">
                                                            {teamMembers.map((member, index) => (
                                                                <a key={index} className="dropdown-item" href="#">
                                                                    <span className="avatar flex-shrink-0">
                                                                        <img alt="" src={member.avatar} />
                                                                    </span>
                                                                    {member.name}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>

                                                </td>


                                                <td>17 Apr 2019 </td>
                                                <td>
                                                    <div className="dropdown action-label">
                                                        <a href="" className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                                            data-bs-toggle="dropdown" aria-expanded="false"><i
                                                                className="fa fa-dot-circle-o text-danger"></i> High </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#"><i
                                                                className="fa fa-dot-circle-o text-danger"></i> High</a>
                                                            <a className="dropdown-item" href="#"><i
                                                                className="fa fa-dot-circle-o text-warning"></i> Medium</a>
                                                            <a className="dropdown-item" href="#"><i
                                                                className="fa fa-dot-circle-o text-success"></i> Low</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="dropdown action-label">
                                                        <a href="" className="btn btn-white btn-sm btn-rounded dropdown-toggle"
                                                            data-bs-toggle="dropdown" aria-expanded="false"><i
                                                                className="fa fa-dot-circle-o text-success"></i> Active </a>
                                                        <div className="dropdown-menu">
                                                            <a className="dropdown-item" href="#"><i
                                                                className="fa fa-dot-circle-o text-success"></i> Active</a>
                                                            <a className="dropdown-item" href="#"><i
                                                                className="fa fa-dot-circle-o text-danger"></i> Inactive</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <div className="dropdown dropdown-action">
                                                        <a href="#" className="action-icon dropdown-toggle"
                                                            data-bs-toggle="dropdown" aria-expanded="false"><i
                                                                className="material-icons">more_vert</i></a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal"
                                                                data-bs-target="#edit_project"><i
                                                                    className="fa fa-pencil m-r-5"></i> Edit</a>
                                                            <a className="dropdown-item" href="#" data-bs-toggle="modal"
                                                                data-bs-target="#delete_project"><i
                                                                    className="fa fa-trash-o m-r-5"></i> Delete</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                </tr>


                                            );
                                        })
                                    }



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <div id="create_project" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Project</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Project Name</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Client</label>
                                            <select className="select">
                                                <option>Global Technologies</option>
                                                <option>Delta Infotech</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Start Date</label>
                                            <div className="cal-icon">
                                                <input className="form-control datetimepicker" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>End Date</label>
                                            <div className="cal-icon">
                                                <input className="form-control datetimepicker" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Rate</label>
                                            <input placeholder="$50" className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>&nbsp;</label>
                                            <select className="select">
                                                <option>Hourly</option>
                                                <option>Fixed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Priority</label>
                                            <select className="select">
                                                <option>High</option>
                                                <option>Medium</option>
                                                <option>Low</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Add Project Leader</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Team Leader</label>
                                            <div className="project-members">
                                                <a href="#" data-bs-toggle="tooltip" title="Jeffery Lalor"
                                                    className="avatar">
                                                    <img src="assets/img/profiles/avatar-16.jpg" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Add Team</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Team Members</label>
                                            <div className="project-members">
                                                <a href="#" data-bs-toggle="tooltip" title="John Doe" className="avatar">
                                                    <img src="assets/img/profiles/avatar-16.jpg" alt="" />
                                                </a>
                                                <a href="#" data-bs-toggle="tooltip" title="Richard Miles"
                                                    className="avatar">
                                                    <img src="assets/img/profiles/avatar-09.jpg" alt="" />
                                                </a>
                                                <a href="#" data-bs-toggle="tooltip" title="John Smith" className="avatar">
                                                    <img src="assets/img/profiles/avatar-10.jpg" alt="" />
                                                </a>
                                                <a href="#" data-bs-toggle="tooltip" title="Mike Litorus"
                                                    className="avatar">
                                                    <img src="assets/img/profiles/avatar-05.jpg" alt="" />
                                                </a>
                                                <span className="all-team">+2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <div id="editor"></div>
                                </div>
                                <div className="form-group">
                                    <label>Upload Files</label>
                                    <input className="form-control" type="file" />
                                </div>
                                <div className="submit-section">
                                    <button className="btn btn-primary submit-btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div id="edit_project" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Project</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Project Name</label>
                                            <input className="form-control" value="Project Management" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Client</label>
                                            <select className="select">
                                                <option>Global Technologies</option>
                                                <option>Delta Infotech</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Start Date</label>
                                            <div className="cal-icon">
                                                <input className="form-control datetimepicker" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>End Date</label>
                                            <div className="cal-icon">
                                                <input className="form-control datetimepicker" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>Rate</label>
                                            <input placeholder="$50" className="form-control" value="$5000" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label>&nbsp;</label>
                                            <select className="select">
                                                <option>Hourly</option>
                                                <option selected>Fixed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Priority</label>
                                            <select className="select">
                                                <option selected>High</option>
                                                <option>Medium</option>
                                                <option>Low</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Add Project Leader</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Team Leader</label>
                                            <div className="project-members">
                                                <a href="#" data-bs-toggle="tooltip" title="Jeffery Lalor"
                                                    className="avatar">
                                                    <img src="assets/img/profiles/avatar-16.jpg" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Add Team</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Team Members</label>
                                            <div className="project-members">
                                                <a href="#" data-bs-toggle="tooltip" title="John Doe" className="avatar">
                                                    <img src="assets/img/profiles/avatar-16.jpg" alt="" />
                                                </a>
                                                <a href="#" data-bs-toggle="tooltip" title="Richard Miles"
                                                    className="avatar">
                                                    <img src="assets/img/profiles/avatar-09.jpg" alt="" />
                                                </a>
                                                <a href="#" data-bs-toggle="tooltip" title="John Smith" className="avatar">
                                                    <img src="assets/img/profiles/avatar-10.jpg" alt="" />
                                                </a>
                                                <a href="#" data-bs-toggle="tooltip" title="Mike Litorus"
                                                    className="avatar">
                                                    <img src="assets/img/profiles/avatar-05.jpg" alt="" />
                                                </a>
                                                <span className="all-team">+2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea rows="4" className="form-control"
                                        placeholder="Enter your message here"></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Upload Files</label>
                                    <input className="form-control" type="file" />
                                </div>
                                <div className="submit-section">
                                    <button className="btn btn-primary submit-btn">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal custom-modal fade" id="delete_project" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="form-header">
                                <h3>Delete Project</h3>
                                <p>Are you sure want to delete?</p>
                            </div>
                            <div className="modal-btn delete-action">
                                <div className="row">
                                    <div className="col-6">
                                        <a href="javascript:void(0);" className="btn btn-primary continue-btn">Delete</a>
                                    </div>
                                    <div className="col-6">
                                        <a href="javascript:void(0);" data-bs-dismiss="modal"
                                            className="btn btn-primary cancel-btn">Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProjectList;